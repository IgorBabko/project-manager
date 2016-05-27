import { Component, OnInit } from '@angular/core';
import { Worker } from '../../Models/WorkerModel';
import { WorkerService } from '../../Services/WorkerService';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

declare var jQuery: any;

@Component({
    'templateUrl': '/templates/workers.table',
    providers: [ WorkerService ],
    directives: [ ROUTER_DIRECTIVES ]
})
export class TableComponent implements OnInit {

    private workers: Worker[];
    private isLoaded: boolean = false;
    private errorMessage;

    constructor(private workerService: WorkerService, private router: Router) {

    }
    
    private initializeTable() {
        jQuery('#table').bootstrapTable({
            data: this.workers,
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
            }],
            onClickRow: (worker, $element) => {
                console.log(`/workers/${worker.id}/edit`);
                this.router.navigateByUrl(`/workers/${worker.id}/edit`);
            }
        });
    }

    ngOnInit() {
        this.getWorkers();
    }

    private getWorkers() {
        this.workerService
            .getWorkers()
            .subscribe(
            workers => {
                this.workers = workers;
                this.initializeTable();
                this.isLoaded = true;
            },
            error => this.errorMessage = <any>error);
    }
}