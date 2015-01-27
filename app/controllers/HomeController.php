<?php

class HomeController extends BaseController {

  /**
   * Route::get('/', 'HomeController@index');
   *
   * Handle angular application, displaying view based on environment
   */
  public function index() {
    return View::make('angularjs.application');
  }

}
