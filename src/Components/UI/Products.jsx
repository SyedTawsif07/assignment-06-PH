import React, { Profiler, useState } from 'react';
import { MdDone } from 'react-icons/md';
import writing from '../../../assets/products/writing.png';

const Products = ({product}) => {
    console.log(product);
    const [btn, setBtn] = useState('buynow');
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-sm">
                <div className="card-body">
                    <div>
                        <img src={writing} alt="" />
                    </div>
                    <span className="badge badge-xs badge-warning text-[14px] absolute top-4 right-4 bg-[#FEF3C6] text-[#BB4D00] p-3 rounded-3xl">Best Seller</span>
                    <div className='space-y-4 text-start'>
                        <h2 className='text-2xl font-bold my-5'>AI Writing Pro</h2>
                        <p className='text-gray-500 text-[16px]'>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                        <p className="text-xl"><span className='font-bold text-2xl'>$29</span>/mo</p>
                        <ul>
                            <li className="flex items-center gap-2">
                                <MdDone className="text-green-500"></MdDone>
                                <span>Unlimited AI generations</span>
                            </li>

                            <li className="flex items-center gap-2">
                                <MdDone className="text-green-500"></MdDone>
                                <span>50+ writing templates</span>
                            </li>

                            <li className="flex items-center gap-2">
                                <MdDone className="text-green-500"></MdDone>
                                <span>Grammar checker</span>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-6">
                        <button
                            onClick={() => setBtn('done')}
                            className={`btn w-full rounded-3xl ${btn === 'buynow' ? 'bg-linear-to-r from-[#4F39F6] to-purple-600 text-white' : 'bg-green-600 text-white'}`}>
                            {btn === 'buynow' ? 'Buy Now' : 'Card selected'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;