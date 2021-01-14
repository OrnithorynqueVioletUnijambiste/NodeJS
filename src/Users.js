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

    async deleteProjet(grosId) {
        console.log(grosId.id);
        const projet = await fromUserAPI.deleteProjet({
            _id: grosId.id
        })
        const projets = await fromUserAPI.getProjets()
        this.setState({
            projets: projets
        })
        var x = document.getElementById("card");
        if(x.style.visibility === "visible"){
            x.style.visibility = "hidden";
        }
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
                <div class="row">
                    <div id="leftMainPage" class="row">
                        <div id="inputContentLeft" class="col-md-6 col-12 inputContent">
                            <label>Entrez un nom de projet</label>
                            <div class="inputProjet">
                                <textarea cols="40" rows="1" name="nom_projet" value={this.state.nom_projet} onChange={(e) => this.handleChange(e)} ></textarea>
                            </div>
                        </div>
                        <div id="inputContentRight" class="col-md-6 col-12 inputContent">
                            <label>Entrez une description du projet</label>
                            <textarea cols="60" rows="5" name="description" value={this.state.description} onChange={(e) => this.handleChange(e)}></textarea>
                        </div>
                        <div id="inputContentBottom" class="col-12">
                            <button class="btn btn-success" onClick={() => this.postProjet()}>Ajouter phase Projet</button>
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
                </div>
                <div class="row py-4" id="bottomMainPage">
                    <div class="justify-content-center col-12" id="InfoContent">
                        <div class="">
                            <div class="card" id="card" style={{visibility: 'hidden'}}>
                                <div class="card-body">
                                    {this.state.selectedDescription}
                                    <br/>
                                    <button type="submit" class="btn btn-danger" onClick={() => this.deleteProjet({id: this.state.selectedId})}>Supprimer le projet</button> 
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