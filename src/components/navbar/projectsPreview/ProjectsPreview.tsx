import * as React from 'react';
import { IProject } from '../../../api/AppData';
import './ProjectsPreview.css';

interface ProjectsPreviewProps {
    language: string,
    projects: IProject[]
}

function ProjectsPreview(props: ProjectsPreviewProps) {

    function renderPreviews(): JSX.Element {

      function renderTechnologies(project: IProject): JSX.Element {

        if (project.technologies.length > 5) {
          return (
            <ul className='projects-preview-technologies-list'>
              {project.technologies.map(
                tech =>
                <li key={tech}>{tech.toUpperCase()}</li>
              )}
              <span>...</span>
              {project.technologies.map(
                tech =>
                <li key={tech}>{tech.toUpperCase()}</li>
              )}
              <span>...</span>
            </ul>
          );
        }
        return (
          <ul>
            {project.technologies.map(
                tech =>
                <li key={tech}>{tech.toUpperCase()}</li>
            )}
        </ul>
        );
      }

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
                        <div className='projects-preview-technologies-wrapper'>
                          {renderTechnologies(project)}
                          {/* <ul className={project.technologies.length > 5 ? 'projects-preview-technologies-list': ''}>
                              {project.technologies.map(
                                  tech =>
                                  <li key={tech}>{tech.toUpperCase()}</li>
                              )}
                          </ul> */}
                        </div>
                        <div className='projects-preview-links-wrapper'>
                            <a href={project.site} target='_blank' rel='noreferrer'>Site Home</a>
                            <a href={project.source} target='_blank' rel='noreferrer'>Source Code</a>
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