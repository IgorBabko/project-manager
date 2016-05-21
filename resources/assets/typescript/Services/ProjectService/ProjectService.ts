import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs';

@Injectable()
export class ProjectService {

    constructor(private http: Http) { }
    
    private heroesUrl = 'app/heroes';  // URL to web API
    
    getProjects(): Observable<Project[]> {
        return this.http.get(this.heroesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }
    
    private handleError(error: any) {
        
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
            
        console.error(errMsg);
        
        return Observable.throw(errMsg);
    }
}
