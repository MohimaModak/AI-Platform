import React, { useEffect } from 'react';
import './CTA.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CTA() {

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
    <div className="cta-container py-10 px-10 bg-gradient-to-tl from-black to-purple-950">
      <div data-aos="fade-up" className="cta-content border border-gray-600 rounded-xl text-center shadow-lg hover:scale-105 transition-transform bg-gray-300/10 backdrop-blur-sm p-8 md:p-10 lg:p-16">
        <h1 className="text-3xl font-bold  text-slate-100">Ready to Transform Your Workflow?</h1>
        <h2 className="text-2xl my-5 font-medium">Join the AI Revolution Today</h2>
        <p className="cta-paragraph">
          Don’t miss out on the opportunity to boost your productivity and creativity. Sign up now and experience the power of AI.
        </p>
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
}
