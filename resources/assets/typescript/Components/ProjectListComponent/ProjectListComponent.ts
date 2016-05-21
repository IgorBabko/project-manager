import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    'templateUrl': '/templates/ProjectListComponent.main'
})
export class ProjectListComponent implements OnInit {

    public projects;

    // constructor(private _projectsService: ProjectService) {
        
    // }

    ngOnInit() {
        this.projects = ['gta5', 'assasins', 'call of duty'];
    }
}