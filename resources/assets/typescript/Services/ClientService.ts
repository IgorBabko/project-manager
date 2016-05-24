import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Client }        from '../Models/ClientModel'
import 'rxjs';

@Injectable()
export class ClientService {

    constructor(private http: Http) { }
    
    private clientsUrl = 'clients';
    
    getClients(): Observable<Client[]> {
        return this.http.get(this.clientsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    private extractData(res: Response) {
        return res.json();
    }
    
    private handleError(error: any) {
        
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
            
        return Observable.throw(errMsg);
    }
}
