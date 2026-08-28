import React, { useState } from 'react';
import { use } from 'react';
import { MdDone } from 'react-icons/md';

const TransparentPricing = ({ fetchPromise }) => {
    const datas = use(fetchPromise);
    const [btn, setBtn] = useState('get-started')
    console.log(datas);
    return (
        <div>
            <div className='p-5 sm:p-8 md:p-12 lg:p-20'>

                <div className='text-center my-8 sm:my-10 md:my-13 space-y-3 sm:space-y-4 px-2'>
                    <h1 className='font-extrabold text-3xl sm:text-4xl md:text-5xl'>
                        Simple, Transparent Pricing
                    </h1>
                    <p className='text-sm sm:text-base text-gray-500'>
                        Choose the plan that fits your needs. Upgrade or downgrade anytime.
                    </p>
                </div>

                <div className="container mx-auto gap-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

                    {datas.map(data => (
                        <div className={`w-full max-w-[400px] mx-auto card shadow-sm ${data.tag === "Most Popular" ? "text-white bg-gradient-to-r from-[#4F39F6] to-purple-600" : "bg-[#F9FAFC] text-gray-800"}`}>

                            <div className="card-body relative">

                                {
                                    data.tag === "Most Popular" ?
                                        <p className='absolute -top-3 right-39 bg-[#FEF3C6] text-[#BB4D00] text-[12px] py-1 px-2 rounded-full'>
                                            {data.tag}
                                        </p> : ""
                                }

                                <h2 className="text-2xl font-bold">
                                    {data.name}
                                </h2>

                                <p>{data.description}</p>

                                <div>
                                    <span className='text-3xl sm:text-4xl font-bold'>{data.price}</span>
                                    <span className='text-lg sm:text-xl'>/{data.period}</span>
                                </div>

                                <ul className="flex flex-col gap-1 text-xs">
                                    {data.features.map(feature => (
                                        <li className="flex items-center gap-2">
                                            <MdDone className="text-green-500"></MdDone>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-6">
                                    <button className={`btn rounded-full w-full ${data.tag === "Most Popular" ? 'bg-white text-[#4F39F6]' : 'bg-gradient-to-r from-[#4F39F6] to-purple-600 text-white'}`}>
                                        {
                                            data.buttonText === "Get Started" ? "Get Started" : data.buttonText === "Start Pro Trial" ? "Start Pro Trial" : "Contact Sales"
                                        }
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))
                    }

                </div>
            </div>
        </div>
    );
};

export default TransparentPricing;