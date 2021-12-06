import React from 'react';
import homepageImage from './Assets/header_svgs.svg';
import './Css/Homepage.css';

function Homepage() {
    return (
        <>
            <section className="homepage">
                <div className="homepage_details">
                    <div>
                        <h1>
                            Throw paperwork into the trash where it belongs.
                        </h1>

                        <p>
                            Eliminate all the hassle involved in managing people
                            operations by automating it.
                        </p>
                    </div>
                </div>

                <div className="homepage_image">
                    <img src={homepageImage}/>
                </div>
            </section>
        </>
    )
}

export default Homepage
