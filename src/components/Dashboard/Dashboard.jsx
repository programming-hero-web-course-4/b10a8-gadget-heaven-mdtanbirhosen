import React from 'react';
import ReuseableBanner from '../Header/ReuseableBanner/ReuseableBanner';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
    const {pathname} = useLocation();
    return (
        <div>
            <ReuseableBanner title={'Dashboard'}></ReuseableBanner>
        </div>
    );
};

export default Dashboard;