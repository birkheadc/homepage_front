import * as React from 'react';
import { AboutContentEn } from './aboutContent/AboutContentEn';
import { AboutContentJp } from './aboutContent/AboutContentJp';
import './AboutWindow.css';

interface AboutWindowProps {
    language: string
}

function AboutWindow(props: AboutWindowProps) {

    const contentDictionary = {
        '': <div></div>,
        'en': <AboutContentEn />,
        'jp': <AboutContentJp />
    }

    function getContent() {
        return contentDictionary[props.language as keyof typeof contentDictionary];
    }

    return (
        <div>
            <h1>ABOUT ME</h1>
            <hr></hr>
            {getContent()}
        </div>
    );
}

export default AboutWindow;