import { Component, OnInit } from '@angular/core'
import { ROUTER_DIRECTIVES } from '@angular/router'
import { Location }          from '@angular/common';
import { StatisticsService } from '../Services/StatisticsService';
import { Statistics }        from '../Models/StatisticsModel';


@Component({
    selector: 'pm-sidebar',
    templateUrl: '/templates/SidebarComponent.main',
    directives: [ROUTER_DIRECTIVES],
    providers: [ StatisticsService, Location ]
    
})
export class SidebarComponent implements OnInit {
    
    private statistics: Statistics = new Statistics();
    private errorMessage;
    private url: string = '';
    
    constructor(
        private location: Location,
        private statisticsService: StatisticsService
    ) {}
    
    ngOnInit() {
        this.getStatistics();
        console.log(this.location.path());
        console.log('niko');
    }

    private getStatistics() {
        this.statisticsService
            .getStatistics()
            .subscribe(
                statistics => this.statistics = statistics,
                error => this.errorMessage = <any>error
            );
    }
    
    public updateUrl(url) {
        console.log(url);
        this.url = url;
    }
}
