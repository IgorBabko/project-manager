import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../Services/ProjectService';
import { WorkerService } from '../../Services/WorkerService';
import { Project } from '../../Models/ProjectModel';
import { Worker } from '../../Models/WorkerModel';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

declare var jQuery: any;

@Component({
    templateUrl: '/templates/projects.create',
    providers: [ ProjectService, WorkerService ],
    directives: [ ROUTER_DIRECTIVES ]
})
export class CreateComponent implements OnInit {
    
    private project: Project = new Project();
    private workers: Worker[];
    private isLoading = false;
    private errorMessage;
    
    constructor(private projectService: ProjectService, private workerService: WorkerService, private router: Router) {}
    
    public ngOnInit() {
        
        
        this.workerService
            .getWorkers()
            .subscribe(
                workers => {
                    console.log(workers);
                    this.workers = workers;
                    let workersOptions = '';
                    let $workersSelect = jQuery('select.workers');
                    for(let i = 0; i < this.workers.length; ++i) {
                        workersOptions += `<option value='${this.workers[i]['id']}'>${this.workers[i]['first_name']} ${this.workers[i]['last_name']}</option>`;
                    }
                    $workersSelect.html(workersOptions);
                    $workersSelect.selectpicker({
                        style: 'btn-default',
                        size: 8
                    });
                },
                error => this.errorMessage = <any>error
            );
    }
    
    public postProject() {
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