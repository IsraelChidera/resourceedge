import React from 'react';
import './Css/Sponsors.css';
import sponsor1 from './Assets/sponsor1.svg';
import sponsor2 from './Assets/sponsor2.svg';
import sponsor3 from './Assets/sponsor3.svg';
import sponsor4 from './Assets/sponsor4.svg';
import layer1 from './Assets/layer1.png';
import layer3 from './Assets/layer3.png';

const Sponsors = () => {
    return (
        <>
            <section className="sponsors">
                <div className="sponsors_container">
                    <img
                        src={layer1}
                        alt="background layer"
                        className="sponsor_background"
                    />

                    <div className="sponsors_img_flexed">
                        <div>
                            <img
                                src={sponsor1}
                                alt="UNN logo"
                            />
                        </div>

                        <div>
                            <img
                                src={sponsor2}
                                alt="Tenece logo"
                            />
                        </div>

                        <div>
                            <img
                                src={sponsor3}
                                alt="Private Estates logo"
                            />
                        </div>

                        <div>
                            <img
                                src={sponsor4}
                                alt="Genesys logo"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sponsors
