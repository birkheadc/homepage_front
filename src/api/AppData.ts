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

export interface IActivity {
    date: Date,
    content: IDescription[];
}

export class AppData {
    private _projects: IProject[] = [];
    private _activities: IActivity[] = [];

    addProject(project: IProject): void {
        this._projects.push(project);
    }

    addProjects(projects: IProject[]): void {
        projects.forEach(project => {
            this.addProject(project)
        });
    }

    addActivity(activity: IActivity): void {
        this._activities.push(activity);
    }

    addActivities(activities: IActivity[]): void {
        activities.forEach(activity => {
            this.addActivity(activity);
        });
    }

    get projects(): IProject[] {
        return this._projects;
    }

    get activities(): IActivity[] {
        return this._activities;
    }
}