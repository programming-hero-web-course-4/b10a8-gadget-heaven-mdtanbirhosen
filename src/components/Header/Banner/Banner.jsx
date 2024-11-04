import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import bannerImg from '../../../assets/banner.jpg'

const Banner = () => {
    const { pathname } = useLocation();
    return (
        <div className='relative mx-2 lg:mx-0 '>
            <div className='bg-primary-color text-white mt-2 md:m-5 lg:m-7 rounded-2xl pb-40 md:pb-64'>
                <div><NavBar></NavBar></div>
                <div className='text-center pt-4'>
                    <h1 className='font-bold text-2xl md:text-[35px] md:leading-[35px] lg:text-[50px] lg:leading-[50px]'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                    <p className='mt-6 mb-8'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br className='hidden sm:flex' /> the coolest accessories, we have it all!</p>
                    <Link to={'/dashboard'}><button className='font-bold text-xl px-8 py-4 bg-white text-primary-color rounded-full mt-5 border-2 border-white hover:bg-primary-color hover:text-white'>Shop Now</button></Link>

                </div>
            </div>
            <div 
            className='max-w-6xl p-2 md:p-4  lg:p-6 bg-[#ffffff70] border-2 border-white rounded-2xl absolute left-0 right-0 top-[480px] md:top-[420px] mx-auto'>
                <img src={bannerImg} className='rounded-2xl' alt="" />
            </div>
        </div>

    );
};

export default Banner;