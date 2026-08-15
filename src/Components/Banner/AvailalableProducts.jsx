import React, { use } from 'react';
import Products from '../UI/Products';

const AvailalableProducts = ({ productData, selectedProducts, setSelectedProducts }) => {
    return (
        <div>
            <div className='space-y-3 grid grid-cols-3 gap-4 max-w-[1200px] mx-auto'>
                {
                    productData.map((product, index) =>
                        <Products
                            key={index}
                            product={product}
                            selectedProducts={selectedProducts}
                            setSelectedProducts={setSelectedProducts}
                        ></Products>)
                }
            </div>
        </div>
    );
};

export default AvailalableProducts;