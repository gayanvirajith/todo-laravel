<?php

class TodoTableSeeder extends Seeder {

	public function run()
	{

		foreach(range(1, 10) as $index)
		{
			Todo::create([
        'name' => 'Todo item ' . $index,
        'user_id' => 1
			]);
		}
	}

}