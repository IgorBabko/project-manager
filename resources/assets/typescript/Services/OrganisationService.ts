import { Injectable }   from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }   from 'rxjs/Observable';
import { Organisation } from '../Models/OrganisationModel';
import 'rxjs';

@Injectable()
export class OrganisationService {
    

    constructor(private http: Http) { }
    
    getOrganisations(): Observable<Organisation[]> {
        return this.http.get('/organisations')
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    getOrganisation(id: string): Observable<Organisation> {
        return this.http.get(`/organisations/${id}/edit`)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    getClientIds(id: number|string): Observable<Array<string>> {
        return this.http.get(`/organisations/${id}/clients`)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    postOrganisation(organisation: Organisation) {
        let body = JSON.stringify(organisation);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('organisations', body, options)
            .map(res => res._body)
            .catch(this.handleError);
    }
    
    updateOrganisation(id: string, organisation: Organisation) {
        let body = JSON.stringify(organisation);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.patch(`organisations/${id}`, body, options)
            .map(res => res._body)
            .catch(this.handleError);
    }
    
    deleteOrganisation(id: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.delete(`organisations/${id}`, options)
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