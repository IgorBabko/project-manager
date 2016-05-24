<?php

namespace ProjectManager;

use Illuminate\Database\Eloquent\Model;
use ProjectManager\Client;

class Organisation extends Model
{
    public function clients() {
        return $this->hasMany(Client::class)->withTimestamps();
    }
}
