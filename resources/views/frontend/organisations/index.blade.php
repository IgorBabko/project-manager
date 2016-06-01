<div class="row">
    <div class="col-lg-12">
        <section class="panel">
            <header class="panel-heading">
                Projects
                <small *ngIf="isURL('/organisations/create')">create</small>
                <small *ngIf="isURL('/organisations/.+/edit')">edit</small>
            </header>
            <router-outlet></router-outlet>
        </section>
    </div>
</div>