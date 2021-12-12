import React, {useState} from 'react';
import logo from './Assets/logo_svg.svg';
import './Css/Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    return ( 
        <section>
            <nav> 
                <div className="first_nav_section">
                    <div className="logo_mobile">
                        <Link to="/">
                            <img 
                                src={logo} 
                                alt="logo"
                                className="logo_img"
                            />
                        </Link>

                        <div  
                            className="ham_icon"
                            onClick={handleClick}    
                        >
                            <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                        </div>
                    </div> 

                    

                    <div>
                        <ul 
                            className={ click ? "nav_list": "none"}                           
                            // className="nav_list"
                        >
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
                    <ul 
                        // className="nav_list"
                        className={ click ? "nav_list": "none"}
                        id="nav_list"
                    >
                        <li className="sign_in_mobile">
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
            
        </section>
    )
}

export default Navbar
