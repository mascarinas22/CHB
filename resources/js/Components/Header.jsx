import React from 'react';

const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="flex items-center">
                    <img src="https://placehold.co/50x50" alt="Keto Logo" className="h-10 w-10" />
                    <span className="text-2xl font-bold text-red-600 ml-2">KETO</span>
                </div>
                <nav className="space-x-6">
                    {["HOME", "ABOUT", "OUR ROOM", "GALLERY", "BLOG", "CONTACT US", "LOG IN", "REGISTER"].map((item, index) => (
                        <a key={index} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-black hover:text-red-600">
                            {item}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
