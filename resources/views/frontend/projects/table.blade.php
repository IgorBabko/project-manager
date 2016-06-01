<div class="panel-body">
    <a [routerLink]="['/projects/create']" class="btn btn-info btn-new">New</a>
    <i *ngIf="!isLoaded" class="fa fa-spinner fa-spin fa-2x fa-fw loader-icon"></i>
    <table id="table"></table>
</div>