import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit the form data
  const contactSubmit = async (e) => {
//
    e.preventDefault(); // Prevent form reload

    try {
      // Use axios to post the form data
      const response = await axios.post("/contactSubmit", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response.data);

      // Show a success toast notification
      toast.success("Message submitted successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
          backgroundColor: "#B59D8F",
          color: "#fff",
          fontSize: "16px",
          fontWeight: "bold",
        },
      });
    } catch (error) {
      console.error(error);

      // Show an error toast notification
      toast.error("Failed to submit message. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
          backgroundColor: "#a3897a",
          color: "#fff",
          fontSize: "16px",
          fontWeight: "bold",
        },
      });
    }
  };

  return (
    <AuthenticatedLayout>
      <div className="min-h-screen bg-[#F5F5F5]">
        {/* Toast Container */}
        <ToastContainer />

        {/* Contact Us Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center sm:items-start sm:space-x-8 px-6 py-10">
          {/* Google Map (Iframe) */}
          <div className="w-full sm:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.6831928526594!2d121.48833989428792!3d12.745958538742256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b1e1694f20e1ab%3A0x13fa2e1c3b8cb8a!2sCapitol%20Boutique%20Hotel!5e0!3m2!1sen!2sph!4v1684567890123"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="w-full sm:w-1/2 mt-8 sm:mt-0">
            <form
              onSubmit={contactSubmit}
              className="bg-white shadow-md rounded-md p-6 space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium">
                  Name
                </label>
                <input
                  name="name"
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#B59D8F] focus:ring-[#B59D8F]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium">
                  Email
                </label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#B59D8F] focus:ring-[#B59D8F]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows="4"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#B59D8F] focus:ring-[#B59D8F]"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-[#B59D8F] px-4 py-2 text-white font-medium shadow-sm hover:bg-[#a3897a] focus:outline-none focus:ring-2 focus:ring-[#B59D8F]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default ContactUs;
