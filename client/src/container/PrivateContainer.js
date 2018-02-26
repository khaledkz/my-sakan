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
                isAuthenticated:false
        }
    }

    render(){
        return(
        <Router>    
            <div>
                    Welcome To User Mangment Page
                    <Link to="/raed-me"><h1>Read Me</h1></Link>
                    <Link to="/private-profile"><h1>Profile</h1></Link>

                    <Route exact path="/raed-me" component={ReadMe} />
                    <Route exact path="/private-profile" component={PriveateProfile} />

            </div>
        </Router>
        )}
}
