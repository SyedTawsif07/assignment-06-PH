import React, { use } from 'react';
import Products from '../UI/Products';

const AvailalableProducts = ({ promiseFetchProducts }) => {
    const products = use(promiseFetchProducts);

    return (
        <div>
            <div className='space-y-3 grid grid-cols-3 gap-4 max-w-[1200px] mx-auto'>
                {
                    products.map(product => <Products product={product}></Products>)
                }
            </div>
        </div>
    );
};

export default AvailalableProducts;