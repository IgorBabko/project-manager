<?php

namespace ProjectManager;

use Illuminate\Database\Eloquent\Model;
use ProjectManager\Client;
use ProjectManager\Worker;

class Project extends Model
{
    protected $guarded = [];
    
    public function client() {
        
        return $this->belongsTo(Client::class);
    }
    
    public function workers() {
        
        return $this->belongsToMany(Worker::class)->withTimestamps();
    }
    
    /**
     * Get ids of all workers that are attached to the project.
     *
     * @return \Illuminate\Http\JsonResponse
     *
     */    
    public function workerIds()
    {
        return $this->workers()->lists('id');
    }
}
