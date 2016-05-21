import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { ProjectService } from '../../Services/ProjectService/ProjectService';
import { Router } from '@angular/router';

declare var jQuery: any;

@Component({
    'templateUrl': '/templates/ProjectListComponent.main',
    providers: [ProjectService]
})
export class ProjectListComponent implements OnInit {

    private projects;
    private errorMessage;

    constructor(private projectService: ProjectService) {

    }

    ngOnInit() {
        this.getHeroes();
        console.log(this.projects);

        jQuery('#table').bootstrapTable({
            url: '/projects',
            columns: [{
                field: 'id',
                title: 'ID',
            }, {
                field: 'name',
                title: 'Name'
            }, {
                field: 'description',
                title: 'Description'
            },{
                field: 'budget',
                title: 'Budget'
            }]
        });
    }

    private getHeroes() {
        // this.projects = ['gta5', 'assasins', 'call of duty'];
        this.projectService
            .getProjects()
            .subscribe(
            projects => this.projects = projects,
            error => this.errorMessage = <any>error);
    }
}