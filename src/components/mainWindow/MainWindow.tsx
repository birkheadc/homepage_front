import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { IBlurb, IProject } from '../../api/AppData';
import AboutWindow from './aboutWindow/AboutWindow';
import BlogWindow from './blogWindow/BlogWindow';
import ContactWindow from './contactWindow/ContactWindow';
import './MainWindow.css';
import ProjectsWindow from './projectsWindow/ProjectsWindow';
import ResumeWindow from './resumeWindow/ResumeWindow';

interface MainWindowProps {
    blurbs: IBlurb[],
    language: string,
    projects: IProject[]
}

function MainWindow(props: MainWindowProps) {
    return (
        <main id="main">
            <Routes>
                <Route path='/' element={<AboutWindow language={props.language}/>}></Route>
                <Route path='/blog' element={<BlogWindow blurbs={props.blurbs} language={props.language}/>}></Route>
                <Route path='/projects' element={<ProjectsWindow language={props.language} projects={props.projects}/>}></Route>
                <Route path='/contact' element={<ContactWindow />}></Route>
                <Route path='/resume' element={<ResumeWindow language={props.language}/>}></Route>

            </Routes>
        </main>
    );
}

export default MainWindow;