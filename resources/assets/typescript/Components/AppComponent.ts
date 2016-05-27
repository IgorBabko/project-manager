import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { BaseComponent } from '../Shared/BaseComponent';
import { ProjectsComponent } from './Projects/ProjectsComponent';
import { WorkersComponent } from './Workers/WorkersComponent';
import { ClientsComponent } from './Clients/ClientsComponent';
import { StatisticsComponent } from './StatisticsComponent';
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
    },
    {
        path: '/clients',
        component: ClientsComponent
    }
])
@Component({
    'directives': [ROUTER_DIRECTIVES, NavbarComponent],
    'selector': 'app',
    'templateUrl': '/templates/AppComponent.main'
})
export class AppComponent extends BaseComponent {
    
}