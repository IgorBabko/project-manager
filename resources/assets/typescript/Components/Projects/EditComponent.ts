import { Project } from '../../Models/ProjectModel';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../Services/ProjectService';
import {  ROUTER_DIRECTIVES, Router, RouteParams } from '@angular/router';

@Component({
    templateUrl: '/templates/projects.edit',
    providers: [ ProjectService ],
    directives: [ ROUTER_DIRECTIVES ]
})
export class EditComponent implements OnInit{
    
    private project: Project = new Project();
    private isLoading: boolean = false;
    private errorMessage;
    
    constructor(private projectService: ProjectService,
                private router: Router,
                private routeParams: RouteParams) {}
    
    ngOnInit() {
        this.getProject();
    }
    
    public getProject() {
        this.projectService
            .getProject(this.routeParams.get('id'))
            .subscribe(
                project => this.project = project,
                error => this.errorMessage = error
            );
    }
    
    public updateProject($event) {
        $event.preventDefault();
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