import React, { use } from 'react';

const Card = ({ productData, selectedProducts, setSelectedProducts }) => {
    console.log(productData);
    return (
        <div>
            <div className='space-y-5 border-2 border-gray-300 rounded-3xl p-7'>
                <h2 className='text-start text-2xl font-semibold'>Your Cart</h2>
                {
                    selectedProducts.length === 0 ? <div className='space-y-3 text-center'>
                        <h2 className='text-3xl font-bold'>No Product is selected</h2>
                        <p className='text-2xl font-semibold'>Select product to add in cart.</p>
                    </div> : selectedProducts.map(product => {
                        return (
                            <div>
                                <div className='flex justify-between bg-[#F9FAFC] gap-6 items-center rounded-2xl p-8'>
                                    <div className='flex items-center gap-6'>
                                        <img src={
                                            product.image === "resume" ? "/assets/products/portfolio.png" :
                                                product.image === "automation" ? "/assets/products/operation.png" :
                                                    product.image === "social" ? "/assets/products/social-media.png" :
                                                        product.image === "stock" ? "/assets/products/design-tool.png" : "/assets/products/writing.png"} alt="" />
                                        <div className='text-start'>
                                            <h2 className='flex items-center gap-2 font-bold'>{product.name}</h2>
                                            <p className='text-gray-500'>{product.price}</p>
                                        </div>
                                    </div>

                                    <button className='btn'>Remove</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>



        </div>
    );
};

export default Card;