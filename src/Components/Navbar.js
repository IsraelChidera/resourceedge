import React from 'react';
import logo from './Assets/logo_svg.svg';
import './Css/Navbar.css'

function Navbar() {
    return ( 
        <nav> 
            <div className="first_nav_section">
                <div>
                    <a href="#">
                        <img 
                            src={logo} 
                            alt="logo"
                            className="logo_img"
                        />
                    </a>
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
                        <a 
                            style={{color: '#A5ADBA'}}
                            href="#"
                        >
                            Sign up
                        </a>
                    </li>

                    <li className="sign_in">
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
