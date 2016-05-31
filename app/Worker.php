<?php

namespace ProjectManager;

use Illuminate\Database\Eloquent\Model;
use ProjectManager\Project;

class Worker extends Model
{
    protected $guarded = [];
    
    public function projects() {
        
        return $this->belongsToMany(Project::class)->withTimestamps();
    }
    
    /**
     * Get ids of all projects that are attached to the worker.
     *
     * @return \Illuminate\Http\JsonResponse
     *
     */    
    public function projectIds()
    {
        return $this->projects()->lists('id');
    }
}
