<div class="col-lg-12">
    <form action="/projects/update" method="POST">
        {{ csrf_field() }}
        {{ method_field() }}
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Name" value="{{ project.name }}">
        </div>
        <div class="form-group">
            <label for="budget">Budget</label>
            <input type="text" class="form-control" id="budget" placeholder="Budget" value="{{ project.budget }}">
        </div>
        <div class="form-group">
            <label for="description">Description</label>
            <textarea class="form-control" id="description" rows="10" placeholder="Description">{{ project.description }}</textarea>
        </div>
        <button type="submit" class="btn btn-success">Create</button>
    </form>
</div>