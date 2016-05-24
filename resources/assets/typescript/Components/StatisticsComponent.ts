import { Component } from '@angular/core'
import { StatisticsService } from '../Services/StatisticsService'

@Component({
    selector: 'statistics',
    templateUrl: '/templates/StatisticsComponent.main',
    providers: [ StatisticsService ],

})
export class StatisticsComponent {
    
    private statistics;
    private errorMessage;

    constructor(private statisticsService: StatisticsService) {

    }

    ngOnInit() {
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