import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ReuseableBanner = ({ title, id }) => {
    const { pathname } = useLocation()
    return (
        <div className={`bg-primary-color  text-white  text-center py-8 ${pathname === `/product-details/${id}` && 'pb-40 md:pb-64'}`}>
            <div className='max-w-7xl mx-auto'>
                <h3 className='text-2xl md:text-3xl mt-4 mb-8'>{title}</h3>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br className='hidden md:flex' /> the coolest accessories, we have it all!</p>
                {(pathname === '/dashboard'
                    || pathname === '/dashboard/wishlist'
                ) && <div className='flex gap-4 justify-center items-center sm:flex-row flex-col'>
                        <Link to={'/dashboard'}>
                        <button 
                        className={`font-semibold text-lg px-14 py-[14px] rounded-full mt-5 border-2 border-white 
                            ${pathname === '/dashboard' ? 'bg-white text-primary-color': 'bg-primary-color text-white'}`}>
                            Cart
                        </button></Link>
                        <Link to={'/dashboard/wishlist'}><button className={`font-semibold text-lg px-14 py-[14px]  rounded-full mt-5 border-2 border-white   ${pathname === '/dashboard/wishlist' ? 'bg-white text-primary-color':'bg-primary-color text-white'}`}>Wishlist</button></Link>
                    </div>}
            </div>
        </div>
    );
};

export default ReuseableBanner;