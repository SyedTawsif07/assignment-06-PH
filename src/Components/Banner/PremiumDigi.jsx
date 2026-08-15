import React, { use, useState } from 'react';
import Products from '../UI/Products';
import Card from '../UI/Card';
import AvailalableProducts from './AvailalableProducts';

const PremiumDigi = ({ promiseFetchProducts }) => {
    const productData = use(promiseFetchProducts);
    const [active, setActive] = useState("products");
    const [cart, setCart] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    return (
        <div>
            <div className='container mx-auto text-center space-y-3 my-13'>
                <h1 className='text-4xl font-bold'>Premium Digital Tools</h1>
                <p className='text-gray-500'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div className='flex items-center border border-gray-200 rounded-full max-w-fit mx-auto justify-center my-5'>
                    <button
                        onClick={() => setActive('products')}
                        className={`btn border-0 rounded-3xl ${active === "products" ? 'bg-linear-to-r from-[#4F39F6] to-purple-600 text-white' : 'btn'}`}>Products</button>
                    <button
                        onClick={() => setActive('cart')}
                        className={`btn border-0 rounded-3xl ${active === "cart" ? 'bg-linear-to-r from-[#4F39F6] to-purple-600 text-white' : 'btn'}`}>Cart({selectedProducts.length})</button>
                </div>
                {
                    active === "products" ?
                        <AvailalableProducts
                            productData={productData}
                            selectedProducts={selectedProducts}
                            setSelectedProducts={setSelectedProducts}
                        ></AvailalableProducts> :
                        <Card
                            productData={productData}
                            selectedProducts={selectedProducts}
                            setSelectedProducts={setSelectedProducts}
                        ></Card>
                }
            </div>
        </div>
    );
};

export default PremiumDigi;