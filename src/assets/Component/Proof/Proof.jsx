import React, { useEffect } from 'react'
import windows from "../../../Gallery/windows.png";
import Versatile from "../../../Gallery/Versatile.png";
import social from "../../../Gallery/social.png";
import ibm from "../../../Gallery/ibm.png";
import google from "../../../Gallery/google.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Proof() {

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
        <div>
            <div className="text-center py-20 px-10 bg-gradient-to-tl from-black to-purple-950">
                <h2 data-aos="fade-up" className="text-3xl lg:text-4xl font-bold mb-4 text-slate-100">Trusted by Leading Brands</h2>
                <p data-aos="fade-up" className="text-xl text-gray-100 mt-3">Join the Community of Innovators</p>
                <div className='flex justify-center items-center mt-16'>
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16 lg:gap-20'>
                    <span data-aos="fade-up" className='flex justify-center items-center'><img src={windows} className='w-20' /></span>
                    <span data-aos="fade-up" className='flex justify-center items-center'><img src={Versatile} className='w-20' /></span>
                    <span data-aos="fade-up" className='flex justify-center items-center'><img src={social} className='w-20' /></span>
                    <span data-aos="fade-up" className='flex justify-center items-center'><img src={ibm} className='w-20' /></span>
                    <span data-aos="fade-up" className='flex justify-center items-center'><img src={google} className='w-20' /></span>
                </div>
                </div>
            </div>


        </div>
    )
}
