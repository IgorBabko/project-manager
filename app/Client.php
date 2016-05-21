<?php

namespace ProjectManager;

use Illuminate\Database\Eloquent\Model;
use ProjectManager\Project;

class Client extends Model
{
    public function project() {
        
        return $this->hasOne(Project::class);
    }
}