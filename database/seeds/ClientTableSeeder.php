<?php

use Illuminate\Database\Seeder;
use ProjectManager\Client;

class ClientTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('clients')->truncate();
        factory(Client::class, 50)->create();
    }
}
