import React, { useState } from 'react';
import { getWishlistProducts } from '../../localData/localData';
import ReuseableCard from '../../ReuseableCard/ReuseableCard';

const Wishlist = () => {
    const [wishlistProducts, setWishlistProduct] = useState(getWishlistProducts())
    // const wishlistProducts = getWishlistProducts()
    const removedWishlist=(id)=> {
        const remaining = [...wishlistProducts].filter(product => product.product_id !==id)
        setWishlistProduct(remaining)
    }
    return (
        <div className="max-w-7xl mx-auto mt-11 px-3">
            <div className="flex items-center  mb-6">
                <h3 className="font-bold text-2xl">WishList</h3>
            </div>
            <div>
                {
                    wishlistProducts.map(product => <ReuseableCard
                        removedWishlist={removedWishlist}
                        key={product.product_id} 
                         product={product}></ReuseableCard>)
                }

            </div>
        </div >
    );
};

export default Wishlist;