import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './Users';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    this.setState({
      data: this.props.location.data
    })
    console.log(this.props.location.data)
  }

  render() {
    return (
      <div className="App">
        <header>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <img src={logo} className="App-logo d-inline-block align-top" alt="logo" />
              <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li class="nav-item active navbar">
                    <Link to="/">Accueil</Link>
                  </li>
                  <li class="nav-item navbar">
                    <Link to="/">Description</Link>
                  </li>
                  <li class="nav-item navbar">
                    <Link to="/users">Users</Link>
                  </li>
                </ul>
              </div>
            </nav>
        </header>
        <body class="container-fluid fullScreen remove-all-margin">
          <div id="row topMainPage">
            <h1 class="text-primary py-4">Projet de fin de semaine</h1>
            <p>Ce site vous propose de rentrer le nom de votre projet ainsi que sa description, ou de découvrir les autres projets</p>
          </div>
          <div id="renderUserContent">
            <Users users={this.state.users} />
              {/* <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a> */}
          </div>
        </body>
        <footer class="footer text-light">
          <div>
            <h3>Created by: Louise Binvignat & Loïc Gondet</h3>
          </div>
        </footer>
      </div>
    );
  }
}
export default App;