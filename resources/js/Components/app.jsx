import React from 'react';
import Header from './Header';
import MainSection from './MainSection';
import Section from './Section';

const App = () => {
    return (
        <div>
            <Header />
            <MainSection />
            <Section
                id="home"
                title="Welcome to Keto Hotel"
                content="Experience luxury and comfort in the heart of the city. Our rooms offer stunning views and top-notch amenities to make your stay unforgettable."
                background="bg-gray-100"
            />
            <Section
                id="about"
                title="About Us"
                content="Keto Hotel is a premier destination for travelers seeking a blend of luxury and convenience. Our dedicated staff ensures that every guest has a memorable stay."
                background="bg-white"
            />
            <Section
                id="our-room"
                title="Our Rooms"
                content="Choose from a variety of room types, each designed to provide the utmost comfort and style. Whether you're here for business or leisure, we have the perfect room for you."
                background="bg-gray-100"
            />
            <Section
                id="gallery"
                title="Gallery"
                content="Explore our gallery to see the beautiful interiors and stunning views that await you at Keto Hotel."
                background="bg-white"
            />
            <Section
                id="blog"
                title="Blog"
                content="Stay updated with the latest news and events at Keto Hotel. Our blog features articles on travel tips, local attractions, and more."
                background="bg-gray-100"
            />
            <Section
                id="contact"
                title="Contact Us"
                content="Have questions or need assistance? Get in touch with us, and our team will be happy to help you."
                background="bg-white"
            />
            <Section
                id="login"
                title="Log In"
                formFields={[
                    { label: "Email", type: "email", placeholder: "Enter your email" },
                    { label: "Password", type: "password", placeholder: "Enter your password" },
                ]}
                buttonText="Log In"
                background="bg-gray-100"
            />
            <Section
                id="register"
                title="Register"
                formFields={[
                    { label: "Name", type: "text", placeholder: "Enter your name" },
                    { label: "Email", type: "email", placeholder: "Enter your email" },
                    { label: "Password", type: "password", placeholder: "Enter your password" },
                ]}
                buttonText="Register"
                background="bg-white"
                
            />
        </div>
    );
};

export default App;
