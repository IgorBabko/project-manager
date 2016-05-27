import { Client } from '../../Models/ClientModel';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../Services/ClientService';
import { ROUTER_DIRECTIVES, Router, RouteSegment } from '@angular/router';

@Component({
    templateUrl: '/templates/clients.edit',
    providers: [ ClientService ],
    directives: [ ROUTER_DIRECTIVES ]
})
export class EditComponent {
    
    private client: Client = new Client();
    private isLoading: boolean = false;
    private errorMessage;
    
    constructor(private clientService: ClientService,
                private router: Router,
                private routeSegment: RouteSegment) {}
    
    ngOnInit() {
        this.getClient();
    }
    
    public getClient() {
        this.clientService
            .getClient(this.routeSegment.getParam('id'))
            .subscribe(
                client => this.client = client,
                error => this.errorMessage = error
            );
    }
    
    public updateClient($event) {
        $event.preventDefault();
        this.isLoading = true;        
        this.clientService
            .updateClient(this.routeSegment.getParam('id'), this.client)
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
    
    public deleteClient() {
        swal({
            title: "Are you sure?",
            text: "You will not be able to undo this action!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: false 
        }, () => {
            this.clientService
                .deleteClient(this.routeSegment.getParam('id'))
                .subscribe(
                    data => {
                        data = JSON.parse(data);
                        this.router.navigateByUrl('/projects');
                        swal("Congratulations!", data.notify, "success");
                    }
            );
        });
    }
}