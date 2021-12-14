import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Css/ForgotPassword.css';
import authImg from './Assets/auth_design.svg';
import logo from './Assets/logo_svg.svg';
import {Link} from 'react-router-dom';

function ForgotPassword() {
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            history.push('/passwordResetviaemail')
        }, 3000)
    }

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
                        {/* <Link to="/passwordResetviaemail"> */}
                            {isLoading ? (<button
                                className="login_btn"                                
                            >                            
                                Sending email for password reset . . .                                                      
                            </button>) :(<button
                                className="login_btn"
                                onClick={handleClick}
                            >                            
                                Reset Password                                                       
                            </button>)}
                        {/* </Link> */}
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
