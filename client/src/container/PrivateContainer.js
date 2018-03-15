import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import ReadMe from '../component/privateCom/readMe';
import PriveateProfile from '../component/privateCom/PriveateProfile';
import CreateAccount from '../component/authentication/CreateAccount';
import apiClient from '../helper/apiclient/apiClient';
import './css/privateCounter.css';
import { connect } from 'react-redux';
import authenticationAction from '../redux/actions/userAuthentication';
import UserList from '../component/user/list';
import Account from '../component/user/account';
import Profile from '../component/user/profile';

class PrivateContainer extends Component {

  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    console.log(this.props.userAuthentication)
    return (

      <Router>
        <div className="privateConta">

          <div className="user-container">
            {this.state.sms} <AuthButton />
            <div className="readMe-andProfile">
              <Link to="/raed-me"><h1>Read Me</h1></Link>
              <Link to="/private-profile"><h1>User</h1></Link>
            </div>
          </div>

          <Route exact path="/raed-me" component={ReadMe} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={CreateAccount} />
          <PrivateRoute path="/private-profile" component={PriveateProfile} />
          <Route exact path="/private-user/list" component={UserList} />
          <Route exact path="/private-user/profile" component={Profile} />
          <Route exact path="/private-user/account" component={Account} />

        </div>
      </Router>

    )
  }
}

class Login extends React.Component {

  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      default: '',
      pageRedirect: false,
      redirectToReferrer: false,
      msg: ''

    }
  }

  handleUserName = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handlePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  login = () => {
    apiClient.PostLogin(this.state.username, this.state.password).then(response => {
      console.log(response.data.user)
      if (response.data.authenticated) {
        fakeAuth.authenticate(() => {
          authenticationAction.SuccessAuthen(response.data.user);
          this.setState({ redirectToReferrer: true });
        });
      } else {
        authenticationAction.FaildAuthen('');
        this.setState({
          msg: 'Wrong Email or password', username: '',
          password: '',
        })
      }

    })
      .catch(err => {
        console.log(err, 'Login Failred');
      });
  }


  render() {

    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div class="privateConta">
        <h1>{this.state.msg}</h1>
        <p>You must log in/register to view the page at {from.pathname}</p>

        <h3>UserName </h3>
        <input type="text" name="username" onChange={this.handleUserName} value={this.state.username}
          ref="username" placeholder="username" />

        <h1>Password </h1>
        <input type="password" name="password" onChange={this.handlePassword} placeholder="password"
          value={this.state.password} ref="password" />
        <div class="privateConta-row">
          <Link to="/signup"><button>register</button></Link>

          <button onClick={this.login}>Log in</button>
        </div>
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
      <div className="welcom-login">
        Welcome!{" "}
        <button
          onClick={() => {
            authenticationAction.ResetAuthen();
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </div>
    ) : (
        <div className="welcom-login">
          <p>You are not logged in.</p>
        </div>
      )
);

const stateToProps = (state) => {
  return { userAuthentication: state.userAuthentication }
}

export default connect(stateToProps)(PrivateContainer);