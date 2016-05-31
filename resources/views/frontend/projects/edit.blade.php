<div class="col-lg-12">
    <form (submit)="updateProject($event)">
        {{ method_field("PATCH") }}
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Name" [(ngModel)]="project.name">
        </div>
        <div class="form-group">
            <label for="budget">Budget</label>
            <input type="text" class="form-control" id="budget" placeholder="Budget" [(ngModel)]="project.budget">
        </div>
        <div class="form-group">
            <label for="description">Description</label>
            <textarea class="form-control" id="description" rows="10" placeholder="Description" [(ngModel)]="project.description"></textarea>
        </div>
        <div class="form-group">
            <label for="client">Client</label><br>
            <select id="client" class="client" name="client_id" [(ngModel)]="project['client_id']"></select><br>
        </div>
        <div class="form-group">
            <label for="workers">Workers</label><br>
            <select id="workers" class="workers" name="workers[]" multiple></select><br>
        </div>
        <br>
        <a [routerLink]="['/projects']" class="btn btn-default">Cancel</a>
        <a class="btn btn-danger" (click)="deleteProject()">Delete</a>
        <button type="submit" class="btn btn-success">Create</button>
        <i *ngIf="isLoading" class="fa fa-spinner fa-spin fa-fw" style="margin-left: 10px"></i>
    </form>
</div>