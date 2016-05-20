<?php

namespace ProjectManager;

use Illuminate\Database\Eloquent\Model;
use ProjectManager\Client;

class Project extends Model
{
    public function client() {
        
        $this->belongsTo(Client);
    }
}
