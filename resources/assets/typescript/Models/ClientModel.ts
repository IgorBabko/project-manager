import { Project } from './ProjectModel'

export class Client {
     
    private first_name: string;
    private last_name: string;
    private organisation_id: number|string;
    private projectIds: Project[];

    
    constructor(
        first_name?: string,
        last_name?: string,
        organisation_id?: number|string,
        projectIds?: Project[]
    ) {
        this.first_name = first_name || '';
        this.last_name = last_name || '';
        this.organisation_id = organisation_id || '';
        this.projectIds = projectIds || [];
    }
}