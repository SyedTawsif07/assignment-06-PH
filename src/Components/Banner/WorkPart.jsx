import React from 'react';

const WorkPart = () => {
    return (
        <div>
            <div className='space-y-3 text-center bg-linear-to-r from-[#4F39F6] to-purple-600 py-20 text-white'>
                <h2 className='font-extrabold text-[40px]'>Ready to Transform Your Workflow?</h2>
                <p className='py-4'>Join thousands of professionals who are already using Digitools to work smarter.<br /> Start your free trial today.</p>
                <div className='space-x-3'>
                    <button className="btn rounded-full bg-white border-0">
                        <span className="bg-linear-to-r from-[#4F39F6] to-purple-600 bg-clip-text text-transparent">
                            Explore Products
                        </span>
                    </button>
                    <button className='btn btn-primary btn-outline text-white border-white rounded-full hover:text-black hover:bg-white'>View Pricing</button>
                </div>
                <p>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default WorkPart;