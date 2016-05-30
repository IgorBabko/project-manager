export class Worker {
     
    private id: number|string;
    private first_name: string;
    private last_name: string;
    private age: number|string;
    private salary: number|string;
    private workerIds: number[];
    
    constructor(
        id?: number|string,
        first_name?: string,
        last_name?: string,
        age?: number|string,
        salary?: number|string,
        workerIds?: number[]
    ) {
        this.id = id || '';
        this.first_name = first_name || '';
        this.last_name = last_name || '';
        this.age = age || '';
        this.salary = salary || '';
        this.workerIds = workerIds || [];
    }

}