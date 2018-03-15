import React, { Component } from 'react';
import './css/PriveateProfile.css';
import {Link} from "react-router-dom";
const PriveateProfile = () => (
   
         <div className="privateAccount">
            <ul>
                <Link to="/private-user/profile"><li>Profile</li></Link>
                <Link to="/private-user/list"><li>List</li></Link>
                <Link to="/private-user/account"><li>Account</li></Link>

            </ul>
        </div>
    
)

export default PriveateProfile;