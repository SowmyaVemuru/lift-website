import React from "react";

const Contact = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p>Email: contact@liftservices.com</p>
      <p>Phone: +91 98765 43210</p>
      <iframe
        title="Google Maps"
        className="mt-4 w-full h-64"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3..."
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Contact;