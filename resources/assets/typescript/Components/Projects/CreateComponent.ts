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
    private isLoading = false;
    
    constructor(private projectService: ProjectService, private router: Router) {}
    
    public postProject() {
        this.projectService
            .postProject(this.project)
            .subscribe(
                project => {
                    console.log(project);
                    this.router.navigateByUrl('/projects');
                    swal("Congratulations!", "The project has been deleted!", "success");
                },
                errors => {
                    errors = '<span class="highlight-red">' + JSON.parse(errors._body).join('<br>') + "</span>";
                    swal({ title: "Validation failed", text: errors, type: "error", html: true});
                    this.isLoading = false;
                }
            );
    }
    
    public addProject($event) {
        this.isLoading = true;
        $event.preventDefault();
        this.postProject();
    }
}