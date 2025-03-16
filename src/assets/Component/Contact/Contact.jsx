import React, { useEffect } from 'react';
import CustomerSupport from "../../../Gallery/CustomerSupport.png";
import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-out',
      once: true,
      delay: 100,
    });
    AOS.refresh();
  }, []);


  return (
    <div className="bg-gradient-to-bl from-black to-purple-950 py-20 px-10">
      <div className="flex justify-center items-center">
        <div className="lg:flex justify-center items-center lg:gap-10">
          <div className="w-full lg:w-1/2">
            <div data-aos="fade-up" className="flex justify-center items-center">
              <img src={CustomerSupport} className="w-full lg:w-[700px]" alt="Customer Support" />
            </div>
          </div>


          <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
            <h1 data-aos="fade-up" className="text-3xl lg:text-4xl font-bold mb-4 text-slate-100">Have Questions? We’re Here to Help</h1>
            <h2 data-aos="fade-up" className="cta-subheading text-slate-100">Reach Out to Our Support Team</h2>
            <form data-aos="fade-up" className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="rounded-xl text-center shadow-lg hover:scale-105 transition-transform bg-white/10 backdrop-blur-sm w-full"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="rounded-xl text-center shadow-lg hover:scale-105 transition-transform bg-white/10 backdrop-blur-sm w-full"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="rounded-xl text-center shadow-lg hover:scale-105 transition-transform bg-white/10 backdrop-blur-sm w-full"
                  required
                ></textarea>
              </div>
              <button type="submit" className="cta-button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
