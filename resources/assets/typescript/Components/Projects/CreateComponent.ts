import { Component } from '@angular/core';
import { ProjectService } from '../../Services/ProjectService';
import { Project } from '../../Models/ProjectModel';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    templateUrl: '/templates/projects.create',
    providers: [ ProjectService ],
    directives: [ ROUTER_DIRECTIVES ]
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
                    swal("Congratulations!", "The project has been deleted!<br>niko", "success");
                },
                errors => {
                    swal("Validation failed", errors, "error");                    
                }
            );
    }
    
    public addProject($event) {
        $event.preventDefault();
        this.postProject();
    }
}