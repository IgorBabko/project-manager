<?php

use Illuminate\Database\Seeder;
use ProjectManager\Project;
use ProjectManager\Worker;

class ProjectWorkerTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {   
        $workerIds = Worker::lists('id');
        $last = count($workerIds) - 1;

        $projects = Project::all();
        
        foreach ($projects as $project) {
            if (count($workerIds)) {
                $project->workers()->attach(
                    $workerIds[ rand(0, $last ) ]
                );
            }
        }
    }
}
