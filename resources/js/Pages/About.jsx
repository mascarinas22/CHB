import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const About = () => {
    return (
        <AuthenticatedLayout>
            <Head title="About Us" />
            <div
                className="min-h-screen bg-cover bg-center py-12 px-4 sm:px-6 lg:px-8"
                style={{
                    backgroundImage: "url('/images/ABOUT.jpg')",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="">
                    {/* Header Section */}
                    <h1 className="text-4xl font-bold text-center text-white font-serif tracking-wide">
    About Capitol Boutique Hotel
</h1>


                    {/* First Section */}
                    <div className="mt-8 bg-transparent p-6 rounded-lg">
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Image Section */}
                            <div>
                                <img
                                    src="/images/ABOUT2.png" 
                                    alt="Hotel Interior"
                                    className="rounded-md shadow-md w-auto h-25 ml-20"
                                />
                            </div>

                            {/* Text Section */}
                            <div className="flex flex-col justify-center">
                                <p className="text-lg text-white mb-4 font-bold font-serif">
                                    Welcome to Capitol Boutique Hotel, your home away from home. Located
                                    in the heart of the province, our hotel combines modern luxury with
                                    a touch of local charm. Whether you're here for business, leisure, or
                                    both, we provide the perfect blend of comfort and style to make your
                                    stay unforgettable.
                                </p>
                                <p className="text-lg text-white mb-4 font-bold font-serif">
                                    Our hotel features beautifully designed rooms, world-class amenities,
                                    and a dedicated staff committed to ensuring your satisfaction. We take
                                    pride in delivering exceptional service, making sure every guest feels
                                    valued and appreciated.
                                </p>
                                <p className="text-lg text-white mb-4 font-bold font-serif">
                                    Experience the best in hospitality, where your comfort and happiness
                                    are our priorities. Book your stay today and create memorable moments
                                    at Capitol Boutique Hotel!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Second Section */}
                    <div className="mt-12 bg-transparent p-6 rounded-lg">
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Text Section on Left */}
                            <div className="flex flex-col justify-center">
                                <h2 className="text-4xl font-bold text-center text-white font-serif">
                                    Our Commitment to Excellence
                                </h2>
                                <p className="text-lg text-white mb-4 font-bold font-serif">
                                    At Capitol Boutique Hotel, we believe in creating memorable experiences
                                    for our guests. From the moment you arrive, you'll be greeted with warm
                                    smiles and a welcoming atmosphere. Our attention to detail and
                                    commitment to excellence ensure that your stay with us is nothing short
                                    of extraordinary.
                                </p>
                                <p className="text-lg text-white mb-4 font-bold font-serif">
                                    Whether you're enjoying a meal in our on-site restaurant, relaxing in
                                    your luxurious room, or exploring the local attractions, you'll find
                                    that every aspect of your stay has been thoughtfully designed with your
                                    comfort in mind.
                                </p>
                            </div>

                            {/* Image Section on Right */}
                            <div>
                                <img
                                    src="/images/ABOUT.1.jpg" // Replace with your actual image path
                                    alt="Our Commitment"
                                    className="rounded-md shadow-md w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default About;
