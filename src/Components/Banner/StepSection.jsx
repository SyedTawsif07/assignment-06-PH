import React from 'react';
import user from '../../../assets/products/user.png'
import packagePng from '../../../assets/products/package.png'
import rocket from '../../../assets/products/rocket.png'

const StepSection = () => {
    return (
        <div>
            <div className='bg-[#F9FAFC] space-y-3 py-10 sm:py-12 md:py-15'>
                <div className='text-center space-y-3 px-4'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Get Started in 3 Steps</h1>
                    <p className='text-sm sm:text-base text-gray-500'>Start using premium digital tools in minutes, not hours.</p>
                </div>

                {/* cards */}
                <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto mt-8 sm:mt-10 mb-10 sm:mb-14 px-4 sm:px-6 lg:px-0'>

                    <li className="relative bg-white border border-gray-200 rounded-xl p-6 sm:p-8 h-[285px] flex flex-col items-center text-center shadow-sm">
                        <span className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-purple-600 text-white text-sm rounded-full">01</span>
                        <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                            <img src={user} alt="Create Account" className="w-12 h-12" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Create Account</h3>
                        <p className="text-sm text-gray-500 leading-5 max-w-[250px]">Sign up for free in seconds. No credit card required to get started.</p>
                    </li>

                    <li className="relative bg-white border border-gray-200 rounded-xl p-6 sm:p-8 h-[285px] flex flex-col items-center text-center shadow-sm">
                        <span className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-purple-600 text-white text-sm rounded-full">02</span>
                        <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                            <img src={packagePng} alt="Create Account" className="w-12 h-12" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Choose Products</h3>
                        <p className="text-sm text-gray-500 leading-5 max-w-[250px]">Browse our catalog and select the tools that fit your needs.</p>
                    </li>

                    <li className="relative bg-white border border-gray-200 rounded-xl p-6 sm:p-8 h-[285px] flex flex-col items-center text-center shadow-sm">
                        <span className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-purple-600 text-white text-sm rounded-full">03</span>
                        <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                            <img src={rocket} alt="Create Account" className="w-12 h-12" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Start Creating</h3>
                        <p className="text-sm text-gray-500 leading-5 max-w-[250px]">Download and start using your premium tools immediately.</p>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default StepSection;