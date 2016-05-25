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
}
