import React from 'react';
import {Link} from 'react-router-dom';
import * as fromUserAPI from './api/users';

class Users extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
        this.state={users: []}
    }

    async componentDidMount(){
        const users = await fromUserAPI.getUsers()
        this.setState({
            users: users
        })
    }

    handleChange(e){
        e.preventDefault()
        let name = e.target.name
        this.setState({
            [name]: e.target.value
        },() => console.log("callback", this.state))
        console.log(this.state)
    }
    render(){
        return(
            <div className="App">
                <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)}/>
                <input type="text" name="email" value={this.state.email} onChange={(e) => this.handleChange(e)}/>
                <ul>
                    {
                        this.state.users.map((u,i) => {return <li key={i}>{u.name}</li>})
                    }
                </ul>
                <Link to={{pathname: '/', data:this.state}}>Home</Link>
            </div>
        );    
    }
}

export default Users;