import { Component } from '@angular/core';
import { NavbarComponent } from './NavbarComponent';
import { ROUTER_DIRECTIVES } from '@angular/router'


@Component({
    selector: 'pm-header',
    templateUrl: '/templates/HeaderComponent.main',
    directives: [ ROUTER_DIRECTIVES, NavbarComponent ]
})
export class HeaderComponent {
    
    constructor() {}

}
