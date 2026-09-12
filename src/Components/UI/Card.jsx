import React, { use } from 'react';
import { toast } from 'react-toastify';

const Card = ({ productData, selectedProducts, setSelectedProducts }) => {

    const handleDltBtn = (product) => {
        console.log(selectedProducts);
        const filteredProducts = selectedProducts.filter(selectedProduct => selectedProduct.id != product.id);
        console.log(filteredProducts);
        setSelectedProducts(filteredProducts);
    }
    const total = selectedProducts.reduce((sum, product) => {
        return sum + product.price;
    }, 0);

    const handleProceed = () => {
        setSelectedProducts([]);

        if(selectedProducts.length === 0){
            toast.error("This section is already empty");
        }
        else{
            toast.success("Proceed successful")
        }
    }

    return (
        <div>
            <div className='space-y-5 border-2 border-gray-300 rounded-3xl p-7'>
                <h2 className='text-start text-2xl font-semibold'>Your Cart</h2>
                {
                    selectedProducts.length === 0 ? <div className='space-y-3 text-center'>
                        <h2 className='text-3xl font-bold'>No Product is selected</h2>
                        <p className='text-2xl font-semibold'>Select product to add in cart.</p>
                    </div> :
                        selectedProducts.map((product, ind) => {
                            return (
                                <div key={ind}>
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
                                        <button onClick={() => handleDltBtn(product)} className='btn text-red-500 font-semibold'>Remove</button>
                                    </div>
                                </div>
                            )
                        })
                }

                <div className='flex justify-between my-5 container mx-auto'>
                    <p>Total:</p>
                    <p className='font-bold text-2xl'>${total}</p>
                </div>
                <button onClick={() => handleProceed()} className='btn rounded-full w-full bg-gradient-to-r from-[#4F39F6] to-purple-600 text-white'>Proceed to Checkout</button>
            </div>



        </div>
    );
};

export default Card;