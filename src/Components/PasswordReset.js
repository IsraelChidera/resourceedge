import React from 'react';
import './Css/PasswordReset.css';
import authImg from './Assets/auth_design.svg';
import logo from './Assets/logo_svg.svg';
import {Link} from 'react-router-dom';

const PasswordReset = () => {
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
                        The password should have at least 6
                        characters
                    </p>

                    <div className="mail_input">
                        <label>
                            New password
                        </label>

                        <input 
                            type="password"
                            placeholder="Enter password"
                        />
                    </div>

                    <div className="mail_input">
                        <label>
                            Confirm password
                        </label>

                        <input 
                            type="password"
                            placeholder="Confirm password"
                        />
                    </div>

                    <div>
                        <Link to="/passwordresetsuccess">
                            <button
                                className="login_btn"
                            >                            
                                Reset password                                                       
                            </button>
                        </Link>
                    </div>

                    <p className="forgot_pass">
                        <Link 
                            to="/auth"                            
                        >
                            Back to Login
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

export default PasswordReset
