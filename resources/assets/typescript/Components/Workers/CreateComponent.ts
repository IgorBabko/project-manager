import { Component } from '@angular/core';
import { WorkerService } from '../../Services/WorkerService';
import { ProjectService } from '../../Services/ProjectService';
import { SelectListService } from '../../Services/SelectListService';
import { Worker } from '../../Models/WorkerModel';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

declare var jQuery: any;

@Component({
    templateUrl: '/templates/workers.create',
    providers: [ WorkerService, ProjectService ],
    directives: [ ROUTER_DIRECTIVES ]
})
export class CreateComponent {
    
    private worker: Worker = new Worker();
    private isLoading = false;
    private errorMessage;
    
    constructor(
        private workerService: WorkerService,
        private projectService: ProjectService,
        private selectListService: SelectListService,
        private router: Router
    ) {}
    
    public ngOnInit() {
        this.getProjects();
    }
    
    public getProjects() {
        this.projectService
            .getProjects()
            .subscribe(
                projects => {
                    this.selectListService.buildSelectList(
                        jQuery('select.projects'), projects
                    );
                },
                error => this.errorMessage = <any>error
            );
    }
    
    public postWorker() {
        this.worker.projectIds = jQuery('select.projects').val();
        this.workerService
            .postWorker(this.worker)
            .subscribe(
                data => {
                    data = JSON.parse(data);
                    this.router.navigateByUrl('/workers');
                    swal("Congratulations!", data.notify, "success");
                },
                errors => {
                    errors = '<span class="highlight-red">' + JSON.parse(errors._body).join('<br>') + "</span>";
                    swal({ title: "Validation failed", text: errors, type: "error", html: true});
                    this.isLoading = false;
                }
            );
    }
    
    public addWorker($event) {
        this.isLoading = true;
        $event.preventDefault();
        this.postWorker();
    }
}