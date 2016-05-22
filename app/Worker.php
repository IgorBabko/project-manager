<?php

namespace ProjectManager;

use Illuminate\Database\Eloquent\Model;
use ProjectManager\Project;

class Worker extends Model
{
    public function projects() {
        
        return $this->belongsToMany(Project::class);
    }
}
