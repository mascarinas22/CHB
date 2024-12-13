<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $stats = [
            'totalRooms' => 50,
            'availableRooms' => 30,
            'currentBookings' => 20,
            'totalGuests' => 45,
        ];

        return Inertia::render('Dashboard', [
            'stats' => $stats,
        ]);
    }
}

