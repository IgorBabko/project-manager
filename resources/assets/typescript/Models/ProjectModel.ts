export class Project {
    
    private name: string;
    private description: string;
    private budget: number|string;
    
    constructor(
        name?: string,
        description?: string,
        budget?: number
    ) {
        this.name = name || '';
        this.description = description || '';
        this.budget = budget || '';
    }

}