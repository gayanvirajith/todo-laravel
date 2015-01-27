<?php

class UserTableSeeder extends Seeder {

	public function run()
	{

    User::create([
      'username' => 'gayan',
      'password' => Hash::make('eppo123')
    ]);
	}

}