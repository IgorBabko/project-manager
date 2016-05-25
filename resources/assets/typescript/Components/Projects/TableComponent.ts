import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { ProjectService } from '../../Services/ProjectService';
import { Project } from '../../Models/ProjectModel';

declare var jQuery: any;

@Component({
    'templateUrl': '/templates/projects.table',
    providers: [ ProjectService ]
})
export class TableComponent implements OnInit {

    private projects: Project[];
    private isLoaded: boolean = false;
    private errorMessage<any>;

    constructor(private projectService: ProjectService) {

    }
    
    private initializeTable() {
        jQuery('#table').bootstrapTable({
            data: this.projects,
            search: true,
            pagination: true,
            showColumns: true,
            showToggle: true,
            showRefresh: true,
            cardView: true,
            columns: [{
                field: 'id',
                title: 'ID',
                sortable: true
            }, {
                field: 'name',
                title: 'Name',
                sortable: true
            }, {
                field: 'description',
                title: 'Description',
                sortable: true
            },{
                field: 'budget',
                title: 'Budget',
                sortable: true
            }]
        });
    }

    ngOnInit() {
        this.getProjects();
    }

    private getProjects() {
        this.projectService
            .getProjects()
            .subscribe(
            projects => {
                this.projects = projects;
                this.initializeTable();
                this.isLoaded = true;
            },
            error => this.errorMessage = <any>error);
    }
}