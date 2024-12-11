import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

const Accommodation = () => {
    const images = [
        {
            src: "/images/gallery4.jpg",
            title: "Deluxe Room",
            description: "Our Deluxe Room offers a luxurious and spacious experience with modern amenities and elegant design.",
        },
        {
            src: "/images/gallery5.jpg",
            title: "Suite Room",
            description: "The Suite Room provides ultimate comfort with a separate living area and breathtaking views.",
        },
        {
            src: "/images/gallery6.jpg",
            title: "Standard Room",
            description: "Cozy and comfortable, the Standard Room is perfect for a relaxing stay with all the essentials.",
        },
        {
            src: "/images/gallery7.jpg",
            title: "Outdoor Pool",
            description: "Enjoy a refreshing swim in our outdoor pool, surrounded by a serene environment.",
        },
        {
            src: "/images/gallery8.jpg",
            title: "Dining Area",
            description: "Experience exquisite dining with a variety of local and international cuisines.",
        },
        {
            src: "/images/gallery9.jpg",
            title: "Lobby Area",
            description: "Relax in our welcoming lobby, designed with style and comfort in mind.",
        },
    ];

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Gallery" />
            <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-bold text-center text-[#3E2723]">
                        Accommodation
                    </h1>
                    <p className="text-lg text-center text-gray-600 mt-4">
                        Explore our hotel through these stunning images.
                    </p>

                    {/* Image Grid */}
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {images.map((image, index) => (
        <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md"
        >
            {/* Aspect Ratio Wrapper */}
            <div className="aspect-w-4 aspect-h-3">
                <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                    onClick={() => handleImageClick(image)}
                />
            </div>
            {/* Image Title and Description */}
            <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800">{image.title}</h2>
                <p className="text-sm text-gray-600">{image.description}</p>
                {/* Book Now Button */}
                <button
                    onClick={() => {
                        window.location.href = "/book-now"; // Redirect to booking page
                    }}
                    className="mt-4 w-full bg-[#B59D8F] hover:bg-[#a3897a] text-white font-medium py-2 px-4 rounded-md shadow-sm"
                >
                    Book Now
                </button>
            </div>
        </div>
    ))}
</div>

                </div>

                {/* Modal */}
                {selectedImage && (
                    <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center">
                        <div className="bg-white rounded-lg shadow-lg max-w-md mx-4 p-6 relative">
                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                            {/* Modal Image */}
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                className="rounded-md mb-4"
                            />
                            {/* Modal Title */}
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                {selectedImage.title}
                            </h2>
                            {/* Modal Description */}
                            <p className="text-gray-600">{selectedImage.description}</p>
                            {/* Book Now Button */}
                            <button
                                onClick={() => {
                                    // Replace with your booking logic or navigation
                                    window.location.href = "/book-now"; // Redirect to booking page
                                }}
                                className="mt-4 w-full bg-[#B59D8F] hover:bg-[#a3897a] text-white font-medium py-2 px-4 rounded-md shadow-sm"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
};

export default Accommodation; 
