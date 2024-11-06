import React from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import ReuseableBanner from '../Header/ReuseableBanner/ReuseableBanner';
import { useLoaderData } from 'react-router-dom';



const Statistics = () => {
    const products = useLoaderData()

    return (
        <div>
            <ReuseableBanner title={'Statistics'} />

            <div className='max-w-7xl h-[500px] mx-auto my-14'>
                <ResponsiveContainer>
                    <ComposedChart
                        data={products}
                        margin={{ top: 20, right: 20, bottom: 20, left: 20, }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="product_title" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="price" fill="#BF87EE" stroke="#EFE1FB" />
                        <Bar dataKey="price" barSize={30} fill="#9538E2" />
                        <Line type="monotone" dataKey="rating" stroke="#FF0000" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;
