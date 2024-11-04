import React from 'react';

const Footer = () => {
    return (
        <div className='bg-white py-24'>
            <div className='max-w-7xl  mx-auto text-center'>
                <h1 className='font-bold text-3xl'>Gadget Heaven</h1>
                <p className='font-medium text-gray-500'>Leading the way in cutting-edge technology and innovation.</p>
                <div className="divider"></div>
                <div className='flex justify-evenly sm:flex-row flex-col gap-6'>
                    <div>
                        <h3 className='font-semibold text-xl'>Services</h3>
                        <ul className='text-gray-500'>
                            <li>Product Support</li>
                            <li>Order Tracking</li>
                            <li>Shipping & Delivery</li>
                            <li>Returns</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-semibold text-xl'>Company</h3>
                        <ul className='text-gray-500'>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-semibold text-xl'>Legal</h3>
                        <ul className='text-gray-500'>
                            <li>Terms of Service</li>
                            <li>Privacy Policy</li>
                            <li>Cookie Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;