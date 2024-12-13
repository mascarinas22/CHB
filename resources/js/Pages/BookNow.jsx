import React, { useState } from 'react';
import { useForm, Link } from '@inertiajs/react';

const BookNowForm = () => {
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const { data, setData, post, processing, reset } = useForm({
    name: '',
    email: '',
    checkin: '',
    checkout: '',
    guests: '',
  });

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = (e) => {
    e.preventDefault();

    post('/bookings', {
      onSuccess: () => {
        setBookingSuccess(true);
        reset();
      },
      onError: (errors) => {
        console.error(errors);
        alert('Booking failed. Please try again.');
      },
    });
  };

  const handleClose = () => {
    reset();
    setBookingSuccess(false);
  };

  if (bookingSuccess) {
    return (
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Booking Successful!</h2>
        <p className="text-center text-gray-600 mb-6">Your booking has been confirmed. Thank you for choosing Capitol Boutique Hotel.</p>
        <div className="flex flex-col space-y-4">
          <Link
            href="/bookings"
            className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-center transition duration-300 ease-in-out transform hover:scale-105"
          >
            View My Bookings
          </Link>
          <button
            onClick={handleClose}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 w-full text-center transition duration-300 ease-in-out transform hover:scale-105"
          >
            Make Another Booking
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
        <button
          type="button"
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl"
          onClick={handleClose}
        >
          &times;
        </button>
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Book Your Stay at Capitol Boutique Hotel</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="name"
            type="text"
            placeholder="Enter your full name"
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="email"
            type="email"
            placeholder="Enter your email address"
            value={data.email}
            onChange={(e) => setData('email', e.target.value)}
            required
          />
        </div>
        <div className="mb-4 flex space-x-4">
          <div className="w-1/2">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="checkin">
              Check-in Date
            </label>
            <input
              className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="checkin"
              type="date"
              value={data.checkin}
              onChange={(e) => setData('checkin', e.target.value)}
              required
              min={today} // Prevent past dates
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="checkout">
              Check-out Date
            </label>
            <input
              className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="checkout"
              type="date"
              value={data.checkout}
              onChange={(e) => setData('checkout', e.target.value)}
              required
              min={today} // Prevent past dates
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="guests">
            Number of Guests
          </label>
          <input
            className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="guests"
            type="number"
            min="1"
            placeholder="1"
            value={data.guests}
            onChange={(e) => setData('guests', e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full transition duration-300 ease-in-out transform hover:scale-105"
            type="submit"
            disabled={processing}
          >
            {processing ? 'Processing...' : 'Confirm Booking'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookNowForm;
