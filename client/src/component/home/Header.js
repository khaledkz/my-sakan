import React from 'react';
import './css/header.css'
import { Link } from "react-router-dom";

const Header = () => (
    <header>
        <div className="header-first-part">
            <img alt="sakan" width="50" src="https://hostelhunting.com/img/explore/howitworks/look.png" />
            <h3>My-Sakan</h3>
        </div>

        <div className="header-second-part">
            <nav>
                <ul>                 
                       <Link to="/"><li>Home</li></Link>
                       <Link to="/about"><li>About</li></Link>
                       <Link to="/more"><li>More</li></Link>
                       <Link to="/contact"><li>Contact</li></Link>
                </ul>
            </nav>
        </div>
    </header>
);
export default Header;