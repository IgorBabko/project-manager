import { Project } from '../../Models/ProjectModel';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../Services/ProjectService';
import {  ROUTER_DIRECTIVES, Router, RouteSegment } from '@angular/router';

@Component({
    templateUrl: '/templates/projects.edit',
    providers: [ ProjectService ],
    directives: [ ROUTER_DIRECTIVES ]
})
export class EditComponent {
    
    private project: Project = new Project();
    private isLoading: boolean = false;
    private errorMessage;
    
    constructor(private projectService: ProjectService,
                private router: Router,
                private routeSegment: RouteSegment) {}
    
    ngOnInit() {
        this.getProject();
    }
    
    public getProject() {
        this.projectService
            .getProject(this.routeSegment.getParam('id'))
            .subscribe(
                project => this.project = project,
                error => this.errorMessage = error
            );
    }
    
    public updateProject($event) {
        $event.preventDefault();
        this.isLoading = true;        
        this.projectService
            .updateProject(this.routeSegment.getParam('id'), this.project)
            .subscribe(
                data => {
                    data = JSON.parse(data);
                    this.router.navigateByUrl('/projects');
                    swal("Congratulations!", data.notify, "success");
                },
                errors => {
                    errors = '<span class="highlight-red">' + JSON.parse(errors._body).join('<br>') + "</span>";
                    swal({ title: "Validation failed", text: errors, type: "error", html: true});
                    this.isLoading = false;
                }
            );
    }
    
    public deleteProject() {
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: false 
        }, function() {
            this.projectService()
                .deleteProject(this.routeSegment.getParam('id'))
                .subscribe(
                    data => {
                        data = JSON.parse(data);
                        this.router.navigateByUrl('/projects');
                        swal("Congratulations!", data.notify, "success");
                    }
            );
        });
    }
}