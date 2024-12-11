import React from 'react';

const MainSection = () => {
    return (
        <main className="relative">
            <img src="https://placehold.co/1920x1080" alt="Hotel Room with City View" className="w-full h-screen object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-black bg-opacity-70 p-8 rounded-lg text-white max-w-md w-full">
                    <h1 className="text-3xl font-bold mb-6">BOOK A ROOM ONLINE</h1>
                    <form>
                        <div className="mb-4">
                            <label className="block mb-2">Arrival</label>
                            <div className="relative">
                                <input type="text" className="w-full p-2 bg-transparent border border-gray-300 rounded text-white" placeholder="mm/dd/yyyy" />
                                <i className="fas fa-calendar-alt absolute right-3 top-3 text-gray-300"></i>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Departure</label>
                            <div className="relative">
                                <input type="text" className="w-full p-2 bg-transparent border border-gray-300 rounded text-white" placeholder="mm/dd/yyyy" />
                                <i className="fas fa-calendar-alt absolute right-3 top-3 text-gray-300"></i>
                            </div>
                        </div>
                        <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 w-full">Book Now</button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default MainSection;
