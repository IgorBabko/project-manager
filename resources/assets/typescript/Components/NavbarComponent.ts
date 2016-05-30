import { Component } from '@angular/core'
import { ROUTER_DIRECTIVES } from '@angular/router'
import { Location } from '@angular/common';


@Component({
    selector: 'navbar',
    templateUrl: '/templates/NavbarComponent.main',
    directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent {
    constructor(private location: Location) {}
}
