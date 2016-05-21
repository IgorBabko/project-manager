import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { ProjectListComponent } from './Components/ProjectListComponent/ProjectListComponent';

@Routes([
    {
        path: '/',
        component: ProjectListComponent
    }
])
@Component({
    'directives': [ROUTER_DIRECTIVES],
    'selector': 'app',
    'template': `<a [routerLink]="['/']">main</a><router-outlet></router-outlet>`
})
export class AppComponent {
    constructor () {}
}