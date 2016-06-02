<div class="panel-body">
    <form (submit)="updateOrganisation($event)">
        {{ method_field("PATCH") }}
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Name" [(ngModel)]="organisation['name']">
        </div>
        <div class="form-group">
            <label for="clients">Clients</label><br>
            <select id="clients" class="clients" name="clients[]" multiple></select><br>
        </div>
        <a [routerLink]="['/organisations']" class="btn btn-default">Cancel</a>
        <a class="btn btn-danger" (click)="deleteOrganisation()">Delete</a>
        <button type="submit" class="btn btn-success">Update</button>
        <i *ngIf="isLoading" class="fa fa-spinner fa-spin fa-fw" style="margin-left: 10px"></i>
    </form>
</div>