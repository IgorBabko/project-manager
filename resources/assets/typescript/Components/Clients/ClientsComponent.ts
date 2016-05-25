import { Component } from '@angular/core';
import { TableComponent } from './TableComponent';
// import { CreateComponent } from './CreateComponent';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';

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
    'templateUrl': '/templates/clients.index',
    directives: [ ROUTER_DIRECTIVES ]
})
export class ClientsComponent {
    
    
}