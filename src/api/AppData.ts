export interface IDescription {
    language: string,
    content: string
}

export interface IProject {
    id: string,
    name: string,
    shortDescriptions: IDescription[],
    longDescriptions: IDescription[],
    technologies: string[],
    site: string,
    source: string
}

export class AppData {
    private _projects: IProject[] = [];

    addProject(project: IProject): void {
        this._projects.push(project);
    }

    addProjects(projects: IProject[]): void {
        projects.forEach(project => {
            this.addProject(project)
        });
    }

    get projects(): IProject[] {
        return this._projects;
    }
}