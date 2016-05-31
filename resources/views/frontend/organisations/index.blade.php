<div id="page-wrapper">
    <div class="container-fluid">

        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">
                    Organisation
                    <small *ngIf="isURL('/organisations/create')">create</small>
                    <small *ngIf="isURL('/organisations/.+/edit')">edit</small>
                </h1>
                <a [routerLink]="['/organisations/create']" 
                    class="btn btn-primary"
                    *ngIf="isURL('/organisations$')">
                        New
                </a>
            </div>

            <router-outlet></router-outlet>
        </div>

    </div>
</div>