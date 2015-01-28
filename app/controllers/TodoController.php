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

	public function show($id) {
		return Todo::find($id);
	}

	public function update($id) {

		$todo = $this->findTodo($id);

		$todo->name = Input::get('name');
		$todo->update();
		
		return Response::make(array('message' => 'Todo Updated!'));
	}

	private function findTodo($id) {
		return Todo::find($id);
	}
}