import { SlEqualizer } from "react-icons/sl";
import { clearCart, getCartProducts } from "../../localData/localData";
import ReuseableCard from "../../ReuseableCard/ReuseableCard";
import { useEffect, useState } from "react";
import verified from '../../../assets/Group.png';
import { useNavigate } from "react-router-dom";
const Cart = () => {
    const [cartProducts, setCartProducts] = useState(getCartProducts())
    const [cartTotalPrice, setCartTotalPrice] = useState(0)

    const removedCart = (id) => {
        const remaining = [...cartProducts].filter(product => product.product_id !== id)
        setCartProducts(remaining)
    }

    useEffect(() => {
        const total = cartProducts.reduce((accumulator, product) => accumulator + product.price, 0);
        setCartTotalPrice(total);
    }, [cartProducts]);


    const handleSortBtn = () => {
        const sortedProducts = [...cartProducts].sort((a, b) => b.price - a.price)
        setCartProducts(sortedProducts)
    }

    const navigate = useNavigate()
    const handleClose = () => {
        navigate('/')
        clearCart()
    }



    return (
        <div className="max-w-7xl mx-auto mt-11 px-3">
            <div className="flex items-center flex-col md:flex-row gap-6 mb-6">
                <div className="flex justify-between items-center w-full">
                    <h3 className="font-bold text-2xl">Cart</h3>
                    <div className="font-bold text-2xl">Total cost:{cartTotalPrice.toFixed(2)}</div>
                </div>
                <div className="flex items-center flex-col sm:flex-row gap-6">
                    <button
                        onClick={handleSortBtn}
                        className='w-60 flex items-center gap-4 font-semibold text-lg px-8 py-4 bg-white text-primary-color rounded-full  border-2 border-white hover:bg-primary-color hover:text-white'><span>Sort by Price</span> <SlEqualizer></SlEqualizer></button>

                    <button
                        onClick={() => document.getElementById('my_modal_1').showModal()}
                        className="font-semibold text-lg py-3 px-6 bg-primary-color rounded-full text-white">Purchase</button>
                </div>
            </div>
            {/* all added carts are here */}
            <div className="">
                {
                    cartProducts.map(product => <ReuseableCard
                        removedCart={removedCart}
                        key={product.product_id}
                        product={product}></ReuseableCard>)
                }
            </div>

            {/* modal price button starts*/}
            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box flex flex-col items-center">
                    <img src={verified} className="h-16 " alt="" />
                    <h3 className="font-bold text-2xl my-6">Payment Successfully</h3>
                    <p className="font-semibold text-gray-600 ">Thanks for purchasing.</p>
                    <p className=" font-semibold text-gray-600 mt-3">Total :{cartTotalPrice.toFixed(2)}</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button
                                onClick={handleClose}
                                className=" bg-[#E7E7E7] w-full font-semibold py-2 px-20 rounded-full">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
            {/* modal price button ends*/}

        </div>
    );
};

export default Cart;