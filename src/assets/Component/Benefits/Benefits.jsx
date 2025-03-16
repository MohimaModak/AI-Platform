import React, { useEffect } from "react";
import image1 from "../../../Gallery/Time-Saving.png"
import image2 from "../../../Gallery/Cost-Effective.png"
import image3 from "../../../Gallery/Versatile.png"
import image4 from "../../../Gallery/user.png"
import "./Benefits.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const benefits = [
    {
        title: "Time-Saving",
        description: "Automate repetitive tasks and focus on what matters.",
        image: image1,
    },
    {
        title: "Cost-Effective",
        description: "Reduce expenses on hiring multiple professionals.",
        image: image2,
    },
    {
        title: "Versatile",
        description: "Use AI for images, content, code, and learning.",
        image: image3,
    },
    {
        title: "User-Friendly",
        description: "No technical skills required.",
        image: image4,
    },
];

export default function Benefits() {

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
        <section id="/Benefits" className="bg-gradient-to-tl from-black to-purple-950  py-16 px-10 relative">
            <div>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 data-aos="fade-up" className="text-3xl font-bold text-slate-100">Why Choose Our AI Platform?</h2>
                    <p data-aos="fade-up" className="text-lg font-medium mt-2 text-slate-100">Revolutionize Your Workflow with AI</p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <div
                        data-aos="fade-up"
                            key={index}
                            className=" text-center shadow-lg hover:scale-105 transition-transform bg-white/10 backdrop-blur-sm  p-6 rounded-2xl hover:shadow-2xl"
                        >
                            <div className="flex justify-center">
                                <img
                                    src={benefit.image}
                                    alt={benefit.title}
                                    className="w-24 h-24 object-cover rounded-full shadow-md border-2 border-dashed border-slate-50 p-0.5 animate-float"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-100 mt-4">{benefit.title}</h3>
                            <p className="text-gray-100 mt-2 font-medium px-2">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
