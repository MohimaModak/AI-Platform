import React, { useEffect } from "react";
import image1 from "../../../Gallery/Prompt.png"
import image2 from "../../../Gallery/Processing.png"
import image3 from "../../../Gallery/result.png"
import "./HowWorks.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HowWorks() {

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
        <section className="bg-gradient-to-bl from-black to-purple-950 py-16 px-5">
            <div></div>
            <div className="max-w-4xl mx-auto text-center">
                {/* Heading & Subheading */}
                <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold HowWorks">How Our AI Works</h2>
                <p data-aos="fade-up" className="text-lg text-slate-100 font-medium mt-3">Simple, Fast, and Effective</p>
            </div>

            {/* Timeline Steps */}
            <div className="relative mt-12 max-w-3xl mx-auto">
                <div className="absolute w-1 bg-purple-500 h-full left-1/2 transform -translate-x-1/2"></div>

                {/* Step 1 */}
                <div className="flex items-center mb-12">
                    <div data-aos="fade-up" className="w-1/2 pr-8 text-right">
                        <h3 data-aos="fade-up" className="text-xl lg:text-2xl font-semibold HowWorks">Input Your Prompt</h3>
                        <p data-aos="fade-up" className="text-slate-100 font-medium mt-3">Describe what you need in simple words.</p>
                    </div>
                    <div className="w-1/2 flex justify-center relative">
                        <img
                        data-aos="fade-up"
                            src={image1}
                            alt="Input Prompt"
                            className="w-28 lg:w-44 px-2"
                        />
                    </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-center mb-12 flex-row-reverse">
                    <div data-aos="fade-up" className="w-1/2 pl-8 text-left">
                        <h3 data-aos="fade-up" className="text-xl lg:text-2xl font-semibold HowWorks">AI Processes Your Request</h3>
                        <p data-aos="fade-up" className="text-slate-100 font-medium mt-3">Our AI analyzes and generates the output.</p>
                    </div>
                    <div className="w-1/2 flex justify-center relative">
                        <img
                        data-aos="fade-up"
                            src={image2}
                            alt="AI Processing"
                            className="w-28 lg:w-44 px-2"
                        />
                    </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-center">
                    <div data-aos="fade-up" className="w-1/2 pr-8 text-right">
                        <h3 data-aos="fade-up" className="text-xl lg:text-2xl font-semibold HowWorks">Receive Your Results</h3>
                        <p data-aos="fade-up" className="text-slate-100 font-medium mt-3">Get high-quality images, content, or code in seconds.</p>
                    </div>
                    <div className="w-1/2 flex justify-center relative">
                        <img 
                        data-aos="fade-up"
                            src={image3}
                            alt="Receive Results"
                            className="w-28 lg:w-44 px-2"
                        />
                    </div>
                </div>
            </div>

            {/* Call-to-Action Button */}
            <div data-aos="fade-up" className="text-center mt-12">
                <button className="how-button">
                    Try It Now
                </button>
            </div>
        </section>
    );
}
