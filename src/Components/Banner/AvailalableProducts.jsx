import React, { use } from 'react';
import Products from '../UI/Products';

const AvailalableProducts = ({ productData, selectedProducts, setSelectedProducts }) => {
    return (
        <div>
            <div className='w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6'>

                {
                    productData.map((product, index) =>
                        <Products
                            key={index}
                            product={product}
                            selectedProducts={selectedProducts}
                            setSelectedProducts={setSelectedProducts}
                        ></Products>
                    )
                }

            </div>
        </div>
    );
};

export default AvailalableProducts;