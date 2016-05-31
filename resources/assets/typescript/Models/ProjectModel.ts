export class Project {
     
    private name: string;
    private client_id: number|string;
    private description: string;
    private budget: number|string;
    private workerIds: number[];

    
    constructor(
        name?: string,
        client_id?: number|string,
        description?: string,
        budget?: number,
        workerIds?: number[]

    ) {
        this.name = name || '';
        this.client_id = client_id || '';
        this.description = description || '';
        this.budget = budget || '';
        this.workerIds = workerIds || [];
    }

}