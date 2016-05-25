import { Component } from '@angular/core';
import { TableComponent } from './TableComponent';
import { CreateComponent } from './CreateComponent';
import { BaseComponent } from '../../Shared/BaseComponent';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { Location } from '@angular/common';

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
    'templateUrl': '/templates/clients.index',
    directives: [ ROUTER_DIRECTIVES ]
})
export class ClientsComponent extends BaseComponent {
    
    constructor(location: Location) {
        super(location);
    }
}