import React from 'react';
import { useLoaderData, } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    
    const products = useLoaderData();
    return (
        <div>
            <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    products.map(product=><Product key={product.product_id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;