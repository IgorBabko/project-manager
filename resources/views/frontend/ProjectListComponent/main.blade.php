<div id="page-wrapper">
    <div class="container-fluid">

        <!-- Page Heading -->
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">
                    Projects
                </h1>
                <form action="/projects/create">
                    <button class="btn btn-primary">New</button>
                </form>
                <!--<ol class="breadcrumb">
                    <li class="active">
                        <i class="fa fa-dashboard"></i> Dashboard
                    </li>
                </ol>-->
            </div>
        </div>

        <div class="row">
            <i *ngIf="!isLoaded" class="fa fa-spinner fa-spin fa-5x fa-fw loader-icon"></i>
            <table id="table"></table>
        </div>
    </div>
</div>