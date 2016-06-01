import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../Services/ClientService';
import { ProjectService } from '../../Services/ProjectService';
import { SelectListService } from '../../Services/SelectListService';
import { Client } from '../../Models/ClientModel';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

declare var jQuery: any;

@Component({
    templateUrl: '/templates/clients.create',
    providers: [ ClientService, ProjectService ],
    directives: [ ROUTER_DIRECTIVES ]
})
export class CreateComponent implements OnInit {
    
    private client: Client = new Client();
    private isLoading = false;
    private isSelectLoading = true;
    private errorMessage;
    
    constructor(
        private clientService: ClientService,
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
                    this.isSelectLoading = false;
                },
                error => this.errorMessage = <any>error
            );
    }
    
    public postClient() {
        this.client.projectIds = jQuery('select.projects').val();
        this.clientService
            .postClient(this.client)
            .subscribe(
                data => {
                    data = JSON.parse(data);
                    this.router.navigateByUrl('/clients');
                    swal("Congratulations!", data.notify, "success");
                },
                errors => {
                    errors = '<span class="highlight-red">' + JSON.parse(errors._body).join('<br>') + "</span>";
                    swal({ title: "Validation failed", text: errors, type: "error", html: true});
                    this.isLoading = false;
                }
            );
    }
    
    public addClient($event) {
        this.isLoading = true;
        $event.preventDefault();
        this.postClient();
    }
}