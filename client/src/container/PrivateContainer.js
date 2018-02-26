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
import CreateAccount from '../component/authentication/CreateAccount'
export default class PrivateContainer extends Component {

  constructor() {
    super();
    this.state = {
     }
  }   

  render() {
 
    return (
      
      <Router>
        <div>
          {this.state.sms}
          <h1> Welcome To User Mangment Page </h1>
          <AuthButton />

          <Link to="/raed-me"><h1>Read Me</h1></Link>
          <Link to="/private-profile"><h1>Profile</h1></Link>
          <Route exact path="/raed-me" component={ReadMe} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={CreateAccount}/>
          <PrivateRoute path="/private-profile" component={PriveateProfile} />
        </div>
      </Router>

    )
  }
}

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {

    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>

        <p>or you need to register and join us</p>
        <Link to="/signup"><button>register</button></Link>
      </div>
    );
  }
}


const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
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


const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);