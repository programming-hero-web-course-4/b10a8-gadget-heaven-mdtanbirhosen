
const getCartProducts = ()=>{
    const products = localStorage.getItem('cart');
    if(products){
        return JSON.parse(products)
    }
    else{
        return []
    }
}

const addCartProduct = (product)=>{
    const products = getCartProducts();
    const newProducts = [...products, product];
    localStorage.setItem('cart',JSON.stringify(newProducts))
}

// these are for wishlist
const getWishlistProducts = ()=>{
    const products = localStorage.getItem('wishlist');
    if(products){
        return JSON.parse(products)
    }
    else{
        return []
    }
}

const addWishlistProduct = (product)=>{
    const products = getWishlistProducts();
    const newProducts = [...products, product];
    localStorage.setItem('wishlist',JSON.stringify(newProducts))
}

export {addCartProduct, addWishlistProduct, getCartProducts,getWishlistProducts}