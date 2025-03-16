import React, { useEffect } from "react";
import image1 from "../../../Gallery/1.jpg"
import image2 from "../../../Gallery/2.jpg"
import image3 from "../../../Gallery/3.jpg"
import image4 from "../../../Gallery/4.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';

const useCases = [
    {
        title: "Content Creators",
        description: "Generate blogs, ads, and social media posts instantly.",
        image: image1,
    },
    {
        title: "Developers",
        description: "Debug and optimize code with AI assistance.",
        image: image2,
    },
    {
        title: "Educators",
        description: "Create learning materials and teach programming languages.",
        image: image3,
    },
    {
        title: "Marketers",
        description: "Design visuals and write compelling ad copies.",
        image: image4,
    },
];

export default function UseCases() {

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
        <section className="py-16 px-5 bg-gradient-to-bl from-black to-purple-950">
            <div className="text-center mb-12">
                <h2 data-aos="fade-up" className="text-3xl font-bold text-slate-100">Who Can Benefit from Our AI?</h2>
                <p data-aos="fade-up" className="text-lg text-slate-100 font-medium mt-2">AI for Everyone, Everywhere</p>
            </div>

            {/* Masonry Grid Layout */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {useCases.map((useCase, index) => (
                    <div
                    data-aos="fade-up"
                        key={index}
                        className="bg-white shadow-lg rounded-2xl overflow-hidden relative transition-transform hover:scale-105 hover:shadow-2xl"
                    >
                        <div className="relative group">
                            {/* Image */}
                            <img
                                src={useCase.image}
                                alt={useCase.title}
                                className="w-full h-64 object-cover"
                            />
                            {/* Hover Text Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div> <h3 className="text-xl font-semibold text-slate-100 text-center">{useCase.title}</h3>
                                    <p className="text-slate-100 text-lg text-center px-4">{useCase.description}</p></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
