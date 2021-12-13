import React, { useState } from 'react';
import '../Components/Css/Dashboard.css';
import profileIcon from '../Components/Assets/profile_icon.svg';
import logo from '../Components/Assets/nav_logo.svg';
import taskCircle from '../Components/Assets/empty_circle.svg';
import tm from '../Components/Assets/tm.png';
import tm2 from '../Components/Assets/tm2.png';
import { Link } from 'react-router-dom';

const Dashboard = () => { 
    const [click, setClick] = useState(false);
    const item = localStorage.getItem("email");
    const userEmail = JSON.parse(item);

    const handleClick = () => {
        setClick(!click);
        
    }

    return (
        <section className="dashboard">
            <div className="dashboard_nav">
                <div className="dashboard_nav_flex">
                    <div className="logo_flex">
                        <button>
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="db_logo">
                            <Link to="/">
                                <img
                                    src={logo}
                                    alt="logo"
                                />
                            </Link>
                        </div>
                    </div>
                    <p>
                        TM Dashboard
                    </p>
                </div>

                <div
                    onClick={handleClick} 
                    style={{cursor: "pointer"}}
                >
                    <img src={profileIcon} />
                </div>
            </div>

            <div 
                // className={ click ? "nav_list": "none"}   
                className={ click ? "dashboard_dropdown": "none2"} 
                // className="dashboard_dropdown"
            >
                <div className="dashboard_dropdown_container">
                    <div>
                        <h2>
                            {userEmail}
                        </h2>
                        <p style={{fontSize: "14px"}}>
                            Profile
                        </p>
                    </div>

                    <div style={{paddingTop: "1.75rem"}}>
                        <p style={{paddingBottom: "0.7rem", fontSize: "12px"}}>
                            Use Resource Edge as 
                        </p>
                        <div className="tm_container">
                            <img 
                                src={tm}
                                alt="Employee icon"
                                className="tm"
                                style={{width: "auto"}}
                            />
                            <p>
                                Employee
                            </p>
                        </div>

                        <div className="tm_container">
                            <img 
                                src={tm2}
                                alt="Talent Manager icon"
                                className="tm"
                                style={{width: "auto"}}
                            />
                            <p>
                                Talent Manager
                            </p>
                        </div>

                        <div className="logout">
                            <Link to="/auth">
                                Logout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="dashboard_content">
                <div>
                    <div className="dashboard_content_header">
                        <h1>
                            Hello, {userEmail}
                        </h1>
                        <p>
                            Welcome and good to have you back
                        </p>
                    </div>

                    <div className="task_list">
                        <h3>
                            Things to do
                        </h3>

                        <div>
                            <ul className="dashboard_task">
                                <li className="dashboard_task_list">
                                    <div className="task_list_flex">
                                        <img
                                            src={taskCircle}
                                            alt="empty task circle"
                                            className="task_cicle"
                                        />
                                        <p>
                                            Upload your employee peformance
                                            agreement
                                        </p>
                                    </div>

                                    <p className="action">
                                        Begin
                                    </p>
                                </li>

                                <li className="dashboard_task_list">
                                    <div className="task_list_flex">
                                        <img
                                            src={taskCircle}
                                            alt="empty task circle"
                                            className="task_cicle"
                                        />
                                        <p>
                                            Start quarterly self review
                                        </p>
                                    </div>

                                    <button className="task_btn">
                                        Resume
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard
