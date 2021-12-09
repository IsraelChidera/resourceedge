import React from 'react';
import './Css/ResetSuccess.css';
import authImg from './Assets/auth_design.svg';
import logo from './Assets/logo_svg.svg';
import {Link} from 'react-router-dom';
import successIcon from './Assets/successIcon.svg';

function ResetSuccess() {
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
                            A recovery email has been sent to your
                            email address
                        </p>
                    </div>                    

                    <p className="forgot_pass">
                        <Link 
                            to="/resetpassword"                            
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

export default ResetSuccess
