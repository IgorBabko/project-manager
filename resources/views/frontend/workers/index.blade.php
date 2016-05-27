<div id="page-wrapper">
    <div class="container-fluid">

        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">
                    Workers
                    <small *ngIf="isURL('/workers/create')">create</small>
                    <small *ngIf="isURL('/workers/.+/edit')">edit</small>
                </h1>
                <a [routerLink]="['/workers/create']" 
                    class="btn btn-primary"
                    *ngIf="isURL('/workers$')">
                        New
                </a>
            </div>

            <router-outlet></router-outlet>
        </div>

    </div>
</div>