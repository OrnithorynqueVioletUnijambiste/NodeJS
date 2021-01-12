import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './Users';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

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
        <header>
        </header>
        <body class="fullScreen">
          <nav class="navbar navbar-dark bg-dark">
            <a class="nav-item nav-link active">
              <img src={logo} className="App-logo d-inline-block align-top" alt="logo" />Home
            </a>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Description</a>
                </li>
                <li class="nav-item">
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div>
            <h1 class="text-primary">Projet fin d'année</h1>
            <p>Bienvenue sur notre site explicatif de notre projet de fin d'année</p>
            <Users users={this.state.users}/>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            
          </div>
        </body>
        <footer class="footer text-light">
          <div>
            <h3>Create by:</h3>
          </div>
        </footer>
      </div>
    );
  }
}
export default App;