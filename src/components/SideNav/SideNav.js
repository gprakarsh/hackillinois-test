import React from 'react';
import logo from './../../assets/hackillinois_logo.png';
import './SideNav.scss';

const SideNav = () => {
    return (
        <div className="side-nav">
            <img id="logo" src={logo} alt="hackillinois-logo" />
            <ul className="side-nav-items">
                <li>Schedule</li>
                <li>Maps</li>
                <li>Prizes</li>
                <li>Travel</li>
                <li>Mentors</li>
            </ul>
        </div>
    )
}

export default SideNav;