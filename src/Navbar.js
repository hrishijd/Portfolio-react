import React from 'react'
import './Navbar.css';
function Navbar() {
    return (
        <div className="Navbar">
            <h2 className="Nav-logo">Hrishi Jadhav</h2>
            <ul className="Nav-items">
                <li><h3>Home</h3></li>
                <li><h3>About</h3></li>
                <li><h3>Skills</h3></li>
                <li><h3>Projects</h3></li>
                <li><h3>Resume</h3></li>
                <li><h3>Contact</h3></li>
            </ul>
        </div>
    )
}

export default Navbar
