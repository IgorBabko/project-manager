<?php

namespace ProjectManager;

use Illuminate\Database\Eloquent\Model;
use ProjectManager\Project;

class Client extends Model
{
    protected $guarded = [];

    
    public function projects() {
        
        return $this->hasMany(Project::class);
    }
}
