import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

interface NavbarProps {
    handleChangeTheme(): void
}

function Navbar(props:NavbarProps) {
    return (
        <nav>
            <a href='#'><img alt='icon' src={ process.env.PUBLIC_URL + '/favicon.ico'}></img></a>
            <ul>
                <li><NavLink className='nav-link' to='/'>Home</NavLink></li>
                <a className='nav-link'>Blog</a>
                <li><NavLink className='nav-link' to='/projects'>Projects</NavLink></li>
                <li><NavLink className='nav-link' to='/contact'>Contact</NavLink></li>
                <li><NavLink className='nav-link' to='/resume'>Résumé</NavLink></li>
                <button onClick={props.handleChangeTheme}>Theme</button>
            </ul>
        </nav>
     );
}

export default Navbar;