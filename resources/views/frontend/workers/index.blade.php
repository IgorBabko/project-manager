<div id="page-wrapper">
    <div class="container-fluid">

        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">
                    Workers <small *ngIf="isURL('/workers/create')">create</small>
                </h1>
                <a [routerLink]="['/workers/create']"
                    class="btn btn-primary"
                    *ngIf="!isURL('/workers/create')">
                    New
                </a>
                <!--<ol class="breadcrumb">
                    <li class="active">
                        <i class="fa fa-dashboard"></i> Dashboard
                    </li>
                </ol>-->
            </div>
        </div>

        <router-outlet></router-outlet>

    </div>
</div>