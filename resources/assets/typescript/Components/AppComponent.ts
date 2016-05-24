import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { ProjectListComponent } from './ProjectListComponent';
import { NavbarComponent } from './NavbarComponent';

@Routes([
    {
        path: '/',
        component: ProjectListComponent
    },
    {
        path: '/projects',
        component: ProjectListComponent
    },
    {
        path: '/workers',
        component: WorkerListComponent
    },
    {
        path: '/clients',
        component: ClientListComponent
    }
])
@Component({
    'directives': [ROUTER_DIRECTIVES, NavbarComponent],
    'selector': 'app',
    'templateUrl': '/templates/AppComponent.main'
})
export class AppComponent {
    constructor () {}
}