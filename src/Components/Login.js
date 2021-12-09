import React from 'react';
import './Css/Login.css';
import authImg from './Assets/auth_design.svg';
import logo from './Assets/logo_svg.svg';
import {Link} from 'react-router-dom';

const Login = () => {
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

                    <div className="mail_input">
                        <label>
                            Email Address
                        </label>

                        <input 
                            type="text"
                            placeholder="Enter email"
                        />
                    </div>

                    <div>
                        <Link to="/passwordInput">
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

export default Login
