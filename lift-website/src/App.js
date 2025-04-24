import React, { useEffect } from "react";
import Logo from "./assets/varshi-logo.png";
import BackgroundImage from "./assets/elevator-staircase.jpg";
// import AboutBg from "./assets/about-bg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserAlt, FaBoxes, FaHospital } from "react-icons/fa";

export default function LiftWebsite() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="font-sans scroll-smooth bg-gradient-to-b from-blue-100 via-white to-green-100">
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen text-white flex flex-col justify-center items-center p-8 bg-cover bg-center"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="flex items-center mb-4 bg-black bg-opacity-50 p-4 rounded-xl">
          <img src={Logo} alt="Varshi Elevators Logo" className="h-16 w-16 mr-4" />
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to Varshi Elevators</h1>
        </div>
        <p className="text-lg md:text-xl max-w-2xl text-center bg-black bg-opacity-40 p-2 rounded-lg">
          Premium lift solutions for residential, commercial, and industrial needs.
        </p>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen text-white flex flex-col justify-center items-center p-8"
        data-aos="fade-up"
      >
        <div className="bg-black bg-opacity-60 p-8 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="max-w-3xl text-lg">
            ElevatePro is a trusted name in the lift industry, offering innovative and reliable elevators tailored to every requirement. With decades of experience, our team ensures quality, safety, and top-notch service.
          </p>
        </div>
      </section>

      {/* Types of Lifts Section */}
      <section
        id="types"
        className="min-h-screen text-gray-900 p-8"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Types of Lifts We Offer</h2>
        <div className="grid md:grid-cols-3 gap-6 bg-white bg-opacity-80 p-6 rounded-2xl">
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <FaUserAlt className="text-4xl text-blue-600 mb-2 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Passenger Lifts</h3>
            <p>Ideal for residential and commercial buildings, ensuring smooth and safe rides for users.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <FaBoxes className="text-4xl text-green-600 mb-2 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Freight Elevators</h3>
            <p>Designed to transport heavy goods and materials in industrial environments efficiently.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <FaHospital className="text-4xl text-red-500 mb-2 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Hospital Lifts</h3>
            <p>Spacious and smooth-functioning lifts tailored for patient transport and medical equipment.</p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="min-h-screen bg-blue-100 text-gray-900 p-8" data-aos="zoom-in">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="mb-2">"ElevatePro installed our office lift with perfection. Smooth service and amazing support!"</p>
            <h4 className="font-semibold">- Rajesh Kumar</h4>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="mb-2">"The lift in our apartment is now faster and more reliable, thanks to ElevatePro."</p>
            <h4 className="font-semibold">- Sneha Sharma</h4>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen text-white flex flex-col justify-center items-center p-8"
        data-aos="fade-up"
      >
        <div className="bg-black bg-opacity-60 p-8 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="max-w-3xl text-lg mb-4">
            Get in touch with us to know more about our elevator services and solutions. We’re here to help you elevate your buildings.
          </p>
          <div className="text-lg">
            <p className="mb-2">📧 Email: <a href="mailto:contact@varshielevators.com" className="underline text-blue-300">contact@varshielevators.com</a></p>
            <p>📞 Phone: <a href="tel:+919876543210" className="underline text-blue-300">+91 98765 43210</a></p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-900 text-white text-center p-4">
        <p>&copy; 2025 Varshi Elevators. All rights reserved.</p>
      </footer>
    </div>
  );
}
