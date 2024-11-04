import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { useLocation } from 'react-router-dom';
import NavBar from './components/Header/NavBar/NavBar';
import Banner from './components/Header/Banner/Banner';

const Root = () => {
    const { pathname } = useLocation();
    return (
        <div className='sora-font bg-[#F6F6F6]'>
            {((pathname === `/product-details/`)
                || pathname === '/statistics'
                || pathname === '/dashboard'
                || pathname === '/component'

            ) || <Banner></Banner>}
            {/* {pathname === categoryLink() && <Banner></Banner>} */}

            {(pathname === '/product-details'
                || pathname === '/statistics'
                || pathname === '/dashboard'
                || pathname === '/component'
            ) && <NavBar></NavBar>}
            <div className='min-h-[calc(100vh-492px)] '>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;