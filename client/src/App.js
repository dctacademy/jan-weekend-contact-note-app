import React, { Component } from 'react';
// npm install --save react-router-dom axios bootstrap
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './components/Home'

// users components
import Register from './components/users/Register'
import Login from './components/users/Login'

// contacts components
import ContactList from './components/contacts/List'
import ContactAdd from './components/contacts/Add'
import ContactShow from './components/contacts/Show'
import ContactEdit from './components/contacts/Edit'

// notes components 



class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      isAuthenticated: false 
    }
  }

  // handle page reloading, if the user is logged in, continue to login
  componentDidMount() {
    if(localStorage.getItem('token')) {
      this.setState(() => ({ 
        isAuthenticated: true 
      }))
    }
  }

  handleAuthentication = (boolean) => {
    this.setState(() => ({
      isAuthenticated: boolean
    }))
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
            <a className="navbar-brand" href="/">Contact App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link to="/" className="nav-item nav-link">Home</Link>
                { this.state.isAuthenticated ? (
                  <React.Fragment>
                    <Link to="/contacts" className="nav-item nav-link">Contacts</Link>
                    <Link to="/users/logout" className="nav-item nav-link" >Logout </Link>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <Link to = "/users/register" className = "nav-item nav-link">Register</Link>
                    <Link to="/users/login" className="nav-item nav-link">Login</Link>
                  </React.Fragment>
                )}
              
              </div>
            </div>
          </nav>

          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/users/register" component={Register} />
            <Route path="/users/login" render={(props) => {
              return <Login {...props} handleAuthentication={this.handleAuthentication} />
            }} />

            <Route path="/users/logout" render={(props) => {
              axios.delete('http://localhost:3005/users/logout', {
                headers: {
                  'x-auth': localStorage.getItem('token')
                }
              })
                .then(response => {
                  props.history.push('/users/login')
                  this.setState(() => ({
                    isAuthenticated: false
                  }))
                  localStorage.removeItem('token')
                })
            }} />

            <Route path="/contacts" component={ContactList} exact={true} />

  
            <Route path="/contacts/new" component={ContactAdd} exact={true} />

            <Route path="/contacts/edit/:id" component={ContactEdit} />

            <Route path="/contacts/:id" component={ContactShow} />
           
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
