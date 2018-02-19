import React from 'react';
import './css/header.css'

const Header = () => (
    <header>
        <div className="header-first-part">
            <img alt="sakan" width="50" src="https://hostelhunting.com/img/explore/howitworks/look.png" />
            <h3>My-Sakan</h3>
        </div>

        <div className="header-second-part">
            <nav>
                <ul>
                    <a><li>About</li></a>
                    <a><li>More</li></a>
                    <a><li>Contact</li></a>
                </ul>
            </nav>
        </div>
    </header>
);
export default Header;