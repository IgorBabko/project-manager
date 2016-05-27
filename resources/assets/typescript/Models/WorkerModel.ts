export class Worker {
     
    private firstName: string;
    private lastName: string;
    private age: number|string;
    private salary: number|string;
    
    constructor(
        firstName?: string,
        lastName?: string,
        age?: number|string,
        salary?: number|string
    ) {
        this.firstName = firstName || '';
        this.lastName = lastName || '';
        this.age = age || '';
        this.salary = salary || '';
    }

}