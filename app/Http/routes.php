<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// Angular 2 base route resolving
Route::get('/', [
    'uses' => 'AngularRouteController@index',
    'as' => 'home'
]);

// Angular 2 templates route
Route::get('/templates/{template}', 'AngularTemplateController@index');

// API routes

Route::get('/statistics', [
    'uses' => 'StatisticsController@statistics',
    'as' => 'statistics'
]);


Route::resource('projects', 'ProjectController', [
    'parameters' => 'singular'
]);


Route::get('/projects/{project}/workers', 'ProjectController@workerIds');

Route::get('/clients/{client}/projects', 'ClientController@projectIds');

Route::get('/workers/{worker}/projects', 'WorkerController@projectIds');

Route::get('/organisations/{organisation}/clients', 'OrganisationController@clientIds');

Route::resource('workers', 'WorkerController', [
    'parameters' => 'singular'
]);

Route::resource('clients', 'ClientController', [
    'parameters' => 'singular'
]);

Route::resource('organisations', 'OrganisationController', [
    'parameters' => 'singular'
]);


/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => ['web']], function () {
    
    
});
