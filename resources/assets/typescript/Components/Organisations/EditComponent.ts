import { Client } from '../../Models/ClientModel';
import { Organisation } from '../../Models/OrganisationModel';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../Services/ClientService';
import { OrganisationService } from '../../Services/OrganisationService';
import { SelectListService } from '../../Services/SelectListService';
import { ROUTER_DIRECTIVES, Router, RouteSegment } from '@angular/router';

declare var jQuery: any;

@Component({
    templateUrl: '/templates/organisations.edit',
    providers: [ ClientService, OrganisationService ],
    directives: [ ROUTER_DIRECTIVES ]
})
export class EditComponent {
    
    private organisation: Organisation = new Organisation();
    private isLoading: boolean = false;
    private errorMessage;
    private clients: Client[];
    
    constructor(
        private clientService: ClientService,
        private organisationService: OrganisationService,
        private selectListService: SelectListService,
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
                this.selectListService.buildSelectList(
                    jQuery('select.clients'),
                    this.clients,
                    clientIds,
                    true
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
                    this.organisation = organisation;
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
    
    public deleteOrganisation() {
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