import React, { useState } from "react";

const LoginPage = () => {
  // State variables for form inputs, errors, and login success message
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [userEmail, setUserEmail] = useState(""); // To store the email after successful login

  // Validation function
  const validate = () => {
    const errors = {};
    if (!email) errors.email = "Email is required.";
    if (!password) errors.password = "Password is required.";
    return errors;
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Proceed with authentication (assuming successful login here)
      setIsLoggedIn(true);
      setUserEmail(email); // Save email after login
      setEmail(""); // Clear email input field
      setPassword("");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Login */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white px-10">
        <h2 className="text-4xl font-bold mb-4">Login to Your Account</h2>
        <p className="text-gray-500 mb-4">Login using social networks</p>

        <div className="flex space-x-4 mb-6">
          <button className="w-12 h-12 rounded-full bg-blue-700 text-white text-xl">f</button>
          <button className="w-12 h-12 rounded-full bg-red-500 text-white text-xl">G+</button>
          <button className="w-12 h-12 rounded-full bg-blue-900 text-white text-xl">in</button>
        </div>

        <div className="w-full flex items-center justify-center mb-6">
          <div className="w-1/3 border-t border-gray-300" />
          <span className="mx-4 text-gray-400">OR</span>
          <div className="w-1/3 border-t border-gray-300" />
        </div>

        {/* Form starts here */}
        <form onSubmit={handleSubmit} className="w-full">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-2 px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-2 px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          {errors.password && <p className="text-red-500 text-sm mb-4">{errors.password}</p>}

          <button
            type="submit"
            className="w-full py-3 bg-teal-500 text-white font-semibold rounded-full hover:bg-teal-600 transition"
          >
            Sign In
          </button>
        </form>
        {/* Form ends here */}

        {/* Success Message */}
        {isLoggedIn && (
          <div className="mt-4 text-green-500">
            <p>Welcome, {userEmail}! You have logged in successfully.</p>
          </div>
        )}
      </div>

      {/* Right Side - Sign Up */}
      <div className="w-1/2 bg-gradient-to-br from-teal-400 to-blue-500 text-white flex flex-col justify-center items-center px-10">
        <h2 className="text-4xl font-bold mb-4">New Here?</h2>
        <p className="text-lg text-center mb-6 px-4">
          Sign up and discover a great amount of new opportunities!
        </p>
        <button className="bg-white text-blue-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
