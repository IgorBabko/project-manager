import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Statistics }     from '../Models/StatisticsModel';
import 'rxjs';

@Injectable()
export class StatisticsService {

    constructor(private http: Http) { }
    
    private statisticsUrl = '/statistics';
    
    getStatistics(): Observable<Statistics[]> {
        return this.http.get(this.statisticsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    private extractData(res: Response) {
        console.log(res.json());
        return res.json();
    }
    
    private handleError(error: any) {
        
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
            
        return Observable.throw(errMsg);
    }
}
