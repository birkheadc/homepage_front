import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { IProject } from '../../api/AppData';
import AboutWindow from './aboutWindow/AboutWindow';
import ContactWindow from './contactWindow/ContactWindow';
import './MainWindow.css';
import ProjectsWindow from './projectsWindow/ProjectsWindow';

interface MainWindowProps {
    language: string,
    projects: IProject[]
}

function MainWindow(props: MainWindowProps) {
    return (
        <main>
            <Routes>
                <Route path='/' element={<AboutWindow language={props.language}/>}></Route>
                <Route path='/projects' element={<ProjectsWindow language={props.language} projects={props.projects}/>}></Route>
                <Route path='/contact' element={<ContactWindow />}></Route>
            </Routes>
        </main>
    );
}

export default MainWindow;