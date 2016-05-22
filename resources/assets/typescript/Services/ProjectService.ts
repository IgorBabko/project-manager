import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Project }        from '../Models/ProjectModel'
import 'rxjs';

@Injectable()
export class ProjectService {

    constructor(private http: Http) { }
    
    private projectsUrl = 'projects';
    
    getProjects(): Observable<Project[]> {
        return this.http.get(this.projectsUrl)
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
            
        console.error(errMsg);
        
        return Observable.throw(errMsg);
    }
}
