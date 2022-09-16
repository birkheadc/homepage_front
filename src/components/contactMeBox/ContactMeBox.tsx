import * as React from 'react';
import Socials from '../socials/Socials';
import './ContactMeBox.css';
function ContactMeBox() {

    const copyEmailToClipboard = (): void => {
        navigator.clipboard.writeText('birkheadc@gmail.com');
    }

    return (
        <div className='contact-me-box-wrapper'>
            <h3>Contact Me</h3>
            <Socials />
            <p>birkheadc@gmail.com</p>
            <div className='email-me-wrapper'>
                <a href='mailto:birkheadc@gmail.com' title='Open Email Client'><i className="fa-solid fa-envelope"></i></a>
                <button className='copy-email-button' onClick={copyEmailToClipboard} title="Copy 'birkheadc@gmail.com' to clipboard"><i className="fa-solid fa-copy"></i></button>
            </div>
        </div>
    );
}

export default ContactMeBox;