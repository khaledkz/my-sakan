import React, { Component } from 'react';
import './css/PriveateProfile.css';
import {Link} from "react-router-dom";
const PriveateProfile = () => (
    <div>
        <h1>You've accessed the private profile</h1>
        <nav className="privateAccount">
            <ul>
                <Link to="/private-user/profile"><li>Profile</li></Link>
                <Link to="/private-user/account"><li>Account</li></Link>
                <Link to="/private-user/list"><li>List</li></Link>
            </ul>
        </nav>
    </div>
)

export default PriveateProfile;