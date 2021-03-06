import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { TableComponent } from './TableComponent';
import { EditComponent } from './EditComponent';
import { CreateComponent } from './CreateComponent';
import { BaseComponent } from '../../Shared/BaseComponent';
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
     },
    {
        path: '/:id/edit',
        component: EditComponent
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