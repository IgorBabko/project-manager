import { Client } from '../../Models/ClientModel';
import { Project } from '../../Models/ProjectModel';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../Services/ClientService';
import { ProjectService } from '../../Services/ProjectService';
import { SelectListService } from '../../Services/SelectListService';
import { ROUTER_DIRECTIVES, Router, RouteSegment } from '@angular/router';

declare var jQuery: any;

@Component({
    templateUrl: '/templates/clients.edit',
    providers: [ ClientService, ProjectService ],
    directives: [ ROUTER_DIRECTIVES ]
})
export class EditComponent {
    
    private client: Client = new Client();
    private isLoading: boolean = false;
    private errorMessage;
    private projects: Project[];
    
    constructor(
        private clientService: ClientService,
        private projectService: ProjectService,
        private selectListService: SelectListService,
        private router: Router,
        private routeSegment: RouteSegment
    ) {}
    
    ngOnInit() {
        this.getClient();
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
    
    public getProjectIds(clientId: number | string) {
        this.clientService
            .getProjectIds(clientId)
            .subscribe(
            projectIds => {
                this.selectListService.buildSelectList(
                    jQuery('select.projects'),
                    this.projects,
                    projectIds
                );
            },
            error => this.errorMessage = error
            );
    }
    
    public getClient() {
        this.clientService
            .getClient(this.routeSegment.getParam('id'))
            .subscribe(
                client => {
                    this.client = client;
                    this.getProjects();
                },
                error => this.errorMessage = error
            );
    }
    
    public updateClient($event) {
        $event.preventDefault();
        this.isLoading = true;  
        this.client.projectIds = jQuery('select.projects').val();
        this.clientService
            .updateClient(this.routeSegment.getParam('id'), this.client)
            .subscribe(
                data => {
                    data = JSON.parse(data);
                    this.router.navigateByUrl('/clients');
                    swal("Congratulations!", data.notify, "success");
                },
                errors => {
                    errors = '<span class="highlight-red">' + JSON.parse(errors._body).join('<br>') + "</span>";
                    swal({ title: "Validation failed", text: errors, type: "error", html: true});
                    this.isLoading = false;
                }
            );
    }
    
    public deleteClient() {
        swal({
            title: "Are you sure?",
            text: "You will not be able to undo this action!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: false 
        }, () => {
            this.clientService
                .deleteClient(this.routeSegment.getParam('id'))
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