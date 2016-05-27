import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Worker }        from '../Models/WorkerModel';
import 'rxjs';

@Injectable()
export class WorkerService {
    

    constructor(private http: Http) { }
    
    getWorkers(): Observable<Worker[]> {
        return this.http.get('/workers')
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    getWorker(id: string): Observable<Worker> {
        return this.http.get(`/workers/${id}/edit`)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    postWorker(worker: Worker) {
        let body = JSON.stringify(worker);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('workers', body, options)
            .map(res => res._body)
            .catch(this.handleError);
    }
    
    updateWorker(id: string, worker: Worker) {
        let body = JSON.stringify(worker);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.patch(`workers/${id}`, body, options)
            .map(res => res._body)
            .catch(this.handleError);
    }
    
    deleteWorker(id: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.delete(`workers/${id}`, options)
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