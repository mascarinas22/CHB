import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import React, { useState } from 'react';

const Bookings = ({ bookings }) => {
  const [editingBooking, setEditingBooking] = useState(null);
  const { data, setData, put, errors } = useForm({
    id: '',
    name: '',
    email: '',
    checkin: '',
    checkout: '',
    guests: '',
  });

  const startEditing = (booking) => {
    setEditingBooking(booking.id);
    setData(booking);
  };

  const cancelEditing = () => {
    setEditingBooking(null);
    setData({ id: '', name: '', email: '', checkin: '', checkout: '', guests: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    put(`/bookings/${data.id}`, {
      onSuccess: () => {
        cancelEditing();
      },
    });
  };

  return (
    <AuthenticatedLayout>
      <Head title="My Bookings" />
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded px-8 mt-10 pt-6 pb-8 mb-4">
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
                <th className="px-4 py-2 border">Actions</th>
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
                  <td className="px-4 py-2 border">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                      onClick={() => startEditing(booking)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-700">No bookings found.</p>
        )}

        {editingBooking && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800">Edit Booking</h3>
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  value={data.name}
                  onChange={(e) => setData('name', e.target.value)}
                  className="w-full border px-3 py-2 rounded"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => setData('email', e.target.value)}
                  className="w-full border px-3 py-2 rounded"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Check-in</label>
                <input
                  type="date"
                  value={data.checkin}
                  onChange={(e) => setData('checkin', e.target.value)}
                  className="w-full border px-3 py-2 rounded"
                />
                {errors.checkin && <p className="text-red-500 text-sm">{errors.checkin}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Check-out</label>
                <input
                  type="date"
                  value={data.checkout}
                  onChange={(e) => setData('checkout', e.target.value)}
                  className="w-full border px-3 py-2 rounded"
                />
                {errors.checkout && <p className="text-red-500 text-sm">{errors.checkout}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Guests</label>
                <input
                  type="number"
                  value={data.guests}
                  onChange={(e) => setData('guests', e.target.value)}
                  className="w-full border px-3 py-2 rounded"
                />
                {errors.guests && <p className="text-red-500 text-sm">{errors.guests}</p>}
              </div>
              <div className="flex items-center">
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mr-2">
                  Save
                </button>
                <button
                  type="button"
                  onClick={cancelEditing}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </AuthenticatedLayout>
  );
};

export default Bookings;
