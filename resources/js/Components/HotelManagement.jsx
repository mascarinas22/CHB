import React from 'react';
import './HotelManagement.css'; // Optional: Create a CSS file for styling

const HotelManagement = () => {
    return (
        <div className="hotel-management">
            <header className="header">
                <h1>Welcome to Our Hotel Management System</h1>
                <p>Your comfort is our priority!</p>
            </header>
            <section className="rooms">
                <h2>Available Rooms</h2>
                <div className="room-list">
                    <div className="room">
                        <h3>Deluxe Room</h3>
                        <p>Price: $200/night</p>
                        <button>Book Now</button>
                    </div>
                    <div className="room">
                        <h3>Standard Room</h3>
                        <p>Price: $150/night</p>
                        <button>Book Now</button>
                    </div>
                    <div className="room">
                        <h3>Suite</h3>
                        <p>Price: $300/night</p>
                        <button>Book Now</button>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p>Contact us: info@hotel.com | +1 234 567 890</p>
            </footer>
        </div>
    );
};

export default HotelManagement;