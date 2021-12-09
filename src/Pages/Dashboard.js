import React from 'react';
import '../Components/Css/Dashboard.css';
import profileIcon from '../Components/Assets/profile_icon.svg';
import logo from '../Components/Assets/nav_logo.svg';
import taskCircle from '../Components/Assets/empty_circle.svg';
import { Link } from 'react-router-dom';

const Dashboard = () => {
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

                <div>
                    <img src={profileIcon} />
                </div>
            </div>

            <div className="dashboard_content">
                <div>
                    <div className="dashboard_content_header">
                        <h1>
                            Hello, Ositadinma Nwangwu
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
