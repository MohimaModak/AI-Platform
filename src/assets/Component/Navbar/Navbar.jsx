import React, { useState } from 'react'
import logo from "../../../Gallery/logo.png"
import { Link } from "react-scroll";
import "./Navbar.css"

export default function Navbar() {

  const [toggle, setToggle] = useState(false);

  const toggleButton = () => {
    setToggle(!toggle);
  };

  return (
    <div className="fixed w-full text-slate-100  font-medium top-0 z-50">
      <div className='flex justify-between items-center  mx-2 mt-2 md:hidden sm:block'>
      <div className="md:hidden sm:block text-sm " onClick={toggleButton}>
        <div className='menu w-8 h-1 rounded-full my-1'></div>
        <div className='menu w-8 h-1 rounded-full my-1'></div>
        <div className='menu w-8 h-1 rounded-full my-1'></div>
      </div>
      <div className='flex items-center gap-1 md:hidden sm:block'>
        <img src={logo} className='w-10' />
        <h1 className='gradient-text text-center text-xl font-bold'>AI Platform</h1>
      </div>
      </div>
      <div className={`mobile-menu ${toggle ? "open" : ""}`}>
        <div className="navbar-links">
          <div>
            <div className='flex justify-center items-center'><img src={logo} className='w-24 mb-6' /></div>
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
                <div className='flex items-center gap-4'>
                  <img src={logo} className='w-16' />
                  <h1 className='gradient-text text-center text-4xl font-bold mr-[550px]'>AI Platform</h1>
                </div>
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
