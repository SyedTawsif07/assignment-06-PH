import React from 'react';

const StatSection = () => {
    return (
        <div>
            <div className='py-8 my-5 grid grid-cols-3 gap-10 text-[#FFFFFF] bg-linear-to-r from-[#4F39F6] to-purple-600'>
                <div className='text-center space-y-3'>
                    <h1 className='text-5xl font-bold'>50K+</h1>
                    <p className='text-2xl text-center'>Active Users</p>
                </div>
                <div className='text-center space-y-3 border-l border-r border-gray-[#FFFFFF]'>
                    <h1 className='text-5xl font-bold'>200++</h1>
                    <p className='text-2xl text-center'>Premium Tools</p>
                </div>
                <div className='text-center space-y-3'>
                    <h1 className='text-5xl font-bold'>4.9</h1>
                    <p className='text-2xl text-center'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default StatSection;