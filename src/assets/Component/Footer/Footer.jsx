import React from 'react';
import { Link } from 'react-scroll'; // Assuming you're using react-scroll for smooth scrolling
import facebook from "../../../Gallery/fb.png";
import instagram from "../../../Gallery/instagram.png";
import linkedin from "../../../Gallery/linkedin.png";
import twitter from "../../../Gallery/twitter.png";
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="ft text-white py-12">
      <div className="container mx-auto px-6">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4 gradient-text cursor-default">AI Platform</h2>
            <p className="text-gray-400">
              Empowering creativity and productivity with AI-powered tools.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" smooth={true} duration={1000} className="text-gray-400 hover:text-white transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/ImageGeneration" smooth={true} duration={1000} className="text-gray-400 hover:text-white transition duration-300">
                  Generator
                </Link>
              </li>
              <li>
                <Link to="/Features" smooth={true} duration={1000} className="text-gray-400 hover:text-white transition duration-300">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/Benefits" smooth={true} duration={1000} className="text-gray-400 hover:text-white transition duration-300">
                  Benefits
                </Link>
              </li>
              <li>
                <Link to="/Testimonials" smooth={true} duration={1000} className="text-gray-400 hover:text-white transition duration-300">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/Pricing" smooth={true} duration={1000} className="text-gray-400 hover:text-white transition duration-300">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Email: support@aiplatform.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 123 AI Street, Tech City</li>
            </ul>
          </div>

          {/* Social Media Links with Images */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition duration-300">
                <img src={facebook} alt="Facebook" className="h-8 w-8" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition duration-300">
                <img src={twitter} alt="Twitter" className="h-8 w-8" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition duration-300">
                <img src={linkedin} alt="LinkedIn" className="h-8 w-8" />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition duration-300">
                <img src={instagram} alt="Instagram" className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} AI Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}