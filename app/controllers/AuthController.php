<?php

class AuthController extends \BaseController {

	public function login() {

		$user = [
			'username' => Input::get('username'),
			'password' => Input::get('password')
		];

		if (Auth::attempt($user)) {
			return Response::make(array('message' => 'You are logged in!', 'user' => Auth::user()));
		} else {
			return Response::make(array('message' => 'Your username/password combination was incorrect!'), 401);
		}

	}

	public function logout() {
		if (Auth::check()) {
			Auth::logout();
			return Response::make(array('message' => 'You are now logged out!'));
		} else {
			return Response::make(array('message' => 'Please login!'),401);
		}
	}

}