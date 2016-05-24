<?php

use Illuminate\Database\Seeder;
use ProjectManager\Project;

class ProjectsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('projects')->truncate();
        factory(Project::class, 50)->create();
    }
}
