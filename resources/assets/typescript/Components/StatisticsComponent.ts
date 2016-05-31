import { ROUTER_DIRECTIVES } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { StatisticsService } from '../Services/StatisticsService'

@Component({
    selector: 'statistics',
    templateUrl: '/templates/StatisticsComponent.main',
    providers: [ StatisticsService ],
    directives: [ ROUTER_DIRECTIVES ]

})
export class StatisticsComponent implements OnInit {
    
    private statistics = {};
    private errorMessage;

    constructor(private statisticsService: StatisticsService) {

    }

    ngOnInit() {
        this.getStatistics();
    }

    private getStatistics() {
        this.statisticsService
            .getStatistics()
            .subscribe(
                statistics => this.statistics = statistics,
                error => this.errorMessage = <any>error
            );
    }
}