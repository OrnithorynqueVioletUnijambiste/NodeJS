import React from 'react';
import {Link} from 'react-router-dom';

class Users extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)

        this.state={

        }
    }

    handleChange(e){
        e.preventDefault()
        let name = e.target.namethis.setSatete({
            [name]: e.target.value
        })
    }
    render(){
        return(
            <div className="App">
                <input type="text" name="nom" value="" onChange={(e) =>this.handleChange(e)}/>
                <input type="text" name="age" value="" onChange={(e) =>this.handleChange(e)}/>
                <Link to ="/">home</Link>
            </div>
        )
    }
}

export default Users;