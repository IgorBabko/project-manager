import { Component } from '@angular/core';
import { NavbarComponent } from './NavbarComponent';
import { ROUTER_DIRECTIVES } from '@angular/router'


@Component({
    selector: 'pm-header',
    templateUrl: '/templates/partials.header',
    directives: [ ROUTER_DIRECTIVES, NavbarComponent ]
})
export class HeaderComponent {
    
    constructor() {}

}
