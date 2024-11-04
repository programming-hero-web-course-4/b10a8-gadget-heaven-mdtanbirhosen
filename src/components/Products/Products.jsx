import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Products = () => {
    const {category} = useParams();
    const products = useLoaderData();
    console.log(products)
    console.log(category)
    return (
        <div>
            <h1>products : </h1>
        </div>
    );
};

export default Products;