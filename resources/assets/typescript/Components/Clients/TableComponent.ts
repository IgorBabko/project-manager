import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { ClientService } from '../../Services/ClientService';

declare var jQuery: any;

@Component({
    'templateUrl': '/templates/clients.table',
    providers: [ ClientService ]
})
export class TableComponent implements OnInit {

    private clients;
    private errorMessage;

    constructor(private clientService: ClientService) {

    }

    ngOnInit() {
        this.getClients();

        jQuery('#table').bootstrapTable({
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
            }]
        });
    }

    private getClients() {
        this.clientService
            .getClients()
            .subscribe(
            clients => this.clients = clients,
            error => this.errorMessage = <any>error);
    }
}