import React from 'react';
import './Css/Passwordinput.css';
import authImg from './Assets/auth_design.svg';
import logo from './Assets/logo_svg.svg';
import {Link} from 'react-router-dom';

const PasswordInput = () => {
    const item = localStorage.getItem("email");
    const userEmail = JSON.parse(item);
    return (
        <section className="login">
            <div>
                <div className="form_logo_container">
                    <Link to="/">
                        <img
                            src={logo}
                            className="form_logo" 
                        />
                    </Link>
                </div>

                <form>
                    <h3>
                        Log in
                    </h3>
                    <p>
                        Access your resource edge account
                    </p>

                    <div className="login_details">
                        <div>
                            <h5>
                                
                            </h5>
                            <h4>
                                {userEmail}
                            </h4>
                            <p>
                                o.nwangwu@genesystechclub.com
                            </p>
                        </div>

                        <button>
                            <i className="fa fa-pencil"></i>
                        </button>
                    </div>

                    <div className="mail_input">
                        <label>
                            Password
                        </label>

                        <input 
                            type="text"
                            placeholder="Enter password"
                        />
                    </div>

                    <div>
                        <Link to="/dashboard">
                            <button
                                className="login_btn"
                            >                            
                                Login                                                       
                            </button>
                        </Link>
                    </div>

                    <p className="forgot_pass">
                        <Link 
                            to="/forgotPassword"                            
                        >
                            Forgot Password?
                        </Link>
                    </p>
                </form>
            </div>

            <img
                src={authImg}
                alt="Login background svg"
                className="auth_img"
            />
        </section>
    )
}

export default PasswordInput
