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
    
    getProject(id: string): Observable<Project> {
        return this.http.get(`/projects/${id}/edit`)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    getWorkerIds(id: number|string): Observable<Array<string>> {
        return this.http.get(`/projects/${id}/workers`)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    postProject(project: Project) {
        let body = JSON.stringify(project);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('projects', body, options)
            .map(res => res._body)
            .catch(this.handleError);
    }
    
    updateProject(id: string, project: Project) {
        let body = JSON.stringify(project);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.patch(`projects/${id}`, body, options)
            .map(res => res._body)
            .catch(this.handleError);
    }
    
    deleteProject(id: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.delete(`projects/${id}`, options)
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