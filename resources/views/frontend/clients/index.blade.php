<div id="page-wrapper">
    <div class="container-fluid">

        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">
                    Client
                    <small *ngIf="isURL('/clients/create')">create</small>
                    <small *ngIf="isURL('/clients/.+/edit')">edit</small>
                </h1>
                <a [routerLink]="['/clients/create']" 
                    class="btn btn-primary"
                    *ngIf="isURL('/clients$')">
                        New
                </a>
            </div>

            <router-outlet></router-outlet>
        </div>

    </div>
</div>