import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../Services/ClientService';
import { OrganisationService } from '../../Services/OrganisationService';
import { SelectListService } from '../../Services/SelectListService';
import { Organisation } from '../../Models/OrganisationModel';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

declare var jQuery: any;

@Component({
    templateUrl: '/templates/organisations.create',
    providers: [ OrganisationService, ClientService ],
    directives: [ ROUTER_DIRECTIVES ]
})
export class CreateComponent implements OnInit {
    
    private organisation: Organisation = new Organisation();
    private isLoading = false;
    private errorMessage;
    
    constructor(
        private clientService: ClientService,
        private organisationService: OrganisationService,
        private selectListService: SelectListService,
        private router: Router
    ) {}
    
    public ngOnInit() {
        this.getClients();
    }
    
    public getClients() {
        this.clientService
            .getClients()
            .subscribe(
                clients => {
                    this.selectListService.buildSelectList(
                        jQuery('select.clients'), clients
                    );
                },
                error => this.errorMessage = <any>error
            );
    }
    
    public postOrganisation() {
        this.organisation.clientIds = jQuery('select.clients').val();
        this.organisationService
            .postOrganisation(this.organisation)
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
    
    public addOrganisation($event) {
        this.isLoading = true;
        $event.preventDefault();
        this.postOrganisation();
    }
}