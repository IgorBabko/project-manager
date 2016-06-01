import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../Services/ProjectService';
import { WorkerService } from '../../Services/WorkerService';
import { ClientService } from '../../Services/ClientService';
import { SelectListService } from '../../Services/SelectListService';
import { Project } from '../../Models/ProjectModel';
import { Worker } from '../../Models/WorkerModel';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

declare var jQuery: any;

@Component({
    templateUrl: '/templates/projects.create',
    styles: [`
        .workers {
            color: green;
            margin-bottom: 20px !important;
        }        
    `],
    providers: [ ProjectService, WorkerService, ClientService ],
    directives: [ ROUTER_DIRECTIVES ]
})
export class CreateComponent implements OnInit {
    
    private project: Project = new Project();
    private isLoading = false;
    private errorMessage;
    
    private $workersSelect;
    
    constructor(
        private projectService: ProjectService,
        private workerService: WorkerService,
        private clientService: ClientService,
        private selectListService: SelectListService,
        private router: Router
    ) {}
    
    public ngOnInit() {
        this.getWorkers();
        this.getClients();
    }
    
    public getWorkers() {
        this.workerService
            .getWorkers()
            .subscribe(
                workers => {
                    this.selectListService.buildSelectList(
                        jQuery('select.workers'), workers
                    );
                },
                error => this.errorMessage = <any>error
            );
    }
    
    public getClients() {
        this.clientService
            .getClients()
            .subscribe(
                clients => {
                    this.selectListService.buildSelectList(
                        jQuery('select.client'), clients
                    );
                },
                error => this.errorMessage = <any>error
            );
    }
    
    public postProject() {
        this.project.workerIds = jQuery('select.workers').val();
        this.projectService
            .postProject(this.project)
            .subscribe(
                data => {
                    data = JSON.parse(data);
                    this.router.navigateByUrl('/projects');
                    swal("Congratulations!", data.notify, "success");
                },
                errors => {
                    errors = '<span class="highlight-red">' + JSON.parse(errors._body).join('<br>') + "</span>";
                    swal({ title: "Validation failed", text: errors, type: "error", html: true});
                    this.isLoading = false;
                }
            );
    }
    
    public addProject($event) {
        this.isLoading = true;
        $event.preventDefault();
        this.postProject();
    }
}