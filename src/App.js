import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './Users';

//https://react-bootstrap.github.io/getting-started/introduction/ bootstrap doc
class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      users: []
    }
  }

  componentWillMount(){
    console.log("component will mount");
    this.setState({
      users: [...this.state.users, "Bob"]
    });
  }

  render (){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Users users={this.state.users}/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
export default App;