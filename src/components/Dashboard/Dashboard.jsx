import React from 'react';
import ReuseableBanner from '../Header/ReuseableBanner/ReuseableBanner';
import { Outlet, useLocation } from 'react-router-dom';

const Dashboard = () => {
    const { pathname } = useLocation();
    return (
        <div>
            <div>
                
                <ReuseableBanner title={'Dashboard'}></ReuseableBanner>
            </div>
            <div>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;