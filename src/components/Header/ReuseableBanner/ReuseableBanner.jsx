import React from 'react';
import { useLocation } from 'react-router-dom';

const ReuseableBanner = ({ title ,id}) => {
    const { pathname } = useLocation()
    return (
        <div className={`bg-primary-color  text-white  text-center py-8 ${pathname === `/product-details/${id}` && 'pb-40 md:pb-64'}`}>
            <div className='max-w-7xl mx-auto'>
                <h3 className='text-2xl md:text-3xl mt-4 mb-8'>{title}</h3>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br className='hidden md:flex' /> the coolest accessories, we have it all!</p>
            </div>
        </div>
    );
};

export default ReuseableBanner;