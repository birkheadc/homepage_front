import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Language from '../../settings/language/Language';
import Theme from '../../settings/theme/Theme';
import './Navbar.css';

interface NavbarProps {
    handleChangeLanguage(lang: string): void,
    language: string
}

function Navbar(props: NavbarProps) {

    const handleChangeLanguage = (e: React.ChangeEvent<{ value: string}>): void => {
        const code: string = e.target.value;
        props.handleChangeLanguage(code);
    }

    return (
        <nav>
            <a href='#'><img alt='icon' src={ process.env.PUBLIC_URL + '/favicon.ico'}></img></a>
            <ul>
                <li><NavLink className='nav-link' to='/'>Home</NavLink></li>
                <a className='nav-link'>Blog</a>
                <li><NavLink className='nav-link' to='/projects'>Projects</NavLink></li>
                <li><NavLink className='nav-link' to='/contact'>Contact</NavLink></li>
                <li><NavLink className='nav-link' to='/resume'>Résumé</NavLink></li>
                <button onClick={Theme.handleChangeTheme}>Theme</button>
                <select onChange={handleChangeLanguage}>
                    {Language.getLanguages().map(
                        language =>
                        <option key={language.code} value={language.code}>{language.label}</option>
                    )}
                </select>
            </ul>
        </nav>
     );
}

export default Navbar;