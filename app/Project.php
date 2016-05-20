<?php

namespace ProjectManager;

use Illuminate\Database\Eloquent\Model;
use ProjectManager\Client;
use ProjectManager\Worker;

class Project extends Model
{
    public function client() {
        
        $this->belongsTo(Client::class);
    }
    
    public function workers() {
        
        $this->hasMany(Worker::class);
    }
}
