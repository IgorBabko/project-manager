<div class="panel-body">
    <form (submit)="addOrganisation($event)">
        <div class="form-group">
            <label for="first_name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Name" [(ngModel)]="organisation['name']">
        </div>
        <div class="form-group">
            <label for="clients">Clients</label><br>
            <select id="clients" class="clients" name="clients[]" multiple></select><br>
        </div>
        <a [routerLink]="['/organisations']" class="btn btn-default">Cancel</a>
        <button type="submit" class="btn btn-success">Create</button>
        <i *ngIf="isLoading" class="fa fa-spinner fa-spin fa-fw" style="margin-left: 10px"></i>
    </form>
</div>