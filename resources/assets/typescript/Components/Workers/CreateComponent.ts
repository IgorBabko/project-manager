import { Component } from '@angular/core';
import { WorkerService } from '../../Services/WorkerService';
import { Worker } from '../../Models/WorkerModel';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    templateUrl: '/templates/workers.create',
    providers: [ WorkerService ],
    directives: [ ROUTER_DIRECTIVES ]
})
export class CreateComponent {
    
    private worker: Worker = new Worker();
    private isLoading = false;
    
    constructor(private projectService: WorkerService, private router: Router) {}
    
    public postProject() {
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