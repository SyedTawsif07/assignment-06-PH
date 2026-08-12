import React, { Profiler, useState } from 'react';
import { MdDone } from 'react-icons/md';
import writing from '../../../assets/products/writing.png';

const Products = ({ product }) => {
    console.log(product);
    const [btn, setBtn] = useState('buynow');
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-sm h-full">
                <div className="card-body">
                    <div>
                        <img src={writing} alt="" />
                    </div>
                    <span className="badge badge-xs badge-warning text-[14px] absolute top-4 right-4 bg-[#FEF3C6] text-[#BB4D00] p-3 rounded-3xl">Best Seller</span>
                    <div className='space-y-4 text-start'>
                        <h2 className='text-2xl font-bold my-5'>{product.name}</h2>
                        <p className='text-gray-500 text-[16px]'>{product.description}</p>
                        <p className="text-xl"><span className='font-bold text-2xl'>${product.price}</span>/mo</p>
                        <ul>
                            {
                                product.features.map(data => (<li className="flex items-center gap-2 text-gray-500">
                                    <MdDone className="text-green-500"></MdDone>
                                    <span>{data}</span>
                                </li>))
                            }
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