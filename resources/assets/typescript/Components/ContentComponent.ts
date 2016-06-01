import { Component } from '@angular/core'
import { ROUTER_DIRECTIVES } from '@angular/router'
import { Location } from '@angular/common';
import { FooterComponent } from './FooterComponent';


@Component({
    selector: 'pm-content',
    templateUrl: '/templates/ContentComponent.main',
    directives: [ ROUTER_DIRECTIVES, FooterComponent ]
})
export class ContentComponent {
    constructor(private location: Location) {}
}
