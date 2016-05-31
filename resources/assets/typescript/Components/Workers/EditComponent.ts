import { Worker } from '../../Models/WorkerModel';
import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../../Services/WorkerService';
import { ProjectService } from '../../Services/ProjectService';
import { UtilService } from '../../Services/UtilService';
import { ROUTER_DIRECTIVES, Router, RouteSegment } from '@angular/router';

@Component({
    templateUrl: '/templates/workers.edit',
    providers: [ WorkerService, ProjectService ],
    directives: [ ROUTER_DIRECTIVES ]
})
export class EditComponent {
    
    private worker: Worker = new Worker();
    private isLoading: boolean = false;
    private errorMessage;
    
    constructor(
        private workerService: WorkerService,
        private projectService: ProjectService,
        private utilService: UtilService,
        private router: Router,
        private routeSegment: RouteSegment
    ) {}
    
    ngOnInit() {
        this.getWorker();
    }
    
    public getProjects() {
        this.projectService
            .getProjects()
            .subscribe(
            projects => {
                this.projects = projects;
                this.getProjectIds(
                    this.routeSegment.getParam('id')
                );
            },  
                error => this.errorMessage = <any>error
            );
    }
    
    public getWorker() {
        this.workerService
            .getWorker(this.routeSegment.getParam('id'))
            .subscribe(
                worker => this.worker = worker,
                error => this.errorMessage = error
            );
    }
    
    public updateWorker($event) {
        $event.preventDefault();
        this.isLoading = true;        
        this.workerService
            .updateWorker(this.routeSegment.getParam('id'), this.worker)
            .subscribe(
                data => {
                    data = JSON.parse(data);
                    this.router.navigateByUrl('/workers');
                    swal("Congratulations!", data.notify, "success");
                },
                errors => {
                    errors = '<span class="highlight-red">' + JSON.parse(errors._body).join('<br>') + "</span>";
                    swal({ title: "Validation failed", text: errors, type: "error", html: true});
                    this.isLoading = false;
                }
            );
    }
    
    public deleteWorker() {
        swal({
            title: "Are you sure?",
            text: "You will not be able to undo this action!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: false 
        }, () => {
            this.workerService
                .deleteWorker(this.routeSegment.getParam('id'))
                .subscribe(
                    data => {
                        data = JSON.parse(data);
                        this.router.navigateByUrl('/workers');
                        swal("Congratulations!", data.notify, "success");
                    }
            );
        });
    }
}