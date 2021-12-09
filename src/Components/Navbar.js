import React from 'react';
import logo from './Assets/logo_svg.svg';
import './Css/Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
    return ( 
        <nav> 
            <div className="first_nav_section">
                <div>
                    <Link to="/">
                        <img 
                            src={logo} 
                            alt="logo"
                            className="logo_img"
                        />
                    </Link>
                </div>

                <div>
                    <ul className="nav_list">
                        <li>
                            <Link to="#feature">
                                Features
                            </Link>
                        </li>

                        <li>
                            <Link to="#about">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <ul className="nav_list ">
                    <li>
                        <Link 
                            style={{color: '#A5ADBA'}}
                            to="/auth"
                        >
                            Sign up
                        </Link>
                    </li>

                    <li className="sign_in">
                        <Link to="/auth">
                            Sign in
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
