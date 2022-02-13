<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
     public function run()
     {
         \DB::table('users')->truncate();

         $user1 = [
         	'name' => 'Ian Muela',
         	'email' => 'iankamisama@gmail.com',
         	'password' => Hash::make('123123'),
         ];

         User::create($user1);

         $user2 = [
             'name' => 'User1',
             'email' => 'user1@gmail.com',
             'password' => Hash::make('123123'),
         ];

         User::create($user2);

         $user3 = [
             'name' => 'User2',
             'email' => 'user2@gmail.com',
             'password' => Hash::make('123123'),
         ];

         User::create($user3);
     }
}
