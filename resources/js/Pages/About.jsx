import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const About = () => {
    return (
        <AuthenticatedLayout>
            <Head title="About Us" />
            <div
                className="min-h-screen bg-cover bg-fixed bg-center py-12 px-4 sm:px-6 lg:px-8"
                style={{
                    backgroundImage: "url('/images/ABOUT.jpg')",
                }}
            >
                <div className="bg-black bg-opacity-50 rounded-lg shadow-lg p-8">
                    {/* Header Section */}
                    <h1 className="text-5xl font-bold text-center text-white font-serif tracking-wide mb-6">
                        About Capitol Boutique Hotel
                    </h1>

                    {/* First Section */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Image Section */}
                        <div className="transform hover:scale-105 transition-transform duration-300">
                            <img
                                src="/images/ABOUT2.png"
                                alt="Hotel Interior"
                                className="rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Text Section */}
                        <div>
                            <p className="text-lg text-white mb-6 font-serif leading-relaxed">
                                Welcome to Capitol Boutique Hotel, your home away from home.
                                Located in the heart of the province, our hotel combines modern
                                luxury with a touch of local charm. Whether you're here for
                                business, leisure, or both, we provide the perfect blend of
                                comfort and style to make your stay unforgettable.
                            </p>
                            <p className="text-lg text-white mb-6 font-serif leading-relaxed">
                                Our hotel features beautifully designed rooms, world-class
                                amenities, and a dedicated staff committed to ensuring your
                                satisfaction. We take pride in delivering exceptional service,
                                making sure every guest feels valued and appreciated.
                            </p>
                            <p className="text-lg text-white font-serif leading-relaxed">
                                Experience the best in hospitality, where your comfort and
                                happiness are our priorities. Book your stay today and create
                                memorable moments at Capitol Boutique Hotel!
                            </p>
                        </div>
                    </div>

                    {/* Second Section */}
                    <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
                        {/* Text Section */}
                        <div>
                            <h2 className="text-4xl font-bold text-center text-white font-serif mb-6">
                                Our Commitment to Excellence
                            </h2>
                            <p className="text-lg text-white mb-6 font-serif leading-relaxed">
                                At Capitol Boutique Hotel, we believe in creating memorable
                                experiences for our guests. From the moment you arrive, you'll
                                be greeted with warm smiles and a welcoming atmosphere. Our
                                attention to detail and commitment to excellence ensure that your
                                stay with us is nothing short of extraordinary.
                            </p>
                            <p className="text-lg text-white font-serif leading-relaxed">
                                Whether you're enjoying a meal in our on-site restaurant,
                                relaxing in your luxurious room, or exploring the local
                                attractions, you'll find that every aspect of your stay has been
                                thoughtfully designed with your comfort in mind.
                            </p>
                        </div>

                        {/* Image Section */}
                        <div className="transform hover:scale-105 transition-transform duration-300">
                            <img
                                src="/images/ABOUT.1.jpg"
                                alt="Our Commitment"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default About;
