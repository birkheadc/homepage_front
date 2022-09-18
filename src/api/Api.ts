import { env } from "process";
import { AppData, IProject } from "./AppData";

async function fetchProjects(): Promise<IProject[]> {
    const url: string | null = process.env.REACT_APP_PROJECTS_URL ? process.env.REACT_APP_PROJECTS_URL + '/api/projects' : null;
    if (url == null) {
        console.log('Unable to fetch projects: Environment Variable not found.');
        return [];
    }
    try {
        let response: Response = await fetch(url, {
            method: 'GET'
        });
        if (response.status !== 200) {
            console.log('Failed to fetch projects: Status Code = ' + response.status);
            return [];
        }
        try {
            let data: IProject[] = await response.json();
            return data;
        }
        catch {
            console.log('Failed to fetch projects: Received unexpected format.');
            return [];
        }
    }
    catch {
        console.log('Failed to fetch projects: Unable to connect to server.');
        return [];
    }
}

async function fetchAppData(): Promise<AppData> {
    let appData = new AppData();

    let projects: IProject[] = await fetchProjects();
    appData.addProjects(projects);
    
    return appData;
}

const Api = {
    fetchAppData
}

export default Api;