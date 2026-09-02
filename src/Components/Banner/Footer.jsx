import React from 'react';
import { CiYoutube } from 'react-icons/ci';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className='bg-[#101727] py-20'>
            <div className='text-white container mx-auto'>
                <div className='space-y-4 grid grid-cols-5 gap-5'>
                    <div className='space-y-4'>
                        <h2 className='text-[40px] font-extrabold'>DigiTools</h2>
                        <p>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>
                    <ul className='space-y-4'>
                        <li className='text-xl'>Product</li>
                        <li>Features </li>
                        <li>Pricing</li>
                        <li>Templates</li>
                        <li>Integrations</li>
                    </ul>
                    <ul className='space-y-4'>
                        <li className='text-xl'>Company</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Press</li>
                    </ul>
                    <ul className='space-y-4'>
                        <li className='text-xl'>Resources</li>
                        <li>Documentation</li>
                        <li>Help Center</li>
                        <li>Community</li>
                        <li>Contact</li>
                    </ul>
                    <ul className='space-y-4'>
                        <p className='text-xl'>Social Links</p>
                        <ul className='flex gap-2'>
                            <li className='bg-white p-1 rounded-full'><FontAwesomeIcon icon={faInstagram} className='text-[#101727]'></FontAwesomeIcon></li>
                            <li className='bg-white p-1 rounded-full'><FontAwesomeIcon icon={faFacebook} className='text-[#101727]'></FontAwesomeIcon></li>
                            <li className='bg-white p-1 rounded-full'><FontAwesomeIcon icon={faXTwitter} className='text-[#101727]'></FontAwesomeIcon></li>
                        </ul>
                    </ul>
                </div>
                <div className='flex justify-between mt-18 border-t-2 border-gray-500 pt-5 text-gray-500'>
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <ul className='flex justify-evenly gap-6'>
                        <li>Privacy Policy </li>
                        <li>Terms of Service</li>
                        <li>Cookies</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;