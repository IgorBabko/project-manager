import { Project } from '../../Models/ProjectModel';
import { Worker } from '../../Models/WorkerModel';
import { Client } from '../../Models/ClientModel';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../Services/ProjectService';
import { WorkerService } from '../../Services/WorkerService';
import { ClientService } from '../../Services/ClientService';
import {  ROUTER_DIRECTIVES, Router, RouteSegment } from '@angular/router';

declare var jQuery: any;

@Component({
    templateUrl: '/templates/projects.edit',
    providers: [ProjectService, WorkerService, ClientService],
    directives: [ROUTER_DIRECTIVES]
})
export class EditComponent {

    private project: Project = new Project();
    private isLoading: boolean = false;
    private errorMessage;
    private workers: Worker[];
    private workerIds: Array<string | number>;
    private clients: Client[];
    private $workersSelect;
    private $clientSelect;

    constructor(private projectService: ProjectService,
        private workerService: WorkerService,
        private clientService: ClientService,
        private router: Router,
        private routeSegment: RouteSegment) { }

    ngOnInit() {
        this.getProject();
    }

    public getProject() {
        this.projectService
            .getProject(this.routeSegment.getParam('id'))
            .subscribe(
            project => {
                this.project = project;
                this.getWorkers();
                this.getClients();
            },

            error => this.errorMessage = error
            );
    }
    
    public getClients() {
        this.clientService
            .getClients()
            .subscribe(
            clients => {
                this.clients = clients;
                this.buildClientsSelectList();
            },
            error => this.errorMessage = <any>error
            );
    }

    public getWorkers() {
        this.workerService
            .getWorkers()
            .subscribe(
            workers => {
                this.workers = workers;
                this.getWorkerIds(
                    this.routeSegment.getParam('id')
                );
            },
            error => this.errorMessage = <any>error
            );
    }

    public getWorkerIds(projectId: number | string) {
        this.projectService
            .getWorkerIds(projectId)
            .subscribe(
            workerIds => {
                this.workerIds = workerIds;
                this.buildWorkersSelectList();
            },
            error => this.errorMessage = error
            );
    }


    public updateProject($event) {
        $event.preventDefault();
        this.isLoading = true;
        this.project.workerIds = this.$workersSelect.val();

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
                swal({ title: "Validation failed", text: errors, type: "error", html: true });
                this.isLoading = false;
            }
            );
    }

    public deleteProject() {
        swal({
            title: "Are you sure?",
            text: "You will not be able to undo this action!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: false
        }, () => {
            this.projectService
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

    public buildWorkersSelectList() {
        let workerOptions = '';
        this.$workersSelect = jQuery('select.workers');
        let selected;
        for (let i = 0; i < this.workers.length; ++i) {
            selected = '';
            if (jQuery.inArray(this.workers[i]['id'], this.workerIds) !== -1) {
                selected = 'selected';
            }
            workerOptions += `<option ${selected} value='${this.workers[i]['id']}'>${this.workers[i]['first_name']} ${this.workers[i]['last_name']}</option>`;
        }
        this.$workersSelect.html(workerOptions);
        this.$workersSelect.selectpicker({
            style: 'btn-default',
            size: 8
        });
    }
    
    public buildClientsSelectList() {
        let clientOptions = '';
        this.$clientSelect = jQuery('select.clients');
        let selected;
        for (let i = 0; i < this.clients.length; ++i) {
            if (this.clients[i]['id'] == this.project['client_id']) {
                clientOptions += `<option selected value='${this.workers[i]['id']}'>${this.workers[i]['first_name']} ${this.workers[i]['last_name']}</option>`;
            }
            clientOptions += `<option value='${this.workers[i]['id']}'>${this.workers[i]['first_name']} ${this.workers[i]['last_name']}</option>`;
        }
        this.$clientSelect.html(clientOptions);
        this.$clientSelect.selectpicker({
            style: 'btn-default',
            size: 8
        });
    }
    
}