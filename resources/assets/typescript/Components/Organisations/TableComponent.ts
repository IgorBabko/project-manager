import { Component, OnInit } from '@angular/core';
import { Organisation } from '../../Models/OrganisationModel';
import { OrganisationService } from '../../Services/OrganisationService';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

declare var jQuery: any;

@Component({
    'templateUrl': '/templates/organisations.table',
    providers: [ OrganisationService ],
    directives: [ ROUTER_DIRECTIVES ]
})
export class TableComponent implements OnInit {

    private organisations: Organisation[];
    private isLoaded: boolean = false;
    private errorMessage;

    constructor(private organisationService: OrganisationService, private router: Router) {

    }
    
    private initializeTable() {
        jQuery('#table').bootstrapTable({
            data: this.organisations,
            search: true,
            pagination: true,
            showColumns: true,
            showToggle: true,
            showRefresh: true,
            cardView: true,
            url: '/organisations',
            columns: [{
                field: 'id',
                title: 'ID',
                sortable: true
            }, {
                field: 'name',
                title: 'Name',
                sortable: true
            }],
            onClickRow: (organisation, $element) => {
                this.router.navigateByUrl(`/organisations/${organisation.id}/edit`);
            }
        });
    }

    ngOnInit() {
        this.getOrganisations();
    }

    private getOrganisations() {
        this.organisationService
            .getOrganisations()
            .subscribe(
                organisations => {
                    this.organisations = organisations;
                    this.initializeTable();
                    this.isLoaded = true;
                },
                error => this.errorMessage = <any>error);
    }
}

