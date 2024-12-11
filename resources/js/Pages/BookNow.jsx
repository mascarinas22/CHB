import React from 'react';
import { useForm } from '@inertiajs/react';

const BookNowForm = () => {
  const { data, setData, post, processing, reset } = useForm({
    name: '',
    email: '',
    checkin: '',
    checkout: '',
    guests: '',
  });

  const handleSubmit = (e) => {X
    e.preventDefault();

    post('/bookings', {
      onSuccess: () => {
        alert('Booking successful!');
        reset();
      },
      onError: (errors) => {
        console.error(errors);
        alert('Booking failed. Please try again.');
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Book Your Stay</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder=""
          value={data.name}
          onChange={(e) => setData('name', e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder=""
          value={data.email}
          onChange={(e) => setData('email', e.target.value)}
          required
        />
      </div>
      <div className="mb-4 flex space-x-4">
        <div className="w-1/2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="checkin">
            Check-in
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="checkin"
            type="date"
            value={data.checkin}
            onChange={(e) => setData('checkin', e.target.value)}
            required
          />
        </div>
        <div className="w-1/2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="checkout">
            Check-out
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="checkout"
            type="date"
            value={data.checkout}
            onChange={(e) => setData('checkout', e.target.value)}
            required
          />
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guests">
          Guests
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="guests"
          type="number"
          placeholder="2"
          min="1"
          value={data.guests}
          onChange={(e) => setData('guests', e.target.value)}
          required
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-300 ease-in-out transform hover:scale-105"
          type="submit"
          disabled={processing}
        >
          {processing ? 'Processing...' : 'Book Now'}
        </button>
      </div>
    </form>
  );
};

export default BookNowForm;