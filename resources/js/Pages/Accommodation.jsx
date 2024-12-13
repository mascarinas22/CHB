import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

const Accommodation = () => {
    const images = [
        {
            src: "/images/gallery4.jpg",
            title: "Deluxe Room: ₱3,500 per night",
            description: "Includes: 2 Queen Beds, Wi-Fi, Air Conditioning, Breakfast, and Pool Access.",
        },
        {
            src: "/images/bed3.jpg",
            title: "Suite Room: ₱5,000 per night",
            description: "Includes: 1 King Bed, Living Area, Wi-Fi, Air Conditioning, Breakfast, Pool Access, and Sea View.",
        },
        {
            src: "/images/bed.jpg",
            title: "Backpacker Room: ₱1,200 per night",
            description: "Includes: 1 Single Bed, Wi-Fi, Air Conditioning, Shared Bathroom, and Breakfast.",
        },
        {
            src: "/images/gallery7.jpg",
            title: "Superior Room: ₱3,200 per night",
            description: "Includes: 1 Queen Bed, Wi-Fi, Air Conditioning, Breakfast, Pool Access, and Garden View.",
        },
        {
            src: "/images/bed2.jpg",
            title: "Garden View Room: ₱3,000 per night",
            description: "Includes: 1 Queen Bed, Wi-Fi, Air Conditioning, Breakfast, and Garden View.",
        },
        {
            src: "/images/gallery9.jpg",
            title: "Standard Room: ₱2,000 per night Includes",
            description: " Includes: 1 Queen Bed, Wi-Fi, Air Conditioning, and Breakfast.",
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
    <h1 className="text-4xl font-bold text-center text-[#3E2723] font-playfair">
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
          className="overflow-hidden rounded-xl shadow-md border border-gray-200 bg-white"
        >
          {/* Aspect Ratio Wrapper */}
          <div className="aspect-w-4 aspect-h-3">
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => handleImageClick(image)}
            />
          </div>
          {/* Image Title and Description */}
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">{image.title}</h2>
            <p className="text-sm text-gray-600">{image.description}</p>
            {/* Book Now Button */}
            <button
              onClick={() => {
                window.location.href = "/book-now"; // Redirect to booking page
              }}
              className="mt-4 w-full bg-gradient-to-r from-[#E5D6C3] to-[#B59D8F] hover:from-[#d4c1ae] hover:to-[#9d8775] text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-300"
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="bg-white rounded-lg shadow-lg max-w-md mx-4 p-6 relative backdrop-blur-lg"
        style={{ backdropFilter: "blur(10px)" }}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 transition"
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
            window.location.href = "/book-now";
          }}
          className="mt-4 w-full bg-gradient-to-r from-[#E5D6C3] to-[#B59D8F] hover:from-[#d4c1ae] hover:to-[#9d8775] text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-300"
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
