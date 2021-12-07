import React from 'react'
import About from '../Components/About';
import Homepage from '../Components/Homepage';
import Navbar from '../Components/Navbar';
import '../App.css';
import Feature from '../Components/Feature';
import Sponsors from '../Components/Sponsors';
import Footer from '../Components/Footer';

function LandingPage() {
    return (
        <div>
            <div className="app">
                < Navbar />
                < Homepage />
            </div>
            < About />
            < Feature />
            < Sponsors />
            < Footer />
        </div>
    )
}

export default LandingPage
