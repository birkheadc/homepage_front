import * as React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Language from '../../settings/language/Language';
import ContactMeBox from '../contactMeBox/ContactMeBox';
import Dropdown from './dropdown/Dropdown';
import './Navbar.css';
import fav_icon from '../../assets/images/social-icons/favicon.png'

interface NavbarProps {
  handleChangeLanguage(lang: string): void,
  language: string,
  handleChangeTheme(): void,
  theme: string,
  projectsPreview: React.ReactElement,
  blogsPreview: React.ReactElement,
  isMobile: boolean
}

function Navbar(props: NavbarProps) {

  const [visibleDropdown, setVisibleDropdown] = useState<string>('');
  const [isActive, setActive] = useState<boolean>(false);

  const handleDocumentClick = (e: MouseEvent): void => {
    const elements: Element[] = document.elementsFromPoint(e.clientX, e.clientY);
    for (let i = 0; i < elements.length; i++) {
        const element: Element = elements[i];
        if (element.classList.contains('primary-nav')) {
            return;
        }
    }
    setActive(false);
  }

  function hideNav(): void {
    setActive(false);
  }

  React.useEffect(() => {
    document.getElementById('app-wrapper')?.addEventListener('click', handleDocumentClick);
    document.addEventListener('scroll', hideNav);
  });

  const handleChangeLanguage = (e: React.ChangeEvent<{ value: string}>): void => {
      const code: string = e.target.value;
      props.handleChangeLanguage(code);
  }

  const handleChangeDropdown = (e:React.MouseEvent<HTMLElement>): void => {
    if (props.isMobile) {
      setVisibleDropdown('');
      return;
    }
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

  function getLinkLabel(location: string): React.ReactElement | string {
    return location;
    // const labels = [
    //   {
    //     text: 'Home',
    //     icon: <i className="fa-solid fa-house"></i>
    //   },
    //   {
    //     text: 'Blog',
    //     icon: <i className="fa-solid fa-blog"></i>
    //   },
    //   {
    //     text: 'Projects',
    //     icon: <i className="fa-solid fa-diagram-project"></i>
    //   },
    //   {
    //     text: 'Contact',
    //     icon: <i className="fa-solid fa-envelope"></i>
    //   },
    //   {
    //     text: 'Résumé',
    //     icon: <i className="fa-solid fa-id-card"></i>
    //   },
    // ]

    // if (props.isMobile) {
    //   return labels.find(l => l.text === location)?.icon || location
    // }
    // return location;
  }

  const handleToggleNav = (): void => {
    console.log("toggle");
    setActive(!isActive);
  }

  function getSiteIcon(): React.ReactElement | null {
    if (props.isMobile) {
      return null;
    }
    return (
      <NavLink className='fav-icon' to='/'><img alt='icon' src={fav_icon}></img></NavLink>
    );
  }

  function getHamburgerButton(): React.ReactElement | null {
    if (isActive) {
      return null;
    }
    if (props.isMobile) {
      return (
        <button className="hamburger-button" id="hamburger-button" onClick={handleToggleNav}><i className="fa-solid fa-bars fa-2xl"></i></button>
      );
    }
    return null;
  }

  function getNavContents(): React.ReactElement | null {
    if (props.isMobile === true && isActive === false) {
      return null;
    }
    return(
      <div className="primary-nav">
        {getSiteIcon()}
        <ul>
          <li><NavLink data-dropdown='' className={({ isActive }) => (isActive ? 'nav-link active-nav-link' : 'nav-link')} onClick={handleToggleNav} onMouseOver={handleChangeDropdown} to='/'>{getLinkLabel('Home')}</NavLink></li>
          <li><NavLink data-dropdown='blogsPreview' className={({ isActive }) => (isActive ? 'nav-link active-nav-link' : 'nav-link')} onClick={handleToggleNav} onMouseOver={handleChangeDropdown} to='/blog'>{getLinkLabel('Blog')}</NavLink></li>
          <li><NavLink data-dropdown='projectsPreview' className={({ isActive }) => (isActive ? 'nav-link active-nav-link' : 'nav-link')} onClick={handleToggleNav} onMouseOver={handleChangeDropdown} to='/projects'>{getLinkLabel('Projects')}</NavLink></li>
          <li><NavLink data-dropdown='contactMe' className={({ isActive }) => (isActive ? 'nav-link active-nav-link' : 'nav-link')} onClick={handleToggleNav} onMouseOver={handleChangeDropdown} to='/contact'>{getLinkLabel('Contact')}</NavLink></li>
          <li><NavLink data-dropdown='' className={({ isActive }) => (isActive ? 'nav-link active-nav-link' : 'nav-link')} onClick={handleToggleNav} onMouseOver={handleChangeDropdown} to='/resume'>{getLinkLabel('Résumé')}</NavLink></li>
          <button className='change-theme-button' onClick={props.handleChangeTheme} title='Change Theme'>{getThemeButtonIcon(props.theme)}</button>
          <div className='change-language-wrapper'>
            <i className="fa-solid fa-globe"></i>
            <select className='change-language-select' onChange={handleChangeLanguage} value={props.language}>
              {Language.getLanguages().map(
                  language =>
                  <option key={language.code} value={language.code}>{language.label}</option>
              )}
            </select>
          </div>
        </ul>
      </div>
    );
  }

  return (
    <div className='nav-wrapper'>
      {getHamburgerButton()}
      <nav onMouseLeave={handleMouseLeave}> 
        {getNavContents()}
      </nav>
      {getVisibleDropdown()}
    </div>
    );
}

export default Navbar;