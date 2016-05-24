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
        
        for ($i = 1; $i <= 10; ++$i) {
            factory(Client::class, 5)->create([ 'organisation_id' => $i ]);
        }
    }
}
