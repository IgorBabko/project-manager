import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { ProjectListComponent } from './Components/ProjectListComponent';
import { NavbarComponent } from './Components/NavbarComponent';

@Routes([
    {
        path: '/',
        component: ProjectListComponent
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