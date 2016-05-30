export class Project {
     
    private name: string;
    private description: string;
    private budget: number|string;
    private workerIds: number[];

    
    constructor(
        name?: string,
        description?: string,
        budget?: number,
        workerIds?: number[]

    ) {
        this.name = name || '';
        this.description = description || '';
        this.budget = budget || '';
        this.workerIds = workerIds || [];
    }

}