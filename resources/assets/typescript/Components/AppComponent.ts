import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { ProjectListComponent } from './ProjectListComponent';
import { WorkerListComponent } from './WorkerListComponent';
import { ClientListComponent } from './ClientListComponent';
import { StatisticsComponent } from './StatisticsComponent';
import { NavbarComponent } from './NavbarComponent';

@Routes([
    {
        path: '/',
        component: ProjectListComponent
    },
    {
        path: '/statistics',
        component: StatisticsComponent
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