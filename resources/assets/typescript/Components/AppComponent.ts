import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { ProjectListComponent } from './ProjectListComponent';
import { ContainerComponent } from './ContainerComponent';
import { NavbarComponent } from './NavbarComponent';

@Routes([
    {
        path: '/',
        component: ProjectListComponent
    }
])
@Component({
    'directives': [ROUTER_DIRECTIVES, NavbarComponent, ContainerComponent],
    'selector': 'app',
    'templateUrl': '/templates/AppComponent.main'
})
export class AppComponent {
    constructor () {}
}