import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Project }        from '../Models/ProjectModel';
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
    
    postProject(project: Project) {
        let body = JSON.stringify(project);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('projects', body, options)
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