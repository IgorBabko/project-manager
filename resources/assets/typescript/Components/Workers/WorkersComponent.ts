import { Component } from '@angular/core';
import { TableComponent } from './TableComponent';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { Location } from '@angular/common';

declare var jQuery: any;

@Routes([
    {
        path: '/',
        component: TableComponent
    }
    // {
    //     path: '/create',
    //     component: CreateComponent
    // }
])
@Component({
    'templateUrl': '/templates/workers.index',
    directives: [ ROUTER_DIRECTIVES ]
})
export class WorkersComponent {
    
    constructor(private location: Location) {
        super(location);
    }
}