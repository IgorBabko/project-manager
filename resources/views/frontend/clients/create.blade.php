<div class="panel-body">
    <form (submit)="addClient($event)">
        <div class="form-group">
            <label for="first_name">First name</label>
            <input type="text" class="form-control" id="first_name" placeholder="First name" [(ngModel)]="client['first_name']">
        </div>
        <div class="form-group">
            <label for="last_name">Last name</label>
            <input type="text" class="form-control" id="last_name" placeholder="Last name" [(ngModel)]="client['last_name']">
        </div>
        <div class="form-group">
            <label for="organisations">Organisation</label><br>
            <select class="form-control organisations" name="organisation_id" [(ngModel)]="client['organisation_id']"></select><br>
        </div>
        <div class="form-group">
            <label for="projects">Projects</label><br>
            <select class="projects" name="projects[]" multiple></select><br>
        </div>
        <a [routerLink]="['/clients']" class="btn btn-default">Cancel</a>
        <button type="submit" class="btn btn-success">Create</button>
        <i *ngIf="isLoading" class="fa fa-spinner fa-spin fa-fw" style="margin-left: 10px"></i>
    </form>
</div>