import { AppData, IActivity, IProject } from "./AppData";

async function fetchFromApi<T>(url: string): Promise<T | null> {
    try {
        let response: Response = await fetch(url, {
            method: 'GET'
        });
        if (response.status !== 200) {
            console.log('Failed to fetch: Status Code = ' + response.status);
            return null;
        }
        try {
            let data: T = await response.json();
            return data;
        }
        catch {
            console.log('Failed to fetch: Received unexpected format.');
            return null;
        }
    }
    catch {
        console.log('Failed to fetch: Unable to connect to server.');
        return null;
    }
}

async function fetchActivities(): Promise<IActivity[] | null> {

    // Todo (API not yet implemented)
    return [];
}

async function fetchProjects(): Promise<IProject[] | null> {
    const url: string | null = process.env.REACT_APP_PROJECTS_URL ? process.env.REACT_APP_PROJECTS_URL + '/api/projects' : null;
    if (url == null) {
        console.log('Unable to fetch projects: Environment Variable not found.');
        return [];
    }
    return fetchFromApi<IProject[]>(url);
}

async function fetchAppData(): Promise<AppData> {
    let appData = new AppData();

    let projects: IProject[] | null = await fetchProjects();
    appData.addProjects(projects || []);
    let activities: IActivity[] | null = await fetchActivities();
    appData.addActivities(activities || []);
    
    return appData;
}

const Api = {
    fetchAppData
}

export default Api;