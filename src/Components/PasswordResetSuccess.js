import React from 'react';
import './Css/PasswordResetSuccess.css';
import authImg from './Assets/auth_design.svg';
import logo from './Assets/logo_svg.svg';
import {Link} from 'react-router-dom';
import successIcon from './Assets/successIcon.svg';

const PasswordResetSuccess = () => {
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

                    <div className="mail_input successIcon">
                        <div>
                            <img
                                src={successIcon}
                                alt="reset password success icon"
                            />  
                        </div>   
                        <p>
                            Your password has been changed successfully
                        </p>
                    </div>                    

                    <p className="forgot_pass">
                        <Link 
                            to="/auth"                            
                        >
                            Back to login
                            {/* passwordresetsuccess */}
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

export default PasswordResetSuccess
