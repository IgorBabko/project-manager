export class Worker {
     
    private first_name: string;
    private last_name: string;
    private age: number|string;
    private salary: number|string;
    
    constructor(
        first_name?: string,
        last_name?: string,
        age?: number|string,
        salary?: number|string
    ) {
        this.first_name = first_name || '';
        this.last_name = last_name || '';
        this.age = age || '';
        this.salary = salary || '';
    }

}