import * as React from 'react';
import { MainWindowProps } from '../MainWindowProps';
import { AboutContentEn } from './aboutContent/AboutContentEn';
import { AboutContentJp } from './aboutContent/AboutContentJp';
import './AboutWindow.css';

function AboutWindow(props: MainWindowProps) {

    const contentDictionary = {
        '': <div></div>,
        'en': <AboutContentEn />,
        'jp': <AboutContentJp />
    }

    function getContent() {
        return contentDictionary[props.language as keyof typeof contentDictionary];
    }

    return (
        getContent()
    );
}

export default AboutWindow;