<div id="page-wrapper">
    <div class="container-fluid">

        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">
                    Projects <small *ngIf="isURL('/projects/create')">create</small>
                </h1>
                <a [routerLink]="['/projects/create']" 
                    class="btn btn-primary"
                    *ngIf="isURL('/projects')">
                        New
                </a>
                <!--<ol class="breadcrumb">
                    <li class="active">
                        <i class="fa fa-dashboard"></i> Dashboard
                    </li>
                </ol>-->
            </div>

            <router-outlet></router-outlet>
        </div>

    </div>
</div>