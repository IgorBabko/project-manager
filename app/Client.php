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
    
    /**
     * Get ids of all projects that are attached to the client.
     *
     * @return \Illuminate\Http\JsonResponse
     *
     */    
    public function projectIds()
    {
        return $this->projects()->lists('id');
    }
}
