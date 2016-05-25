<div class="col-lg-12">
    <form (submit)="addProject($event)">
        {{ csrf_field() }}
        {{ method_field("PUT") }}
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
        <a [routerLink]="['/projects']" class="btn btn-default">Cancel</a>
        <button type="submit" class="btn btn-success">Create</button>
    </form>
</div>