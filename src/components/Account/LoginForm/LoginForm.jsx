import React from 'react';

const LoginForm = () => {
    const handleSubmitBtn = (e)=>{
        e.preventDefault()
    }
    return (
        <div className='w-full flex items-center justify-center py-12 '>
            <div className='lg:w-1/3 '>
                <h2 className='font-bold text-3xl text-center '>Login</h2>
                <form action="" onSubmit={handleSubmitBtn} className='flex flex-col'>
                    <label htmlFor="email"  className=''> Email </label>
                    <br />
                    <input type="email" id="email" name="email" placeholder='Enter email' className='pl-5 py-2 rounded-lg ' required />
                    <br />
                    <label htmlFor="password" >Password </label>
                    <br />
                    <input type="password" id="password" name="password" placeholder='Password' className='pl-5 py-2 rounded-lg mb-5' required />
                    <br />
                    <button type="submit"  className='font-semibold text-lg  px-14 border-2 border-primary-color text-primary-color rounded-full py-2 hover:bg-primary-color hover:text-white bg-white'>Login</button>
                </form>
                <div className="divider"></div>
                <div className=' flex flex-col'>
                    <p className=' link-hover mb-3'>Don't have an Account?</p>
                    <button type="submit" className='font-semibold text-lg  px-14 border-2 border-primary-color text-primary-color rounded-full py-2 hover:bg-primary-color hover:text-white bg-white'>Register Now</button>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;