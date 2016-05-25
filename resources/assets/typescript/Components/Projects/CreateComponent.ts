import { Component } from '@angular/core';
import { ProjectService } from '../../Services/ProjectService';
import { Project } from '../../Models/ProjectModel';
import { Router } from '@angular/router';

@Component({
    templateUrl: '/templates/projects.create',
    providers: [ ProjectService ]
})
export class CreateComponent {
    
    private project: Project = new Project();
    
    constructor(private projectService: ProjectService, private router: Router) {}
    
    public postProject() {
        this.projectService
            .postProject(this.project)
            .subscribe(
                project => {
                    console.log(project);
                    this.router.navigateByUrl('/projects');
                    alert(project);
                },
                error => {
                    this.errorMessage = <any>error;
                }
            );
    }
    
    public addProject($event) {
        $event.preventDefault();
        this.postProject();
    }
}