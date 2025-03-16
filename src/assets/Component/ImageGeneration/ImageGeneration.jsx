import React, { useEffect } from "react";
import image1 from "../../../Gallery/Generatornew1.jpg";
import image2 from "../../../Gallery/Generator2.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ImageGeneration() {

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
    <div id="/ImageGeneration" className="relative h-full bg-gradient-to-bl from-black to-purple-950 py-16 px-10">
      <div className="flex justify-center items-center">
        <div className="">
          <div className="text-center text-white mt-16">
            <h2 data-aos="fade-up" className="text-3xl lg:text-4xl font-bold mb-4 text-slate-100">Create beautiful art with Artificial Intelligence</h2>
            <p data-aos="fade-up" className="mt-4 text-lg">Discover the best AI-powered tools to enhance your creative ideas.</p>

            {/* Search Box */}
            <div data-aos="fade-up" className="mt-6 flex justify-center">
              <input type="text" placeholder="Enter your idea..." className="p-3 lg:w-96 rounded-l-full text-black" />
              <button className="bg-purple-950 text-white px-6 rounded-r-full">Generate</button>
            </div>
          </div>

          <div>
            <div className="lg:flex justify-center items-center gap-5 mt-16">
              <div data-aos="fade-up" className="flex justify-center items-center"><img src={image1} className="w-96 lg:w-full rounded-lg mb-10 lg:mb-0" /></div>
              <div data-aos="fade-up" className="flex justify-center items-center"><img src={image2} className="w-96 lg:w-full rounded-lg" /></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
