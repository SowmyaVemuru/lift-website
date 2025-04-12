import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LiftTypes from "./pages/LiftTypes";
import LoginPage from "./Login/Loginpage";

const App = () => {
  return (
    // <Router>
    //   <div className="bg-gray-100 min-h-screen">
    //     <nav className="bg-blue-600 p-4 text-white flex justify-between">
    //       <h1 className="text-xl font-bold">Lift Services</h1>
    //       <div className="space-x-4">
    //         <Link to="/">Home</Link>
    //         <Link to="/about">About</Link>
    //         <Link to="/types">Types of Lifts</Link>
    //         <Link to="/contact">Contact</Link>
    //       </div>
    //     </nav>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/types" element={<LiftTypes />} />
    //       <Route path="/contact" element={<Contact />} />
    //     </Routes>
    //   </div>
    // </Router>
    <div>
      <LoginPage/>
    </div>
  );
};

export default App;


