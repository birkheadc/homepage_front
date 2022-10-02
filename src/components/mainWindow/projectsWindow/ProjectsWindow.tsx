import * as React from 'react';
import { IProject } from '../../../api/AppData';
import './ProjectsWindow.css';

interface ProjectsWindowProps {
    language: string,
    projects: IProject[]
}

function ProjectsWindow(props: ProjectsWindowProps) {

    const blurb = [
        {
            language: 'en',
            content: 'Here are a few of the projects and applications I have made. My main focus is on the web, but I also dabble in game development.'
        },
        {
            language: 'jp',
            content: '日本語'
        }
    ]

    function renderProjects(): JSX.Element {

        if (props.projects.length < 1) {
            return (
                <div>
                    <p>There doesn't seem to be anything here...</p>
                </div>
            );
        }

        return (
            <div>
                {props.projects.map(
                    project =>
                    <section key={project.id}>
                        <div>
                            <div className='projects-window-head'>
                                <h2>
                                    <a className='projects-window-title-link' href={project.site}>{project.name}</a>
                                </h2>
                                <a className='projects-window-source-link' href={project.source}>(source)</a>
                            </div>
                            <ul>
                                {project.technologies.map(
                                    tech =>
                                    <li key={tech}>{tech.toUpperCase()}</li>
                                )}
                            </ul>
                            <div className='projects-window-links'>
                            </div>
                        </div>
                        <p>{project.longDescriptions.find(l => l.language === props.language)?.content}</p>
                    </section>
                )}
            </div>
        );
    }

    return (
        <div className='projects-window-wrapper'>
            <h1>My Projects</h1>
            <hr></hr>
            <p>
                {blurb.find(l => l.language === props.language)?.content}
            </p>
            {renderProjects()}
        </div>
    );
}

export default ProjectsWindow;