<div class="col-lg-12">
    <form (submit)="updateWorker($event)">
        {{ method_field("PATCH") }}
        <div class="form-group">
            <label for="name">First name</label>
            <input type="text" class="form-control" id="first_name" placeholder="First name" [(ngModel)]="worker['first_name']">
        </div>
        <div class="form-group">
            <label for="name">Last name</label>
            <input type="text" class="form-control" id="last_name" placeholder="Last name" [(ngModel)]="worker['last_name']">
        </div>
        <div class="form-group">
            <label for="budget">Age</label>
            <input type="text" class="form-control" id="age" placeholder="Age" [(ngModel)]="worker['age']">
        </div>
        <div class="form-group">
            <label for="budget">Salary</label>
            <input type="text" class="form-control" id="salary" placeholder="Salary" [(ngModel)]="worker['salary']">
        </div>
        <div class="form-group">
            <label for="projects">Projects</label><br>
            <select id="projects" class="projects" name="projects[]" multiple></select><br>
        </div>
        <a [routerLink]="['/workers']" class="btn btn-default">Cancel</a>
        <a class="btn btn-danger" (click)="deleteWorker()">Delete</a>
        <button type="submit" class="btn btn-success">Create</button>
        <i *ngIf="isLoading" class="fa fa-spinner fa-spin fa-fw" style="margin-left: 10px"></i>
    </form>
</div>