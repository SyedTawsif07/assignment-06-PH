import React from 'react';
import banner from '../../../assets/products/banner.png'

const Banner = () => {
    return (
        <div>
            <div className="space-y-4 my-15">
                <div className="container mx-auto px-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-12">

                    {/* Left Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Supercharge Your
                            <span className="inline-block">
                                Digital Workflow
                            </span>
                        </h1>

                        <p className="mt-6 text-lg text-gray-500 leading-8">
                            Access premium AI tools, design assets, templates, and productivity
                            <span className="inline-block">software—all in one place. Start creating faster today.</span><br />
                            Explore Products
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="py-5 px-8 btn rounded-3xl border-0 bg-linear-to-r from-[#4F39F6] to-purple-600 text-white">
                                Explore Products
                            </button>

                            <button className="py-5 px-8 btn btn-outline btn-primary rounded-3xl bg-linear-to-r from-[#4F39F6] to-purple-600 bg-clip-text text-transparent">
                                Watch Demo
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="lg:w-1/2 flex justify-center">
                        <img
                            src={banner}
                            alt="Banner"
                            className="w-full max-w-lg object-contain"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;