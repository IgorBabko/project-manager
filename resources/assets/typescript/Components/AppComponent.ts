import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { BaseComponent } from '../Shared/BaseComponent';
import { ProjectsComponent } from './Projects/ProjectsComponent';
import { WorkersComponent } from './Workers/WorkersComponent';
import { ClientsComponent } from './Clients/ClientsComponent';
import { OrganisationsComponent } from './Organisations/OrganisationsComponent';
import { StatisticsComponent } from './StatisticsComponent';

import { HeaderComponent } from './HeaderComponent';
import { NavbarComponent } from './NavbarComponent';
import { SidebarComponent } from './SidebarComponent';
import { ContentComponent } from './ContentComponent';

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
    },
    {
        path: '/organisations',
        component: OrganisationsComponent
    }
])
@Component({
    'directives': [ 
            ROUTER_DIRECTIVES,
            HeaderComponent,
            NavbarComponent,
            SidebarComponent,
            ContentComponent
        ],
    'selector': 'app',
    'templateUrl': '/templates/AppComponent.main'
})
export class AppComponent extends BaseComponent {
    
}