import React from 'react';
import { addCartProduct, getCartProducts, removeCartProduct, removeWishlistProduct } from '../localData/localData';
import { useLocation } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ReuseableCard = ({ product, removedCart, removedWishlist }) => {
    const { pathname } = useLocation()
    const { product_title, product_image, price, description, product_id } = product;

    // handle add to cart button
    const handleAddToCart = product => {
        const previousProducts = getCartProducts()
        const isExist = previousProducts.find(p => p.product_id == product.product_id)
        if (!isExist) {
            addCartProduct(product)
            toast.success('added to product Cart')
        }
        else {
            toast.error('Already in Cart')
        }
    }
    // handle delete btn
    function handleRemoveCart(id) {
        removeCartProduct(id)
        removedCart(id)
    }
    const handleRemoveWishlist = (id) => {
        removeWishlistProduct(id)
        removedWishlist(id)

    }
    return (
        <div className='relative flex p-6 bg-white mb-6 rounded-2xl gap-6 flex-col md:flex-row '>
            <ToastContainer
                position='top-right'
                hideProgressBar
                autoClose={3000}
            ></ToastContainer>
            <div className='border w-fit rounded-2xl'>
                <img src={product_image}
                    className={` object-cover rounded-2xl ${pathname === '/dashboard' ? 'h-[124px] w-[200px]' : 'h-[200px] w-[274px]'}`}
                    alt="" />
            </div>
            <div>
                <div className='space-y-4'>
                    <h4 className='font-semibold text-2xl'>{product_title}</h4>
                    <p className='text-lg text-gray-500'>{description}</p>
                    <p className='font-semibold text-xl'>Price: $ {price}</p>
                    {pathname === '/dashboard/wishlist' && <button
                        onClick={() => handleAddToCart(product)}
                        className='px-6 py-3 border-2 border-primary-color rounded-full text-primary-color text-lg font-semibold hover:text-white hover:bg-primary-color'
                    >Add To Cart</button>}
                </div>
                <div className='absolute top-4 right-4'>
                    {pathname === '/dashboard' ?
                        <button onClick={() => handleRemoveCart(product_id)} className='p-2 border border-red-600 text-red-600 rounded-full '>
                            <IoMdClose></IoMdClose>
                        </button> :
                        <button onClick={() => handleRemoveWishlist(product_id)} className='p-2 border border-red-600 text-red-600 rounded-full '>
                            <IoMdClose></IoMdClose>
                        </button>}

                </div>
            </div>
        </div>
    );
};

export default ReuseableCard;