<?php

namespace ProjectManager\Http\Controllers;

use Illuminate\Http\Request;

use ProjectManager\Http\Requests;
use ProjectManager\Project;
use ProjectManager\Worker;
use ProjectManager\Client;
use ProjectManager\Organisation;

class StatisticsController extends Controller
{
    public function statistics()
    {    
        return [
            'projectCount' => Project::all()->count(),
            'workerCount'  => Worker::all()->count(),
            'clientCount'  => Client::all()->count(),
            'organisationCount'  => Organisation::all()->count(),
        ];
    }
}
