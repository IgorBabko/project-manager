<?php

namespace ProjectManager\Http\Controllers;

use Illuminate\Http\Request;

use ProjectManager\Http\Requests;
use ProjectManager\Project;
use ProjectManager\Worker;
use ProjectManager\Client;

class StatisticsController extends Controller
{
    public function statistics()
    {    
        return [
            'projectsCount' => Project::all()->count(),
            'workersCount'  => Worker::all()->count(),
            'clientsCount'  => Client::all()->count(),
        ];
    }
}
