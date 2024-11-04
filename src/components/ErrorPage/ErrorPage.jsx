import React from 'react';
import { BiCommentError } from "react-icons/bi";
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center h-screen w-screen bg-primary-color text-white'>
            <div>
                <div className='text-8xl '>
                    <BiCommentError></BiCommentError>
                </div>
                <h2 className='text-9xl mb-4 font-bold'>Oops!</h2>
                <p className='italic text-lg font-medium mb-2'>Something's Wrong...</p>
                <p className='italic text-lg font-medium'>This page is not found.</p>
                <Link to={'/'}><button className='font-medium text-xl px-5 py-3 bg-white text-primary-color rounded-xl mt-5 border-2 border-white hover:bg-primary-color hover:text-white'>Go to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;