import React, { useEffect } from "react";
import image1 from "../../../Gallery/ImageGenerator.png"
import image2 from "../../../Gallery/Content Creation.png"
import image3 from "../../../Gallery/Code Correction.png"
import image4 from "../../../Gallery/Language Learning.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const features = [
    {
        image: image1,
        title: "Image Generation",
        description: "Turn your ideas into stunning visuals with just a few words. Perfect for designers and marketers.",
    },
    {
        image: image2,
        title: "Content Creation",
        description: "Write blogs, ads, and product descriptions in seconds. Save time and boost productivity.",
    },
    {
        image: image3,
        title: "Code Correction",
        description: "Fix errors in HTML, CSS, JavaScript, and more. Ideal for developers and learners.",
    },
    {
        image: image4,
        title: "Language Learning",
        description: "Master new programming languages with AI-guided lessons.",
    },
    {
        image: image2,
        title: "Image Generation",
        description: "Turn your ideas into stunning visuals with just a few words. Perfect for designers and marketers.",
    },
    {
        image: image1,
        title: "Content Creation",
        description: "Write blogs, ads, and product descriptions in seconds. Save time and boost productivity.",
    },
    {
        image: image3,
        title: "Code Correction",
        description: "Fix errors in HTML, CSS, JavaScript, and more. Ideal for developers and learners.",
    },
  
];

export default function Features() {

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
        <section id="/Features" className="bg-gradient-to-tl from-black to-purple-950 text-slate-100 py-16 px-6 md:px-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          <div className="mb-10 lg:mb-0">
            <h2 data-aos="fade-up" className="text-3xl font-bold text-center lg:text-left">What Our AI Can Do for You</h2>
            <p data-aos="fade-up" className="text-slate-100 text-center text-xl mt-4 lg:text-left">Create Stunning Images, Write Engaging Content, and Debug Code in Seconds</p>
            </div>  
                {features.map((feature, index) => (
                   <div
                   data-aos="fade-up"
                   key={index}
                   className="p-4 rounded-xl text-center shadow-lg hover:scale-105 transition-transform bg-white/10 backdrop-blur-sm"
                 >
                   <div className="flex justify-center items-center">
                     <img   src={feature.image} className="w-16 lg:w-24 pt-2" />
                   </div>
                   <h3   className="text-xl font-semibold my-2">{feature.title}</h3>
                   <p  className="text-sm font-medium px-2 pb-2">{feature.description}</p>
                 </div>
                 
                ))}
            </div>
        </section>
    );
}