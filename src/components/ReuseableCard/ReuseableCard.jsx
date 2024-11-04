import React from 'react';
import { addCartProduct, getCartProducts } from '../localData/localData';
import { useLocation } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
const ReuseableCard = ({product}) => {
    const { pathname } = useLocation()
    const {product_title, product_image, price, description} = product;
    console.log(product)
    // handle add to cart button
    const handleAddToCart = product => {
        const previousProducts = getCartProducts()
        const isExist = previousProducts.find(p => p.product_id == product.product_id)
        if (!isExist) {
            addCartProduct(product)
        }
        else {
            alert('already exist')
        }
    }


    return (
        <div className='relative flex p-6 bg-white mb-6 rounded-2xl gap-6'>
            <div className='border rounded-2xl'>
                <img src={product_image} 
                className='h-[124px] rounded-2xl'
                alt="" />
            </div>
            <div className='space-y-4'>
                <h4 className='font-semibold text-2xl'>{product_title}</h4>
                <p className='text-lg text-gray-500'>{description}</p>
                <p className='font-semibold text-xl'>Price: $ {price}</p>
                {pathname === '/dashboard/wishlist' && <button onClick={() => handleAddToCart(product)}>Add To Cart</button>}
            </div>
            <div className='absolute top-7 right-7'>
                <button className='p-2 border border-red-600 text-red-600 rounded-full '>
                    <IoMdClose></IoMdClose>
                </button>
            </div>
        </div>
    );
};

export default ReuseableCard;