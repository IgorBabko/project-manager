import { Component } from '@angular/core';
import { TableComponent } from './TableComponent';
import { CreateComponent } from './CreateComponent';
import { Location } from '@angular/common';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';

declare var jQuery: any;

@Routes([
    {
        path: '/',
        component: TableComponent
    },
    {
        path: '/create',
        component: CreateComponent
    }
])
@Component({
    'templateUrl': '/templates/projects.index',
    directives: [ ROUTER_DIRECTIVES ]
})
export class ProjectsComponent {
    
    constructor(private location: Location) {
        console.log(location.path());
    }
    
    private isURL(path: string):boolean {
        return this.location.path() == path;
    }
}