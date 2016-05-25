import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Worker }        from '../Models/WorkerModel';
import 'rxjs';

@Injectable()
export class WorkerService {

    constructor(private http: Http) { }
    
    private workersUrl = 'workers';
    
    getWorkers(): Observable<Worker[]> {
        return this.http.get(this.workersUrl)
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
