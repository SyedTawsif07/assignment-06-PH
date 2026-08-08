import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
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
                    <button className='hover:cursor-pointer'>
                        <FaShoppingCart></FaShoppingCart>
                    </button>
                    <button className='btn'>Login</button>
                    <button className='btn border-none btn-primary rounded-3xl bg-linear-to-r from-[#4F39F6] to-purple-600'>Get started</button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;