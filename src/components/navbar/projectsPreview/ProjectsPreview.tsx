import * as React from 'react';
import { IProject } from '../../../api/AppData';
import './ProjectsPreview.css';

interface ProjectsPreviewProps {
    language: string,
    projects: IProject[]
}

function ProjectsPreview(props: ProjectsPreviewProps) {

    function renderPreviews(): JSX.Element {

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
                    <div className='projects-preview-individual-wrapper' key={project.id}>
                        <h4>{project.name}</h4>
                        <p>{project.shortDescriptions.find(l => l.language === props.language)?.content}</p>
                        <ul>
                            {project.technologies.map(
                                tech =>
                                <li key={tech}>{tech}</li>
                            )}
                        </ul>
                        <div className='projects-preview-links-wrapper'>
                            <a href={project.site} target='_blank'>Site Home</a>
                            <a href={project.source} target='_blank'>Source Code</a>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className='projects-preview-wrapper'>
            <h3>My Projects</h3>
            {renderPreviews()}
        </div>
    );
}

export default ProjectsPreview;