<?php

namespace App\Http\Controllers;

use App\Models\Booking;

class MybookingController extends Controller
{
    public function index()
    {
        $bookings = Booking::all();

        return inertia('Bookings/Mybookings', [
            'bookings' => $bookings,
        ]);
    }

}
