import React from 'react';
import './Css/Feature.css';
import layer1 from './Assets/layer1.png';
import layer2 from './Assets/layer2.png';
import layer3 from './Assets/layer3.png';
import icon4 from './Assets/icon4.svg';
import icon5 from './Assets/icon5.svg';
import icon6 from './Assets/icon6.svg';
import icon7 from './Assets/icon7.svg';
import sampleImage from './Assets/employee_directory2.png';
import sampleImage2 from './Assets/sampleImage.svg';

function Feature() {
    return (
        <>
            <section className="feature" id="feature">

            <div className="feature_title_grid">
                <div className="feature_title">
                    <h3>
                        Admin & Logistics
                    </h3>
                    <p>
                        Manage and track company assets as well
                        as logistics for travelling employees
                    </p>
                </div>

                <div className="feature_tab">
                    <div className="feature">
                        <div>
                            <img 
                                src={icon4}
                                alt="travel and logistics icon"
                                className="feature_img"
                            />    
                        </div>
                        <div>
                            <h3>
                                Travel & Logistics
                            </h3>
                            <p>
                                Make travel requests, get approvals, 
                                and have access to travel information.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="feature_tab">
                    <div className="feature">
                        <div>
                            <img 
                                src={icon5}
                                alt="asset management icon"
                                className="feature_img"
                            />    
                        </div>
                        <div>
                            <h3>
                                Asset Management
                            </h3>
                            <p>
                                Manage the acquisition, assignment,
                                and disposition of assets seamlessly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="feature_sample_img">
                <img
                    src={sampleImage}
                    alt="employee directory image"
                    className="feature_sampleImg"
                />    

                <img
                    src={layer1}
                    alt="background layer"
                    className="background_layer"
                />

                <img
                    src={layer1}
                    alt="background layer"
                    className="background_layer2"
                />

                <img
                    src={layer3}
                    alt="background layer"
                    className="background_layer3"
                />

                <img
                    src={layer3}
                    alt="background layer"
                    className="background_layer4"
                />

                <img
                    src={layer3}
                    alt="background layer"
                    className="background_layer5"
                />
            </div>
            </section>

            <section className="feature_2">
                <div className="feature_title_grid_2">
                    <div className="feature_title_2">
                        <h3>
                            Finance
                        </h3>
                        <p>
                            Generate invoices, track expenditure,
                            and manage complex payrolls for multiple 
                            teams and companies
                        </p>
                    </div>

                    <div className="feature_tab">
                        <div className="feature_2">
                            <div>
                                <img 
                                    src={icon6}
                                    alt="travel and logistics icon"
                                    className="feature_img_2"
                                />    
                            </div>
                            <div>
                                <h3>
                                    RE Vouchers
                                </h3>
                                <p>
                                    Track and manage expenditure
                                    for multiple teams across your 
                                    organisation using Resource Edge Vouchers
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="feature_tab">
                        <div className="feature_2">
                            <div> 
                                <img 
                                    src={icon7}
                                    alt="asset management icon"
                                    className="feature_img_2"
                                />    
                            </div>
                            <div>
                                <h3>
                                    Payroll
                                </h3>
                                <p>
                                    Our easy to use systems takes away 
                                    the pain of managing complex payrolls 
                                    for organisations of all sizes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="feature_sample_img_2">
                    <img
                        src={sampleImage2}
                        alt="employee directory image"
                        className="feature_sampleImg"
                    />    

                    <img
                        src={layer1}
                        alt="background layer"
                        className="background_layer"
                    />

                    <img
                        src={layer3}
                        alt="background layer"
                        className="background_layer3"
                    />

                    <img
                        src={layer2}
                        alt="background layer"
                        className="background_layer4"
                    />

                    <img
                        src={layer3}
                        alt="background layer"
                        className="background_layer5"
                    />
                </div>
            </section>
        </>
    )
}

export default Feature
