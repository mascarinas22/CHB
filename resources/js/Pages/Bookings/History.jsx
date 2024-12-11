import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React from 'react';

const BookingHistory = ({ bookings }) => {
  return (
    <AuthenticatedLayout>
      <Head title='Booking History'></Head>
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded px-8 pt-6 mt-10 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Booking History</h2>
      {bookings.length > 0 ? (
        <table className="table-auto w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Check-in</th>
              <th className="px-4 py-2 border">Check-out</th>
              <th className="px-4 py-2 border">Guests</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td className="px-4 py-2 border">{booking.name}</td>
                <td className="px-4 py-2 border">{booking.email}</td>
                <td className="px-4 py-2 border">{booking.checkin}</td>
                <td className="px-4 py-2 border">{booking.checkout}</td>
                <td className="px-4 py-2 border">{booking.guests}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-700">No bookings found.</p>
      )}
    </div>
    </AuthenticatedLayout>
  );
};

export default BookingHistory;
