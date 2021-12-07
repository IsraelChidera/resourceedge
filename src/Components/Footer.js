import React from 'react';
import './Css/Footer.css';
import footerLogo from './Assets/nav_logo.svg';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer_logo">
                    <div>
                        <img
                            src={footerLogo}
                        />  
                    </div>  
                    <p>
                        Throw paperwork into the trash.    
                    </p>    
                </div>

                <div>
                    <ul className="footer_socials">
                        <li>
                            <a href="#">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>

                    <p>
                        Copyright © Genesys DevStudio . All rights reserved
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer
