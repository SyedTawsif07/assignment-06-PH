import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ selectedProducts }) => {
    return (
        <header>
            <nav className='flex justify-around items-center p-5 border-b border-gray-200'>
                <div className='text-3xl font-bold bg-linear-to-r from-[#4F39F6] to-purple-600 bg-clip-text text-transparent'>DigiTools</div>
                <ul className='flex gap-7 font-semibold'>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Features</a></li>
                    <li><a href="/">Pricing</a></li>
                    <li><a href="/">Testimonials</a></li>
                    <li><a href="/">FAQ</a></li>
                </ul>
                <div className='flex items-center gap-5'>
                    <div className='relative'>
                        <button>
                            <FaShoppingCart></FaShoppingCart>
                        </button>
                        <span className='absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold rounded-full min-w-5 h-5 flex items-center justify-center px-1'>{selectedProducts.length}</span>
                    </div>
                    <button className='btn'>Login</button>
                    <button className='btn border-none btn-primary rounded-3xl bg-linear-to-r from-[#4F39F6] to-purple-600'>Get started</button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;