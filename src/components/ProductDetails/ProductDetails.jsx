
import ReuseableBanner from '../Header/ReuseableBanner/ReuseableBanner';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import NavBar from '../Header/NavBar/NavBar';
import Footer from '../Footer/Footer';
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";


import ReactStars from "react-rating-stars-component";



const ProductDetails = () => {
    const allProducts = useLoaderData();
    const { id } = useParams()
    const product = allProducts.find(product => product.product_id === id)
    const { product_id, product_title, product_image, category, price, rating, availability, Specification, description, } = product


    // react stars
    const roundedRating = Math.round(rating)
    const ratingChanged = (newRating) => {
    };
    return (
        <div className='bg-[#F6F6F6] sora-font'>
            <NavBar></NavBar>
            <div className='relative'>
                <ReuseableBanner
                    id={id}
                    title={'Product Details'}></ReuseableBanner>
                <div
                    className='max-w-6xl p-2 md:p-4  lg:p-6 bg-[#ffffff70] border-2 border-white rounded-2xl absolute left-0 right-0 top-[230px] md:top-[200px] mx-auto'>
                    <div className="hero bg-white rounded-xl">
                        <div className="hero-content flex-col lg:flex-row gap-6 md:gap-8" >
                            <img
                                src={product_image}
                                className="max-w-sm rounded-lg shadow-2xl w-full h-full" />
                            <div>
                                <h1 className="font-semibold text-3xl">{product_title}</h1>
                                <p className="font-semibold text-xl">Price: ${price} </p>
                                <div className={`font-semibold text-sm px-4 py-2 border border-green-600 rounded-full w-fit text-green-600 bg-green-100`}>{availability ? 'In Stock' : 'Out of Stock'}</div>
                                <p className='text-lg text-gray-500'>{description}</p>
                                <div>
                                    <h4 className='font-bold text-lg mb-3'>Specification</h4>
                                    <ol className='list-decimal pl-3 text-gray-500 text-lg'>
                                        {
                                            Specification.map((spec, index) => <li key={index}>{spec}</li>)
                                        }
                                    </ol>
                                </div>
                                {/* ratings are here */}
                                <div className='flex gap-4'>
                                    <div>
                                        <ReactStars
                                            count={5}
                                            onChange={ratingChanged}
                                            size={24}
                                            activeColor="#ffd700"
                                            value={roundedRating}
                                        />
                                    </div>
                                    <div className='px-4 py-2 rounded-full bg-[#F6F6F6] w-fit font-semibold text-sm'>{rating}</div>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <div className={`relative hover:text-white  `}>
                                        <Link> <button className={`px-6 py-3 border rounded-full flex gap-2 items-center font-bold text-lg bg-primary-color text-white`}> <span>Add To Cart</span><BsCart3></BsCart3></button></Link>
                                        
                                    </div>
                                    <div className={`relative hover:text-white `}>
                                        <Link> <button className={`p-3 text-lg border rounded-full hover:bg-primary-color `}><FaRegHeart></FaRegHeart></button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[700px] lg:h-[400px]'></div>
            <div className='min-h-[calc(100vh-800px)]'>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductDetails;