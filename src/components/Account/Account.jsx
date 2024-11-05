import React from 'react';
import ReuseableBanner from '../Header/ReuseableBanner/ReuseableBanner';
import { Outlet } from 'react-router-dom';

const Account = () => {
    return (
        <div>
            <ReuseableBanner title={'Account'}></ReuseableBanner>
            <div className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Account;