<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\MybookingController;
use App\Http\Controllers\GreetingsController;


Route::post('/bookings', [BookingController::class, 'store']);



Route::get('/book-now', function () {
    return Inertia::render('BookNow');
});

Route::post('/contactSubmit', [ContactController::class, 'store']);

// routes/web.php
Route::put('/bookings/{id}', [BookingController::class, 'update'])->name('bookings.update');
Route::get('/bookings', [BookingController::class, 'index'])->name('bookings.index');
Route::get('/bookings/history', [BookingController::class, 'index'])->name('bookings.history');
Route::get('/bookings/mybookings', [MybookingController::class, 'index'])->name('bookings.mybookings');


// Payments Route
Route::get('/payments', [PaymentController::class, 'index'])->name('payments.index');





Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');


Route::get('/accommodation', function () {
    return Inertia::render('Accommodation');
})->name('accommodation');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');
Route::post('/contactSubmit', [ContactController::class, 'store'])->name('contact.store');


Route::get('greetings', [GreetingsController::class,'index']);


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


   

Route::post('/bookings', [BookingController::class, 'store'])->middleware(['auth', 'verified']);

});

require __DIR__.'/auth.php';
