import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
    return (
        <nav>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/projects'>Projects</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                <li><NavLink to='/resume'>Resume</NavLink></li>
            </ul>
        </nav>
     );
}

export default Navbar;