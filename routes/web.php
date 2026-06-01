<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

//Route::get('/', function () {
////    return view('app');
////    return inertia('Home');
////    sleep(2);
//    return Inertia::render('Home', ['name'=>'Moto']);
//});

//Route::inertia('/', 'Home2');
Route::get('/', [PostController::class, 'index']);
Route::resource('posts', PostController::class)->except('index');
