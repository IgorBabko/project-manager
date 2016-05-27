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
        return this.http.get(`/projects/${id}/edit`)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    postProject(project: Project) {
        let body = JSON.stringify(project);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('projects', body, options)
            .map(res => res.json())
            .catch(this.handleError);
    }
    
    updateProject(id: number, project: Project) {
        let body = JSON.stringify(project);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.patch(`projects/${id}`, body, options)
            .map(res => res.json())
            .catch(this.handleError);
    }
    
    private extractData(res: Response) {
        return res.json();
    }
    
    private handleError(error: any) {
        return Observable.throw(error);
    }
}