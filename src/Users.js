import React from 'react';

class Users extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <ul>
                {
                    this.props.users.map(u => <li>{u}</li>)
                }
                </ul>
            </div>
        )
    }
}

export default Users;