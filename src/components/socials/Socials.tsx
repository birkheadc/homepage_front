import * as React from 'react';
import './Socials.css';
import fb_icon from '../../assets/images/social-icons/facebook.png';
import gh_icon from '../../assets/images/social-icons/github.png';
import li_icon from '../../assets/images/social-icons/linkedin.png';
function Socials() {
    return (
        <ul className='socials-ul'>
            <li><a className='icon-link social-icon' href='https://www.facebook.com/#!/profile.php?id=100000139877934' target='_blank' rel="noreferrer"><img alt='My Facebook' src={fb_icon}></img></a></li>
            <li><a className='icon-link social-icon' href='https://github.com/birkheadc' target='_blank' rel="noreferrer"><img alt='My Github' src={gh_icon}></img></a></li>
            <li><a className='icon-link social-icon' href='https://www.linkedin.com/in/colby-birkhead' target='_blank' rel="noreferrer"><img alt='My LinkedIn' src={li_icon}></img></a></li>
        </ul>
    );
}

export default Socials;