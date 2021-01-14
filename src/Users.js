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

    handleChange(e) {
        e.preventDefault()
        let name = e.target.name
        this.setState({
            [name]: e.target.value
        }, () => console.log("callback", this.state))
        console.log(this.state)
    }

              
    popOnClick(){
        var x = document.getElementById("card");
        if(x.style.visibility === "hidden"){
            x.style.visibility = 'visible';
        }
        
    }


    render() {
        return (
            <div className="App">
                <input type="text" name="nom_projet" value={this.state.nom_projet} onChange={(e) => this.handleChange(e)} />
                <br />
                <input type="text" name="description" value={this.state.description} onChange={(e) => this.handleChange(e)} />
                <br />
                <button onClick={() => this.postProjet()}>Ajouter phase Projet</button>
                {/* <ul>
                    {
                        this.state.users.map((u,i) => {return <li key={i}>{u.email}</li>})
                    }
                </ul> */}
                <ul>
                    {
                        this.state.projets.map((u, i) => { 
                            return <li key={i}>
                                <button style={{border:'none', backgroundColor : 'transparent'}} 
                                onClick={() => this.popOnClick()}>{u.nom_projet}</button>
                            </li> 
                        })
                    }
                </ul>
                {/* <Link to={{pathname: '/', data:this.state}}>Home</Link> */}
                <div class="py-4">
                    <div class="row justify-content-center">
                        <div class="col-md-8">
                            <div class="card" id="card" style={{visibility: 'hidden'}}>
                                <div class="card-body">
                                    {
                                    this.state.projets.map((u, i) => {
                                        return <p key={i}>{u.description}</p>
                                        })
                                    }
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