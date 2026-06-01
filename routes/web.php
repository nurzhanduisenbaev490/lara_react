<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
//    return view('app');
//    return inertia('Home');
//    sleep(2);
    return Inertia::render('Home', ['name'=>'Moto']);
});

//Route::inertia('/', 'Home2');
