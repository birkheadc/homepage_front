import * as React from 'react';
import { IProject } from '../../../api/AppData';
import './ProjectsPreview.css';

interface ProjectsPreviewProps {
    language: string,
    projects: IProject[]
}

function ProjectsPreview(props: ProjectsPreviewProps) {

    console.log(props.projects[0].shortDescriptions.find(l => l.language === 'en')?.content);

    return (
        <div className='projects-preview-wrapper'>
            <h3>My Projects</h3>
            {props.projects.map(
                project =>
                <div key={project.id}>
                    <h4>{project.name}</h4>
                    <p>{project.shortDescriptions.find(l => l.language === props.language)?.content}</p>
                    <ul>
                        {project.technologies.map(
                            tech =>
                            <li>{tech}</li>
                        )}
                    </ul>
                    
                </div>
            )}
        </div>
    );
}

export default ProjectsPreview;