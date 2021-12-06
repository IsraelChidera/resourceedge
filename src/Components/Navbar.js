import React from 'react';
import logo from './Assets/logo_svg.svg';
import './Css/Navbar.css'

function Navbar() {
    return (
        <nav>
            <div className="first_nav_section">
                <div>
                    <img 
                        src={logo} 
                        alt="logo"
                        className="logo_img"
                    />
                </div>

                <div>
                    <ul className="nav_list">
                        <li>
                            <a href="#">
                                Features
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                About
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <ul className="nav_list ">
                    <li>
                        <a href="#">
                            Sign up
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            Sign in
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
