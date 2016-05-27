<div class="col-lg-12">
    <form (submit)="updateClient($event)">
        {{ method_field("PATCH") }}
        <div class="form-group">
            <label for="name">First name</label>
            <input type="text" class="form-control" id="first_name" placeholder="First name" [(ngModel)]="client['first_name']">
        </div>
        <div class="form-group">
            <label for="name">Last name</label>
            <input type="text" class="form-control" id="last_name" placeholder="Last name" [(ngModel)]="client['last_name']">
        </div>
        <div class="form-group">
            <label for="budget">Organisation ID</label>
            <input type="text" class="form-control" id="organisation_id" placeholder="organisation_id" [(ngModel)]="client['organisation_id']">
        </div>
        <a [routerLink]="['/clients']" class="btn btn-default">Cancel</a>
        <a class="btn btn-danger" (click)="deleteClient()">Delete</a>
        <button type="submit" class="btn btn-success">Create</button>
        <i *ngIf="isLoading" class="fa fa-spinner fa-spin fa-fw" style="margin-left: 10px"></i>
    </form>
</div>