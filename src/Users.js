import React from 'react';
import { Link } from 'react-router-dom';
import * as fromUserAPI from './api/users';

class Users extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            projets: []
        }
    }

    async componentDidMount() {
        const users = await fromUserAPI.getUsers()
        const projets = await fromUserAPI.getProjets()
        this.setState({
            users: users,
            projets: projets
        })
    }

    async postProjet() {
        const projet = await fromUserAPI.postProjet({
            nom_projet: this.state.nom_projet,
            description: this.state.description
        })
        const projets = await fromUserAPI.getProjets()
        this.setState({
            projets: projets
        })
    }

    async deleteProjet(pute) {
        console.log(pute);
        fromUserAPI.deleteProjet({
            id: pute
        })
        const projets = await fromUserAPI.getProjets()
        this.setState({
            projets: projets
        })
    }

        

    handleChange(e) {
        e.preventDefault()
        let name = e.target.name
        this.setState({
            [name]: e.target.value
        }, () => console.log("callback", this.state))
        console.log(this.state)
    }

              
    popOnClick(values){
        var x = document.getElementById("card");
        if(x.style.visibility === "hidden"){
            x.style.visibility = 'visible';
        }
        this.setState({
            selectedDescription: values.description,
            selectedId: values._id
        })
    }


    render() {
        return (
            <div className="App">
                <div id="leftMainPage">
                    <div id="inputContentLeft" class="inputContent">
                        <label>Entrez un nom de projet</label>
                        <input class="inputProjet" type="text" name="nom_projet" value={this.state.nom_projet} onChange={(e) => this.handleChange(e)} />
                    </div>
                    <div id="inputContentRight" class="inputContent">
                        <label>Entrez une description du projet</label>
                        <input class="inputProjet" type="text" name="description" value={this.state.description} onChange={(e) => this.handleChange(e)} />
                    </div>
                    <div id="inputContentBottom">
                        <button class="validateButton" onClick={() => this.postProjet()}>Ajouter phase Projet</button>
                    </div> 
                </div>
                <div id="rightMainPage">
                    {/* <ul>
                        {
                            this.state.users.map((u,i) => {return <li key={i}>{u.email}</li>})
                        }
                    </ul> */}
                    <ul>
                        {
                            this.state.projets.map((u, i) => { 
                                return <li key={i}>
                                    <button style={{border:'none', backgroundColor : 'transparent'}} onClick={() => this.popOnClick(u)}>{u.nom_projet}</button>
                                </li> 
                            })
                        }
                    </ul>
                    {/* <Link to={{pathname: '/', data:this.state}}>Home</Link> */}
                </div>
                <div class="py-4 container" id="bottomMainPage">
                    <div class="justify-content-center">
                        <div class="col-md-8">
                            <div class="card" id="card" style={{visibility: 'hidden'}}>
                                <div class="card-body">
                                {this.state.selectedDescription}
                                {this.state.selectedId}
                                <button type="submit" class="btn btn-danger" onClick={() => this.deleteProjet({id: this.state.selectedId})}>Delete</button> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Users;