<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function store(Request $request)
    {
        // Validate the request
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'checkin' => 'required|date',
            'checkout' => 'required|date|after:checkIn',
            'guests' => 'required|integer|min:1',
        ]);

        // Create the booking
        Booking::create($validated);

        // Redirect back with success message
        return back()->with('success', 'Booking successful!');
    }

    public function update(Request $request, $id)
{
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email',
        'checkin' => 'required|date',
        'checkout' => 'required|date|after_or_equal:checkin',
        'guests' => 'required|integer|min:1',
    ]);

    $bookings = Booking::findOrFail($id);
    $bookings->update($validated);

    return redirect()->back()->with('success', 'Booking updated successfully.');
}


        public function index()
    {
        $bookings = Booking::all();

        return inertia('Bookings/History', [
            'bookings' => $bookings,
        ]);
    }


    
}


