import React, { useState } from 'react'
import menu from "../../../Gallery/menu.png"
import { Link } from "react-scroll";
import "./Navbar.css"

export default function Navbar() {

  const [toggle, setToggle] = useState(false);

  const toggleButton = () => {
    setToggle(!toggle);
  };

  return (
    <div className="fixed w-full text-slate-100  font-medium top-0 z-50">
      {/* Mobile Navbar */}
      <div className="md:hidden sm:block text-sm" onClick={toggleButton}>
        <span className="cursor-pointer p-5 shadow-2xl shadow-white"><img src={menu} className="w-10" alt="menu" /></span>
      </div>
      <div className={`mobile-menu ${toggle ? "open" : ""}`}>
        <div className="navbar-links">
          <div>
            <h1 className='gradient-text text-center text-3xl font-bold'>AI Platform</h1>
          </div>
          <Link to="/" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Home
          </Link>
          <Link to="/ImageGeneration" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Generator
          </Link>
          <Link to="/Features" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Features
          </Link>
          <Link to="/Benefits" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Benefits
          </Link>
          <Link to="/Testimonials" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Testimonials
          </Link>
          <Link to="/Pricing" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Price
          </Link>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="flex justify-center items-center nav">
        <div className="hidden md:block">
          <nav className="navbar flex justify-center items-center">
            <div className="navbar-links lg:flex justify-center items-center">
            <div>
            <h1 className='gradient-text text-center text-4xl font-bold mr-[550px]'>AI Platform</h1>
          </div>
              <Link to="/" smooth={true} duration={1000} className="text-xl mr-10">
                Home
              </Link>
              <Link to="/ImageGeneration" smooth={true} duration={1000} className="text-xl mr-10">
                Generator
              </Link>
              <Link to="/Features" smooth={true} duration={1000} className="text-xl mr-10">
                Features
              </Link>
              <Link to="/Benefits" smooth={true} duration={1000} className="text-xl mr-10">
                Benefits
              </Link>
              <Link to="/Testimonials" smooth={true} duration={1000} className="text-xl mr-10">
                Testimonials
              </Link>
              <Link to="/Pricing" smooth={true} duration={1000} className="text-xl mr-10">
                Price
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}
