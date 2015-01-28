<?php

class Todo extends \Eloquent {
	protected $fillable = ['name', 'done'];
  protected $hidden  = ['created_at', 'updated_at'];

  public function user() {
    return $this->belongsTo('User');
  }

  public static function yourTodos() {
   return Todo::where('user_id', '=', Auth::user()->id)->get();
  }
}