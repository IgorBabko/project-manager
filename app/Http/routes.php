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
    'uses' => 'ExampleControllers\AngularRoutesController@index',
    'as' => 'home'
]);

// Angular 2 base `/edit` route resolving
Route::get('/edit', [
    'uses' => 'ExampleControllers\AngularRoutesController@index',
    'as' => 'edit'
]);

// Angular 2 templates route
Route::get('/templates/{template}', 'ExampleControllers\AngularTemplatesController@index');

// API route
Route::post('/api/upload-file', 'ExampleControllers\UploadController@uploadFile');

Route::resource('project', 'ProjectsController');

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
    //
});
