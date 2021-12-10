import React, { useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import './Css/Login.css';
import authImg from './Assets/auth_design.svg';
import logo from './Assets/logo_svg.svg';
import {Link} from 'react-router-dom';

const Login = () => {
    const history = useHistory();
    
    const [email, setEmail] = useState("");
    const handleClick = (e) => {
        
        e.preventDefault();
        localStorage.setItem("email", JSON.stringify(email));
        history.push("/passwordInput");
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
                            type="email"
                            placeholder="Enter email"
                            // value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        {/* <Link to="#"> */}
                        {/* /passwordInput */}
                            <button
                                className="login_btn"
                                onClick={handleClick}
                            >                            
                                Login                                                       
                            </button>
                        {/* </Link> */}
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

            {/* {itemArray.map(x => (<h1>x</h1>))} */}

            <img
                src={authImg}
                alt="Login background svg"
                className="auth_img"
            />
        </section>
    )
}

export default Login
