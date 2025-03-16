import React, { useEffect } from 'react';
import brain from "../../../Gallery/HeroBrain.png"
import "./Home.css"
import Features from '../Features/Features';
import HowWorks from '../HowWorks/HowWorks';
import Benefits from '../Benefits/Benefits';
import UseCases from '../UseCases/UseCases';
import Testimonials from '../Testimonials/Testimonials';
import Pricing from '../Pricing/Pricing';
import ImageGeneration from '../ImageGeneration/ImageGeneration';
import CTA from '../CTA/CTA';
import Contact from '../Contact/Contact';
import Proof from '../Proof/Proof';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

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
            <div id='/' className='relative bg-gradient-to-bl from-black to-purple-950 py-16 '>
                <div className='relative pt-10'>
                    <div className='flex justify-center items-center opacity-5'>
                        <img data-aos="fade-up" src={brain} className='floating-image' />
                    </div>
                </div>
                <div className='absolute flex justify-center items-center inset-0 text-center '>
                    <div data-aos="fade-up">
                        <h1 class="gradient-text px-2 text-4xl md:text-3xl lg:text-7xl font-semibold">Unleash the Power of AI</h1>
                        <div className='flex justify-center items-center'>
                            <h1 className=' md:text-2xl lg:text-3xl text-slate-200 font-medium px-5 lg:w-2/3 my-5 lg:my-10'>Create Stunning Images, Write Engaging Content, and Debug Code in Seconds</h1>
                        </div>

                        <button className='btn border text-white px-2 lg:px-4 py-1.5 lg:py-2.5 rounded-md font-medium  lg:text-xl bg-purple-600'>Get Started Now</button>
                    </div>
                </div>
            </div>
            <div>
                <Proof></Proof>
                <ImageGeneration></ImageGeneration>
                <Features></Features>
                <HowWorks></HowWorks>
                <Benefits></Benefits>
                <UseCases></UseCases>
                <Testimonials></Testimonials>
                <Pricing></Pricing>
                <CTA></CTA>
                <Contact></Contact>
            </div>
        </div>
    );
}