import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import ReadMe from '../component/privateCom/readMe'
import PriveateProfile from '../component/privateCom/PriveateProfile'

export default class PrivateContainer extends Component {

  constructor() {
    super();
    this.state = {
      isAuthenticated: false
    }
  }

  authenticateFun = (props, cb) => {
    this.setState({
      isAuthenticated: true,
    })

    setTimeout(<Redirect
      to={{
        pathname: "/PriveateProfile",
        state: { from: props.location }
      }}
    />, 100); // fake async
  }


  render() {

    const LoginAdmin = () => (

      
      <div >

        <h1>Log in To Access User Mangment </h1>

        <h3>UserName </h3>
        <input type="text" name="username" placeholder="username" />

        <h1>Password </h1>
        <input type="password" name="password" placeholder="password" />

        <button onClick={this.authenticateFun}>Login</button>
      </div>
    )

    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          this.state.isAuthenticated ? (
            <Component {...props} />
          ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: props.location }
                }}
              />
            )
        }
      />
    );

    return (

      <Router>
        <div>
  
          {this.state.sms}
          Welcome To User Mangment Page
          <Link to="/raed-me"><h1>Read Me</h1></Link>
          <Link to="/private-profile"><h1>Profile</h1></Link>
          <Route exact path="/raed-me" component={ReadMe} />
          <Route exact path="/login" component={LoginAdmin} />
          <PrivateRoute exact path="/private-profile" component={PriveateProfile} />

        </div>
      </Router>

    )
  }
}

 