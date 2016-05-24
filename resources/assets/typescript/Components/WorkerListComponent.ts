import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { WorkerService } from '../Services/WorkerService';
import { StatisticsComponent } from './StatisticsComponent';
import { Router } from '@angular/router';

declare var jQuery: any;

@Component({
    'templateUrl': '/templates/WorkerListComponent.main',
    providers: [WorkerService],
    directives: [StatisticsComponent]
})
export class WorkerListComponent implements OnInit {

    private worker;
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
                field: 'firstName',
                title: 'First name',
                sortable: true
            }, {
                field: 'lastName',
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
                projects => this.workers = workers,
                error => this.errorMessage = <any>error
            );
    }
}