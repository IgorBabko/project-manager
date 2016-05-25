import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Project }        from '../Models/ProjectModel'
import 'rxjs';

@Injectable()
export class ProjectService {

    constructor(private http: Http) { }
    
    getProjects(): Observable<Project[]> {
        return this.http.get('/projects')
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    getProject(id: number): Observable<Project> {
        return this.http.get(`/projects/#{id}/edit`)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    postProject() {
        return this.http.post('projects/update')
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
