<?php

use Illuminate\Database\Seeder;
use ProjectManager\Worker;

class WorkerTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('workers')->truncate();
        factory(Worker::class, 50)->create();
        
        for ($i = 1; $i <= 50; ++$i) {
            factory(Project::class, 5)->create([ 'project_id' => $i ]);
        }
    }
}
