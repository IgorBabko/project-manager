export class Client {
     
    private name: string;
    private clientIds: Array<number>;

    
    constructor(
        name?: string,
        clientIds?: Array<number>
    ) {
        this.name = name || '';
        this.clientIds = clientIds || [];
    }
}