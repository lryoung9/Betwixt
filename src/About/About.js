import React from 'react';
import './About.css';
import '../App.css';

const About = () => (
    <div className="card-body">
        <h5 className="card-title"><strong>About</strong></h5>
        <p className="card-text">
        Whether you are meeting with friends/family, having a business lunch or trying to buy from the local classifieds sites, Betwixt will give you suggestions for the perfect meeting place in the middle.
        <br />
        <br />
        First, simply enter your address or location and then choose:
        <br />
        <br /> (1) to enter the second address/location
        </p>
        <p className="text-center"><strong>or</strong></p>
        <p>(2) choose to hide your location within a unique url that you can share for the other person to enter their location.
        </p>
    </div>
);
    
export default About;