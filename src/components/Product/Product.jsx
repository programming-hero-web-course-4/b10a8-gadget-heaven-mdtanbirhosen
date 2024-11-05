import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { product_image, product_title, price , product_id} = product;

    return (
        <div className="card bg-white  transition-transform transform hover:scale-105  duration-300">
            <figure className="px-5  pt-5">
                <img
                    src={product_image}
                    alt={`${product_title}'image`}
                    className="rounded-xl border-2 p-3 h-44 w-full object-cover" />
            </figure>
            <div className="card-body p-5  text-left">
                <h2 className="card-title text-2xl font-semibold">{product_title}</h2>
                <p className='text-xl font-semibold'>Price: ${price}K</p>
                <div className="card-actions">
                    <Link to={`/product-details/${product_id}`}>
                        <button
                            className="px-5 py-3 text-lg font-semibold rounded-full border border-primary-color text-primary-color hover:text-white hover:bg-primary-color">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;