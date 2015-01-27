<?php

class TodoController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 * GET /todo
	 *
	 * @return Response
	 */
	public function index()
	{
		return Todo::yourTodos();
	}

}