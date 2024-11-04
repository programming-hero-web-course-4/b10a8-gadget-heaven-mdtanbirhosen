import { SlEqualizer } from "react-icons/sl";
import { getCartProducts } from "../../localData/localData";
import ReuseableCard from "../../ReuseableCard/ReuseableCard";
const Cart = () => {
    const cartProducts =getCartProducts()
    return (
        <div className="max-w-7xl mx-auto mt-11 ">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-2xl">Cart</h3>
                <div className="flex items-center gap-6">
                    <div className="font-bold text-2xl">Total cost: 999.99</div>
                    <div>
                        <div><button className='flex items-center gap-4 font-semibold text-lg px-8 py-4 bg-white text-primary-color rounded-full  border-2 border-white hover:bg-primary-color hover:text-white'><span>Sort by Price</span> <SlEqualizer></SlEqualizer></button></div>
                    </div>
                    <button className="font-semibold text-lg">Purchase</button>
                </div>
            </div>
            {/* all added carts are here */}
            <div className="">
                {
                    cartProducts.map(product =><ReuseableCard key={product.product_id} product={product}></ReuseableCard>)
                }
            </div>
        </div>
    );
};

export default Cart;