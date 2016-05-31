import { Client } from '../../Models/ClientModel';
import { Project } from '../../Models/ProjectModel';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../Services/ClientService';
import { ProjectService } from '../../Services/ProjectService';
import { UtilService } from '../../Services/UtilService';
import { ROUTER_DIRECTIVES, Router, RouteSegment } from '@angular/router';

declare var jQuery: any;

@Component({
    templateUrl: '/templates/organisations.edit',
    providers: [ ClientService, ProjectService ],
    directives: [ ROUTER_DIRECTIVES ]
})
export class EditComponent {
    
    private client: Organisation = new Organisation();
    private isLoading: boolean = false;
    private errorMessage;
    private clients: Client[];
    
    constructor(
        private clientService: ClientService,
        private projectService: ProjectService,
        private utilService: UtilService,
        private router: Router,
        private routeSegment: RouteSegment
    ) {}
    
    ngOnInit() {
        this.getOrganisation();
    }
    
    public getClients() {
        this.clientService
            .getClients()
            .subscribe(
            clients => {
                this.clients = clients;
                this.getClientIds(
                    this.routeSegment.getParam('id')
                );
            },  
                error => this.errorMessage = <any>error
            );
    }
    
    public getClientIds(organisationId: number | string) {
        this.organisationService
            .getClientIds(organisationId)
            .subscribe(
            clientIds => {
                this.utilService.buildSelectList(
                    jQuery('select.clients'),
                    this.clients,
                    clientIds
                );
            },
            error => this.errorMessage = error
            );
    }
    
    public getOrganisation() {
        this.organisationService
            .getOrganisation(this.routeSegment.getParam('id'))
            .subscribe(
                organisation => {
                    this.organisatino = organisatino;
                    this.getClients();
                },
                error => this.errorMessage = error
            );
    }
    
    public updateOrganisation($event) {
        $event.preventDefault();
        this.isLoading = true;  
        this.organisation.clientIds = jQuery('select.clients').val();
        this.organisationService
            .updateOrganisation(this.routeSegment.getParam('id'), this.organisation)
            .subscribe(
                data => {
                    data = JSON.parse(data);
                    this.router.navigateByUrl('/organisations');
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
            this.organisationService
                .deleteOrganisation(this.routeSegment.getParam('id'))
                .subscribe(
                    data => {
                        data = JSON.parse(data);
                        this.router.navigateByUrl('/clients');
                        swal("Congratulations!", data.notify, "success");
                    }
            );
        });
    }
}