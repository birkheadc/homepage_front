import * as React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Language from '../../settings/language/Language';
import ContactMeBox from '../contactMeBox/ContactMeBox';
import Dropdown from './dropdown/Dropdown';
import './Navbar.css';

interface NavbarProps {
    handleChangeLanguage(lang: string): void,
    language: string,
    handleChangeTheme(): void,
    theme: string,
    projectsPreview: React.ReactElement,
    blogsPreview: React.ReactElement
}

function Navbar(props: NavbarProps) {

    const [visibleDropdown, setVisibleDropdown] = useState<string>('');

    const handleChangeLanguage = (e: React.ChangeEvent<{ value: string}>): void => {
        const code: string = e.target.value;
        props.handleChangeLanguage(code);
    }

    const handleChangeDropdown = (e:React.MouseEvent<HTMLElement>): void => {
        const dropdown: string | null = e.currentTarget.getAttribute('data-dropdown');
        setVisibleDropdown(dropdown ?? '');
    }

    const handleMouseLeave = (e:React.MouseEvent<HTMLElement>): void => {
        if (isHoveringNavbar(e) === true) {
            return;
        }
        setVisibleDropdown('');

        function isHoveringNavbar(e:React.MouseEvent<HTMLElement>): boolean {
            const elements: Element[] = document.elementsFromPoint(e.clientX, e.clientY);
            for (let i = 0; i < elements.length; i++) {
                const element: Element = elements[i];
                if (element.classList.contains('primary-nav') || element.classList.contains('nav-dropdown')) {
                    return true;
                }
            }
            return false;
        }
    }

    function getThemeButtonIcon(theme: string) {
        if (theme === 'dark') {
            return (
                <i className="fa-solid fa-sun"></i>
            );
        }
        return (
            <i className="fa-solid fa-moon"></i>
        );
    }

    function getVisibleDropdown(): React.ReactElement | null {
        // This could be some kind of dictionary i.e. `return dropdowns[visibleDropdown];`
        // But there are only a few cases so I'm just going to string some ifs together for now.
        if (visibleDropdown === '') {
            return null;
        }
        let content: React.ReactElement | null = null;
        if (visibleDropdown === 'projectsPreview') {
            content = props.projectsPreview;
        }
        if (visibleDropdown === 'contactMe') {
            content = <ContactMeBox />
        }
        if (visibleDropdown === 'blogsPreview') {
            content = props.blogsPreview;
        }
        return (
            <Dropdown content={content}  handleMouseLeave={handleMouseLeave}/>
        );
    }

    return (
        <div className='nav-wrapper'>
            <nav className='primary-nav' onMouseLeave={handleMouseLeave}>
                <NavLink className='fav-icon' to='/'><img alt='icon' src={ process.env.PUBLIC_URL + '/favicon.ico'}></img></NavLink>
                <ul>
                    <li><NavLink data-dropdown='' className={({ isActive }) => (isActive ? 'nav-link active-nav-link' : 'nav-link')} onMouseOver={handleChangeDropdown} to='/'>Home</NavLink></li>
                    <a data-dropdown='blogsPreview' className='nav-link' href='https://blog.birkheadc.me' onMouseOver={handleChangeDropdown} target="_blank" rel="noreferrer">Blog</a>
                    <li><NavLink data-dropdown='projectsPreview' className={({ isActive }) => (isActive ? 'nav-link active-nav-link' : 'nav-link')} onMouseOver={handleChangeDropdown} to='/projects'>Projects</NavLink></li>
                    <li><NavLink data-dropdown='contactMe' className={({ isActive }) => (isActive ? 'nav-link active-nav-link' : 'nav-link')} onMouseOver={handleChangeDropdown} to='/contact'>Contact</NavLink></li>
                    <li><a data-dropdown='' className='nav-link' href='' onMouseOver={handleChangeDropdown} target="_blank" rel="noreferrer">Résumé</a></li>
                    <button className='change-theme-button' onClick={props.handleChangeTheme} title='Change Theme'>{getThemeButtonIcon(props.theme)}</button>
                    <div className='change-language-wrapper'>
                        <i className="fa-solid fa-globe"></i>
                        <select className='change-language-select' onChange={handleChangeLanguage}>
                            {Language.getLanguages().map(
                                language =>
                                <option key={language.code} value={language.code}>{language.label}</option>
                            )}
                        </select>
                    </div>
                </ul>
            </nav>
            {getVisibleDropdown()}
        </div>
     );
}

export default Navbar;