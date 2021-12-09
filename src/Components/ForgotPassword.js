import React from 'react';
import './Css/ForgotPassword.css';
import authImg from './Assets/auth_design.svg';
import logo from './Assets/logo_svg.svg';
import {Link} from 'react-router-dom';

function ForgotPassword() {
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
                        Reset Password
                    </h3>
                    <p>
                        To enable us reset your password
                        , enter your email below
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
                        <Link to="/passwordResetviaemail">
                            <button
                                className="login_btn"
                            >                            
                                Reset Password                                                       
                            </button>
                        </Link>
                    </div>

                    <p className="forgot_pass">
                        <Link 
                            to="/auth"                            
                        >
                            Back to login
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

export default ForgotPassword
