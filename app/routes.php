<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', array('uses' => 'HomeController@index', 'as' => 'home'));

Route::get('logout', array('uses' => 'AuthController@logout', 'as' => 'logout'));

Route::get('expiry', array('uses' => 'AuthController@expiry', 'as' => 'expiry'));

Route::get('todos', array('before' => 'auth', 'uses' => 'TodoController@index', 'as' => 'todos'));

Route::get('todo/{id}', array('uses' => 'TodoController@show', 'as' => 'show.todos'));

// Post request
Route::post('login', array('before' => 'csrf_json', 'uses' => 'AuthController@login', 'as' => 'login'));

Route::post('todo/update/{id}', array('uses' => 'TodoController@update', 'as' => 'todoUpdate'));

