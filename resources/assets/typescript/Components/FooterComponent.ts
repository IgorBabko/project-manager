import { Component } from '@angular/core'
import { ROUTER_DIRECTIVES } from '@angular/router'
import { Location } from '@angular/common';


@Component({
    selector: 'pm-footer',
    templateUrl: '/templates/FooterComponent.main',
    directives: [ROUTER_DIRECTIVES]
})
export class FooterComponent {
    constructor(private location: Location) {}
}
