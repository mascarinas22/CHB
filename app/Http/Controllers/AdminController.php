<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    /**
     * Display a list of payments for the authenticated user.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        // Fetch payments for the logged-in user
        $Admin = auth()->user()->Admin()->orderBy('created_at', 'desc')->get();

        // Return an Inertia response (or a Blade view if you're not using Inertia)
        return inertia('Admin/Index', [
            'Admin' => $Admin,
        ]);
    }
}
