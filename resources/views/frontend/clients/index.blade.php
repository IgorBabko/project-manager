<div class="row">
    <div class="col-lg-12">
        <section class="panel">
            <header class="panel-heading">
                Workers
                <small *ngIf="isURL('/clients/create')">create</small>
                <small *ngIf="isURL('/clients/.+/edit')">edit</small>
            </header>
            <router-outlet></router-outlet>
        </section>
    </div>
</div>