<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

// $factory->define(ProjectManager\User::class, function (Faker\Generator $faker) {
//     return [
//         'name' => $faker->name,
//         'email' => $faker->email,
//         'password' => bcrypt(str_random(10)),
//         'remember_token' => str_random(10),
//     ];
// });

$factory->define(ProjectManager\Project::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->word(2),
        'description' => $faker->sentence(3),
        'budget' => $faker->randomFloat(2, 10000, 1000000),
    ];
});

$factory->define(ProjectManager\Worker::class, function (Faker\Generator $faker) {
    return [
        'first_name' => $faker->firstName,
        'last_name' => $faker->lastName,
        'age' => $faker->numberBetween(15, 70),
        'salary' => $faker->randomFloat(2, 1000, 100000),
    ];
});

$factory->define(ProjectManager\Client::class, function (Faker\Generator $faker) {
    return [
        'first_name' => $faker->firstName,
        'last_name' => $faker->lastName,
        'organisation_id' => 1,
    ];
});

$factory->define(ProjectManager\Organisation::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->word,
    ];
});
