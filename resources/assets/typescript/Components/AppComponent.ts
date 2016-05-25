import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { ProjectsComponent } from './Projects/ProjectsComponent';
import { WorkersComponent } from './Workers/WorkersComponent';
// import { ClientListComponent } from './ClientListComponent';
import { StatisticsComponent } from './StatisticsComponent';
// import { CreateProjectComponent } from './CreateProjectComponent';
import { NavbarComponent } from './NavbarComponent';

@Routes([
    {
        path: '/',
        component: StatisticsComponent
    },
    {
        path: '/statistics',
        component: StatisticsComponent
    },
    {
        path: '/projects',
        component: ProjectsComponent
    },
    {
        path: '/workers',
        component: WorkersComponent
    }
    // {
    //     path: '/clients',
    //     component: ClientListComponent
    // }
])
@Component({
    'directives': [ROUTER_DIRECTIVES, NavbarComponent],
    'selector': 'app',
    'templateUrl': '/templates/AppComponent.main'
})
export class AppComponent {
    constructor () {}
}