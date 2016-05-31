import { Worker } from '../../Models/WorkerModel';
import { Project } from '../../Models/ProjectModel';
import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../../Services/WorkerService';
import { ProjectService } from '../../Services/ProjectService';
import { ClientService } from '../../Services/ClientService';
import { UtilService } from '../../Services/UtilService';
import { ROUTER_DIRECTIVES, Router, RouteSegment } from '@angular/router';

declare var jQuery: any;

@Component({
    templateUrl: '/templates/workers.edit',
    providers: [ WorkerService, ProjectService, ClientService ],
    directives: [ ROUTER_DIRECTIVES ]
})
export class EditComponent {
    
    private worker: Worker = new Worker();
    private isLoading: boolean = false;
    private errorMessage;
    private projects: Project[];
    
    constructor(
        private workerService: WorkerService,
        private projectService: ProjectService,
        private clientService: ClientService,
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
                console.log(this.projects);
                this.getProjectIds(
                    this.routeSegment.getParam('id')
                );
            },  
                error => this.errorMessage = <any>error
            );
    }
    
    public getProjectIds(clientId: number | string) {
        this.workerService
            .getProjectIds(clientId)
            .subscribe(
            projectIds => {
                console.log(projectIds);
                this.utilService.buildSelectList(
                    jQuery('select.projects'),
                    this.projects,
                    projectIds
                );
            },
            error => this.errorMessage = error
            );
    }
    
    public getWorker() {
        this.workerService
            .getWorker(this.routeSegment.getParam('id'))
            .subscribe(
                worker => {
                    this.worker = worker;
                    this.getProjects();
                },
                error => this.errorMessage = error
            );
    }
    
    public updateWorker($event) {
        $event.preventDefault();
        this.isLoading = true;  
        this.worker.projectIds = jQuery('select.projects').val();
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