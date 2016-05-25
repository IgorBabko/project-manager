import { Project } from '../../Models/ProjectModel';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../Services/ProjectService';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    templateUrl: '/templates/projects.edit',
    providers: [ ProjectService ]
})
export class EditComponent implements OnInit {
    
    private project: Project;
    private isLoading: boolean = false;
    private errorMessage;
    
    constructor(private projectService: ProjectService, private router: Router) {}
    
    ngOnInit() {
        this.getProject();
    }
    
    public getProject() {
        this.projectService
            .getProject()
            .subscribe(
                project => {
                    this.project = project;
                    this.isLoaded = true;
                },
                error => this.errorMessage = <any>error
            );
    }
    
    public editProject($event) {
        this.isLoading = true;
        $event.preventDefault();
        this.updateProject();
    }
    
    public updateProject() {
        this.projectService
            .updateProject(this.project)
            .subscribe(
                project => {
                    this.router.navigateByUrl('/projects');
                    swal("Congratulations!", "The project has been updated!", "success");
                },
                errors => {
                    errors = '<span class="highlight-red">' + JSON.parse(errors._body).join('<br>') + "</span>";
                    swal({ title: "Validation failed", text: errors, type: "error", html: true});
                    this.isLoading = false;
                }
            );
    }
}