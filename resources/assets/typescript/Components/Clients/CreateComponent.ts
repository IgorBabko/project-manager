import { Component } from '@angular/core';
import { ClientService } from '../../Services/ClientService';
import { Client } from '../../Models/ClientModel';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    templateUrl: '/templates/projects.create',
    providers: [ ClientService ],
    directives: [ ROUTER_DIRECTIVES ]
})
export class CreateComponent {
    
    private client: Client = new Client();
    private isLoading = false;
    
    constructor(private clientService: ClientService, private router: Router) {}
    
    public postClient() {
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