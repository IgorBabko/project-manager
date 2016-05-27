import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Client }        from '../Models/ClientModel';
import 'rxjs';

@Injectable()
export class ClientService {
    

    constructor(private http: Http) { }
    
    getProjects(): Observable<Client[]> {
        return this.http.get('/Clients')
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    getClient(id: string): Observable<Client> {
        return this.http.get(`/clients/${id}/edit`)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    postClient(client: Client) {
        let body = JSON.stringify(client);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('clients', body, options)
            .map(res => res._body)
            .catch(this.handleError);
    }
    
    updateClient(id: string, client: Client) {
        let body = JSON.stringify(client);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.patch(`clients/${id}`, body, options)
            .map(res => res._body)
            .catch(this.handleError);
    }
    
    deleteClient(id: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.delete(`clients/${id}`, options)
            .map(res => res._body)
            .catch(this.handleError);
    }
    
    private extractData(res: Response) {
        return res.json();
    }
    
    private handleError(error: any) {
        return Observable.throw(error);
    }
}