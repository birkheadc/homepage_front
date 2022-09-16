import * as React from 'react';
import './Socials.css';
import fb_icon from '../../assets/images/social-icons/facebook.png';
import gh_icon from '../../assets/images/social-icons/github.png';
import li_icon from '../../assets/images/social-icons/linkedin.png';
function Socials() {
    return (
        <ul className='socials-ul'>
            <li><a href='https://www.facebook.com/#!/profile.php?id=100000139877934'><img alt='My Facebook' className='icon-link social-icon' src={fb_icon}></img></a></li>
            <li><a href='https://github.com/birkheadc'><img alt='My Github' className='icon-link social-icon' src={gh_icon}></img></a></li>
            <li><a href='https://www.linkedin.com/in/colby-birkhead'><img alt='My LinkedIn' className='icon-link social-icon' src={li_icon}></img></a></li>
        </ul>
    );
}

export default Socials;