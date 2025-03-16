import React, { useEffect } from 'react'
import check from "../../../Gallery/check.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Pricing() {

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
            <section id='/Pricing' className="py-28 px-5 bg-gradient-to-bl from-black to-purple-950 text-slate-100">
                <div data-aos="fade-up">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 data-aos="fade-up" className="text-3xl font-bold">
                            Choose the Perfect Plan for Your Investment Goals
                        </h2>
                        <p data-aos="fade-up" className="mt-4 text-xl text-gray-100">
                            Select a plan that aligns with your financial aspirations.
                        </p>
                    </div>

                    <div data-aos="fade-up" className="mt-12 max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
                        {/* Basic Plan */}
                        <div data-aos="fade-up" className="bg-gradient-to-bl from-black to-purple-950 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 text-center text-slate-100 border-gray-600 border">
                            <h3 className="text-2xl font-semibold text-slate-100">Basic Plan</h3>
                            <p className="text-slate-100 font-medium mt-3">Perfect for new investors starting their journey.</p>
                            <div className="mt-4 text-3xl font-bold text-slate-100">$29 / month</div>
                            <ul className="mt-6 text-left space-y-3 text-slate-100">
                                <li className='flex items-center gap-3 font-medium'><span><img src={check} className='w-5' /></span> <span>Basic Investment Strategies</span></li>
                                <li className='flex items-center gap-3 font-medium'><span><img src={check} className='w-5' /></span> <span>Access to Standard Assets</span></li>
                                <li className='flex items-center gap-3 font-medium'><span><img src={check} className='w-5' /></span> <span>24/7 Customer Support</span></li>
                            </ul>
                            <button className="mt-6 px-4 py-2.5 rounded-xl text-center shadow-lg hover:scale-105 transition-transform bg-white/10 backdrop-blur-sm border border-slate-400">
                                Get Started
                            </button>
                        </div>

                        {/* Premium Plan */}
                        <div data-aos="fade-up" className="bg-gradient-to-bl from-black to-purple-950 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 text-center text-slate-100 border-gray-600 border">
                            <h3 className="text-2xl font-semibold">Premium Plan</h3>
                            <p className="text-slate-100 font-medium mt-3">Access advanced strategies and personalized advice.</p>
                            <div className="mt-4 text-3xl font-bold text-slate-100">$99 / month</div>
                            <ul className="mt-6 text-left space-y-3">
                                <li className='flex items-center gap-3 font-medium'><span><img src={check} className='w-5' /></span> <span>Basic Investment Strategies</span></li>
                                <li className='flex items-center gap-3 font-medium'><span><img src={check} className='w-5' /></span> <span>Access to Standard Assets</span></li>
                                <li className='flex items-center gap-3 font-medium'><span><img src={check} className='w-5' /></span> <span>24/7 Customer Support</span></li>
                            </ul>
                            <button className="mt-6 px-4 py-2.5 rounded-xl text-center shadow-lg hover:scale-105 transition-transform bg-white/10 backdrop-blur-sm border border-slate-400">
                                Get Started
                            </button>
                        </div>

                        {/* Elite Plan */}
                        <div data-aos="fade-up" className="bg-gradient-to-bl from-black to-purple-950 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 text-center text-slate-100 border-gray-600 border">
                            <h3 className="text-2xl font-semibold text-slate-100">Elite Plan</h3>
                            <p className="text-slate-100 font-medium mt-3">Tailored for high-net-worth individuals seeking.</p>
                            <div className="mt-4 text-3xl font-bold text-slate-100">$199 / month</div>
                            <ul className="mt-6 text-left space-y-3 text-slate-100">
                                <li className='flex items-center gap-3 font-medium'><span><img src={check} className='w-5' /></span> <span>Basic Investment Strategies</span></li>
                                <li className='flex items-center gap-3 font-medium'><span><img src={check} className='w-5' /></span> <span>Access to Standard Assets</span></li>
                                <li className='flex items-center gap-3 font-medium'><span><img src={check} className='w-5' /></span> <span>24/7 Customer Support</span></li>
                            </ul>
                            <button className="mt-6 px-4 py-2.5 rounded-xl text-center shadow-lg hover:scale-105 transition-transform bg-white/10 backdrop-blur-sm border border-slate-400">
                                Get Started
                            </button>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <button data-aos="fade-up" href="/" className="mt-6 inline-block cta-button">
                            Find Your Ideal Plan
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

