<div id="page-wrapper">
    <div class="container-fluid">

        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">
                    Projects
                    <small *ngIf="isURL('/projects/create')">create</small>
                    <small *ngIf="isURL('/projects/.+/edit')">edit</small>
                </h1>
                <a [routerLink]="['/projects/create']" 
                    class="btn btn-primary"
                    *ngIf="isURL('/projects$')">
                        New
                </a>
            </div>

            <router-outlet></router-outlet>
        </div>

    </div>
</div>