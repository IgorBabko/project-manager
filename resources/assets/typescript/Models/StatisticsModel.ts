export class Statistics {
    
    private projectCount: number;
    private workerCount: number;
    private clientCount: number;
    private organisationCount: number;
    
    constructor(
        projectCount?: number,
        workerCount?: number,
        clientCount?: number,
        organisationCount?: number
    ) {
        this.projectCount = projectCount || 0;
        this.workerCount = workerCount || 0;
        this.clientCount = clientCount || 0;
        this.organisationCount = organisationCount || 0;
    }

}