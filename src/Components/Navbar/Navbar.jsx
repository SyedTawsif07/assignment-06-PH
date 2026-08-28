import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ selectedProducts }) => {
    return (
        <header>
            <nav className='flex flex-col sm:flex-row justify-around items-center p-4 sm:p-5 border-b border-gray-200 gap-4 sm:gap-0'>

                <div className='text-2xl sm:text-3xl font-bold bg-linear-to-r from-[#4F39F6] to-purple-600 bg-clip-text text-transparent'>
                    DigiTools
                </div>

                <ul className='flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-7 font-semibold text-sm sm:text-base'>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Features</a></li>
                    <li><a href="/">Pricing</a></li>
                    <li><a href="/">Testimonials</a></li>
                    <li><a href="/">FAQ</a></li>
                </ul>

                <div className='flex items-center gap-3 sm:gap-5'>
                    <div className='relative'>
                        <button className='cursor-pointer'>
                            <FaShoppingCart></FaShoppingCart>
                        </button>

                        <span className='absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold rounded-full min-w-5 h-5 flex items-center justify-center px-1'>
                            {selectedProducts.length}
                        </span>
                    </div>

                    <button className='btn'>Login</button>

                    <button className='btn border-none btn-primary rounded-3xl bg-linear-to-r from-[#4F39F6] to-purple-600'>
                        Get started
                    </button>
                </div>

            </nav>
        </header>
    );
};

export default Navbar;