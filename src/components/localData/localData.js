
const getCartProducts = () => {
    const products = localStorage.getItem('cart');
    if (products) {
        return JSON.parse(products)
    }
    else {
        return []
    }
}

const removeCartProduct = (id) => {
    const products = getCartProducts();
    const remainingProducts = [...products].filter(p=>p.product_id !== id)
    localStorage.setItem('cart', JSON.stringify(remainingProducts))
}

const addCartProduct = (product) => {
    const products = getCartProducts();
    const newProducts = [...products, product];
    localStorage.setItem('cart', JSON.stringify(newProducts))
}

const clearCart = ()=>{
    localStorage.setItem('cart', [])
}

// these are for wishlist
const getWishlistProducts = () => {
    const products = localStorage.getItem('wishlist');
    if (products) {
        return JSON.parse(products)
    }
    else {
        return []
    }
}

const removeWishlistProduct = (id) => {
    console.log('hello')
    const products = getWishlistProducts();
    const remainingProducts = [...products].filter(p=>p.product_id !== id)
    localStorage.setItem('wishlist', JSON.stringify(remainingProducts))
}

const addWishlistProduct = (product) => {
    const products = getWishlistProducts();
    const newProducts = [...products, product];
    localStorage.setItem('wishlist', JSON.stringify(newProducts))
}

export { addCartProduct, addWishlistProduct, getCartProducts, getWishlistProducts , removeCartProduct, removeWishlistProduct, clearCart}