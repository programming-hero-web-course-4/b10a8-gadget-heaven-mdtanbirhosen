
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

const NavBar = () => {
    const {pathname} = useLocation()
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/statistics'}>Statistics</NavLink></li>
        <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
    </>
    return (
        <div className="navbar max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content font-bold bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text-xl hidden sm:flex">Gadget Heaven</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold">
                    {links}
                </ul>
            </div>
            <div className="navbar-end text-xl gap-4">
                <div className={`relative hover:text-white  ${pathname ==='/'&& ' text-black'}`}>
                    <Link> <button className={`p-3 border rounded-full hover:bg-primary-color ${pathname ==='/'&& 'bg-white'}`}><BsCart3></BsCart3></button></Link>
                    <span className='absolute top-0 z-50 right-1 text-base p-[2px]'>0</span>
                </div>
                <div className={`relative hover:text-white  ${pathname ==='/'&& ' text-black'}`}>
                    <Link> <button className={`p-3 border rounded-full hover:bg-primary-color ${pathname ==='/'&& 'bg-white'}`}><FaRegHeart></FaRegHeart></button></Link>
                    <span className='absolute top-0 z-50 right-1 text-base p-[2px]'>0</span>
                </div>
                
            </div>
        </div>
    );
};

export default NavBar;