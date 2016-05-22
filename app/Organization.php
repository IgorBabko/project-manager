<?php

namespace ProjectManager;

use Illuminate\Database\Eloquent\Model;
use ProjectManager\Client;

class Organization extends Model
{
    public function clients() {
        return $this->hasMany(Client::class);
    }
}
