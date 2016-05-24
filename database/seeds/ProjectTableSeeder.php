<?php

use Illuminate\Database\Seeder;
use ProjectManager\Project;

class ProjectTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('projects')->truncate();
        
        for ($i = 1; $i <= 50; ++$i) {
            factory(Project::class, 5)->create([ 'client_id' => $i ]);
        }
    }
}
