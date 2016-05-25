import { Component } from '@angular/core';
import { TableComponent } from './TableComponent';
import { CreateComponent } from './CreateComponent';
import { Location } from '@angular/common';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { BaseComponent } from '../../Shared/BaseComponent';

declare var jQuery: any;

@Routes([
    {
        path: '/',
        component: TableComponent
    },
    {
        path: '/create',
        component: CreateComponent
    },
    {
        path: '/:id/edit',
        component: EditComponent
    }
])
@Component({
    'templateUrl': '/templates/projects.index',
    directives: [ ROUTER_DIRECTIVES ]
})
export class ProjectsComponent extends BaseComponent {
    
    constructor(location: Location) {
        super(location);
    }
}