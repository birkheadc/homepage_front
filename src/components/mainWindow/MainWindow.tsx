import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutWindow from './aboutWindow/AboutWindow';
import ContactWindow from './contactWindow/ContactWindow';
import './MainWindow.css';
import { MainWindowProps } from './MainWindowProps';
import ProjectsWindow from './projectsWindow/ProjectsWindow';
import ResumeWindow from './resumeWindow/ResumeWindow';

function MainWindow(props: MainWindowProps) {
    return (
        <main>
            <Routes>
                <Route path='/' element={<AboutWindow language={props.language}/>}></Route>
                <Route path='/projects' element={<ProjectsWindow />}></Route>
                <Route path='/resume' element={<ResumeWindow />}></Route>
                <Route path='/contact' element={<ContactWindow />}></Route>
            </Routes>
        </main>
    );
}

export default MainWindow;