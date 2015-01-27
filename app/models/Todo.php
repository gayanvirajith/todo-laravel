<?php

class Todo extends \Eloquent {
	protected $fillable = ['name', 'done'];

  public function user() {
    return $this->belongsTo('User');
  }

  public static function yourTodos() {
   return Todo::with(array('user'))
      ->where('user_id', '=', Auth::user()->id)->get();
  }
}