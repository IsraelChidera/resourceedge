import React from 'react';
import './Css/About.css';
import icon1 from './Assets/about_icon1.svg';
import icon2 from './Assets/about_icon2.svg';
import icon3 from './Assets/about_icon3.svg';
import aboutImage from './Assets/employee_directory.png';

function About() {
    return (
        <section className="about">
            <div className="about_container">
                <div className="about_title">
                    <h1>
                        Human Resources
                    </h1>
                    <p>
                        Onboard new employees, 
                        manage the employee lifecycle and 
                        measure employee performance.
                    </p>
                </div>

                <div className="about_box_details">
                    <div className="about_box_grid">
                        <div className="box-details-content">
                            <div>
                                <img src={icon1} alt="about icon"/>
                            </div>

                            <h3>
                                Employee Management
                            </h3>
                            <p>
                                From Hiring & Onboarding to Retiring, the 
                                Resource Edge Employee Management module  
                                eliminates all the complexities & paperwork 
                                involved in managing your team.
                            </p>
                        </div>
                    </div>

                    <div className="about_box_grid">
                        <div className="box-details-content">
                            <div>
                                <img src={icon2} alt="about icon"/>
                            </div>

                            <h3>
                                Performance Management
                            </h3>
                            <p>
                                Manage and track employee performance 
                                with our easy-to-use tools for goal setting, 
                                performance agreements and performance reviews. 
                            </p>
                        </div>
                    </div>

                    <div className="about_box_grid">
                        <div className="box-details-content">
                            <div>
                                <img src={icon3} alt="about icon"/>
                            </div>

                            <h3>
                                Paid time off
                            </h3>
                            <p>
                                Employees can request for paid time off, 
                                vacations, sick leaves or educational
                                leaves and get approvals all within 
                                Resource Edge. HR managers can equally ensure compliance.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="about_img">
                    <img 
                        src={aboutImage}
                        alt="employee directory image sample"
                    />
                </div>
            </div>
        </section>
    )
}

export default About
