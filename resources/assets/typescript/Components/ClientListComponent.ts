import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { ProjectService } from '../Services/ClientService';
import { StatisticsComponent } from './StatisticsComponent';
import { Router } from '@angular/router';

declare var jQuery: any;

@Component({
    'templateUrl': '/templates/ClientListComponent.main',
    providers: [ClientService],
    directives: [StatisticsComponent]
})
export class ClientListComponent implements OnInit {

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
                field: 'organisationId',
                title: 'Organisation ID',
                sortable: true
            }, {
                field: 'firstName',
                title: 'First name',
                sortable: true
            }, {
                field: 'lastName',
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