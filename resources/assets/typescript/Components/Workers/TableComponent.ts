import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { WorkerService } from '../../Services/WorkerService';
import { Router } from '@angular/router';

declare var jQuery: any;

@Component({
    'templateUrl': '/templates/workers.table',
    providers: [WorkerService],
})
export class TableComponent implements OnInit {

    private workers;
    private errorMessage;

    constructor(private workerService: WorkerService) {

    }

    ngOnInit() {
        this.getWorkers();

        jQuery('#table').bootstrapTable({
            search: true,
            pagination: true,
            showColumns: true,
            showToggle: true,
            showRefresh: true,
            cardView: true,
            url: '/workers',
            columns: [{
                field: 'id',
                title: 'ID',
                sortable: true
            }, {
                field: 'first_name',
                title: 'First name',
                sortable: true
            }, {
                field: 'last_name',
                title: 'Last name',
                sortable: true
            }, {
                field: 'age',
                title: 'Age',
                sortable: true
            }, {
                field: 'salary',
                title: 'Salary',
                sortable: true
            }]
        });
    }

    private getWorkers() {
        this.workerService
            .getWorkers()
            .subscribe(
                workers => this.workers = workers,
                error => this.errorMessage = <any>error
            );
    }
}