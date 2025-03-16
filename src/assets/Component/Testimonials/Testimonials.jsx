import React, { useEffect } from 'react';
import image1 from "../../../Gallery/client1.jpeg"
import image2 from "../../../Gallery/client2.webp"
import image3 from "../../../Gallery/client3.jpeg"
import "./Testimonials.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Testimonials() {

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
    <section id='/Testimonials' className="testimonials-section py-16 px-5 bg-gradient-to-tl from-black to-purple-950">
      <div className="container mx-auto text-center">
        <h2 data-aos="fade-up" className="text-3xl font-semibold m-4 text-slate-100">What Our Users Say</h2>
        <p data-aos="fade-up" className="text-xl font-medium text-gray-100 mb-8 mt-2">Join Thousands of Satisfied Users</p>

        <div className="testimonials-slider">
          <div data-aos="fade-up" className="testimonial-item bg-gradient-to-bl from-black to-purple-950">
            <div className="testimonial-image shadow-xl p-2 rounded-md  bg-gradient-to-bl from-slate-950 to-purple-950">
              <img  src={image1} alt="John" className="rounded-full" />
            </div>
            <blockquote className="text-lg font-semibold mt-4 mb-4">"This AI has transformed my workflow. I can now create blogs in minutes!"</blockquote>
            <p className="text-sm font-medium text-gray-100">John, Content Creator</p>
          </div>

          <div data-aos="fade-up" className="testimonial-item bg-gradient-to-bl from-black to-purple-950">
            <div className="testimonial-image shadow-xl p-2 rounded-md  bg-gradient-to-bl from-slate-950 to-purple-950">
              <img src={image2} alt="Sarah" className="rounded-full" />
            </div>
            <blockquote className="text-lg font-semibold mt-4 mb-4">"The code correction feature is a lifesaver. Highly recommended!"</blockquote>
            <p className="text-sm font-medium text-gray-100">Sarah, Developer</p>
          </div>

          <div data-aos="fade-up" className="testimonial-item bg-gradient-to-bl from-black to-purple-950">
            <div className="testimonial-image shadow-xl p-2 rounded-md  bg-gradient-to-bl from-slate-950 to-purple-950">
              <img src={image3} alt="Mike" className="rounded-full" />
            </div>
            <blockquote className="text-lg font-semibold mt-4 mb-4">"My students love the AI-guided lessons. It’s a game-changer!"</blockquote>
            <p className="text-sm font-medium text-gray-100">Mike, Educator</p>
          </div>
          <div data-aos="fade-up" className="testimonial-item bg-gradient-to-bl from-black to-purple-950">
            <div className="testimonial-image shadow-xl p-2 rounded-md  bg-gradient-to-bl from-slate-950 to-purple-950">
              <img src={image1} alt="John" className="rounded-full" />
            </div>
            <blockquote className="text-lg font-semibold mt-4 mb-4">"This AI has transformed my workflow. I can now create blogs in minutes!"</blockquote>
            <p className="text-sm font-medium text-gray-100">John, Content Creator</p>
          </div>

          <div data-aos="fade-up" className="testimonial-item bg-gradient-to-bl from-black to-purple-950">
            <div className="testimonial-image shadow-xl p-2 rounded-md  bg-gradient-to-bl from-slate-950 to-purple-950">
              <img src={image2} alt="Sarah" className="rounded-full" />
            </div>
            <blockquote className="text-lg font-semibold mt-4 mb-4">"The code correction feature is a lifesaver. Highly recommended!"</blockquote>
            <p className="text-sm font-medium text-gray-100">Sarah, Developer</p>
          </div>

          <div data-aos="fade-up" className="testimonial-item bg-gradient-to-bl from-black to-purple-950">
            <div className="testimonial-image shadow-xl p-2 rounded-md  bg-gradient-to-bl from-slate-950 to-purple-950">
              <img src={image3} alt="Mike" className="rounded-full" />
            </div>
            <blockquote className="text-lg font-semibold mt-4 mb-4">"My students love the AI-guided lessons. It’s a game-changer!"</blockquote>
            <p className="text-sm font-medium text-gray-100">Mike, Educator</p>
          </div>
          <div data-aos="fade-up" className="testimonial-item bg-gradient-to-bl from-black to-purple-950">
            <div className="testimonial-image shadow-xl p-2 rounded-md  bg-gradient-to-bl from-slate-950 to-purple-950">
              <img src={image1} alt="John" className="rounded-full" />
            </div>
            <blockquote className="text-lg font-semibold mt-4 mb-4">"This AI has transformed my workflow. I can now create blogs in minutes!"</blockquote>
            <p className="text-sm font-medium text-gray-100">John, Content Creator</p>
          </div>

          <div data-aos="fade-up" className="testimonial-item bg-gradient-to-bl from-black to-purple-950">
            <div className="testimonial-image shadow-xl p-2 rounded-md  bg-gradient-to-bl from-slate-950 to-purple-950">
              <img src={image2} alt="Sarah" className="rounded-full" />
            </div>
            <blockquote className="text-lg font-semibold mt-4 mb-4">"The code correction feature is a lifesaver. Highly recommended!"</blockquote>
            <p className="text-sm font-medium text-gray-100">Sarah, Developer</p>
          </div>

          <div data-aos="fade-up" className="testimonial-item bg-gradient-to-bl from-black to-purple-950">
            <div className="testimonial-image shadow-xl p-2 rounded-md  bg-gradient-to-bl from-slate-950 to-purple-950">
              <img src={image3} alt="Mike" className="rounded-full" />
            </div>
            <blockquote className="text-lg font-semibold mt-4 mb-4">"My students love the AI-guided lessons. It’s a game-changer!"</blockquote>
            <p className="text-sm font-medium text-gray-100">Mike, Educator</p>
          </div>
        </div>
      </div>
    </section>
  );
}

