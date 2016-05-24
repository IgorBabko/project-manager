<?php

use Illuminate\Database\Seeder;
use ProjectManager\Organisation;

class OrganisationTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('organisations')->truncate();
        
        factory(Organisation::class, 10)->create();
    }
}
