import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { ProjectService } from '../../Services/ProjectService/ProjectService';
import { Router } from '@angular/router';

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
    }
    
    private getHeroes() {
        // this.projects = ['gta5', 'assasins', 'call of duty'];
        this.projectService
            .getProjects()
            .subscribe(
                projects => this.projects = projects,
                error    => this.errorMessage = <any>error);
    }
}