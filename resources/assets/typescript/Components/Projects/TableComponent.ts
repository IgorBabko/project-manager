import { Component, OnInit } from '@angular/core';
import { Project } from '../../Models/ProjectModel';
import { ProjectService } from '../../Services/ProjectService';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

declare var jQuery: any;

@Component({
    'templateUrl': '/templates/projects.table',
    providers: [ ProjectService ],
    directives: [ ROUTER_DIRECTIVES ]
})
export class TableComponent implements OnInit {

    private projects: Project[];
    private isLoaded: boolean = false;
    private errorMessage;

    constructor(private projectService: ProjectService, private router: Router) {

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
            }],
            onClickRow: (project, $element) => {
                console.log(`/projects/${project.id}/edit`);
                this.router.navigateByUrl(`/projects/${project.id}/edit`);
            }
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