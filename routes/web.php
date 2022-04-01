<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Dashboard');
});

Route::get('/settings', function () {
    return Inertia::render('Settings');
})->name('settings');

Route::get('/tables', function () {
    return Inertia::render('Tables');
})->name('tables');

Route::get('/login', function () {
    return Inertia::render('Auth/Login');
});
Route::get('/register', function () {
    return Inertia::render('Auth/Register');
});
Route::get('/landing', function () {
    return Inertia::render('Landing');
});
Route::get('/profile', function () {
    return Inertia::render('Profile');
});
