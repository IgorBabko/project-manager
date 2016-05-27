import { Component, OnInit } from '@angular/core';
import { Client } from '../../Models/ClientModel';
import { ClientService } from '../../Services/ClientService';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

declare var jQuery: any;

@Component({
    'templateUrl': '/templates/clients.table',
    providers: [ ClientService ],
    directives: [ ROUTER_DIRECTIVES ]
})
export class TableComponent implements OnInit {

    private clients: Client[];
    private isLoaded: boolean = false;
    private errorMessage;

    constructor(private clientService: ClientService, private router: Router) {

    }
    
    private initializeTable() {
        jQuery('#table').bootstrapTable({
            data: this.clients,
            search: true,
            pagination: true,
            showColumns: true,
            showToggle: true,
            showRefresh: true,
            cardView: true,
            url: '/clients',
            columns: [{
                field: 'id',
                title: 'ID',
                sortable: true
            }, {
                field: 'organisation_id',
                title: 'Organisation ID',
                sortable: true
            }, {
                field: 'first_name',
                title: 'First name',
                sortable: true
            }, {
                field: 'last_name',
                title: 'Last name',
                sortable: true
            }],
            onClickRow: (client, $element) => {
                this.router.navigateByUrl(`/clients/${client.id}/edit`);
            }
        });
    }

    ngOnInit() {
        this.getClients();
    }

    private getClients() {
        this.clientService
            .getClients()
            .subscribe(
                clients => {
                    this.clients = clients;
                    this.initializeTable();
                    this.isLoaded = true;
                },
                error => this.errorMessage = <any>error);
    }
}

