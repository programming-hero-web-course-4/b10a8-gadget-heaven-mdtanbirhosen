import { useEffect, useState } from "react";
import { NavLink, Outlet, useLoaderData, useLocation } from "react-router-dom";

const Home = () => {
    const { pathname } = useLocation();

    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="max-w-7xl mx-auto mt-[230px] md:mt-[400px] lg:mt-[600px] mb-24 px-3">
            
            <h1 className="text-center font-bold text-4xl mb-7">Explore Cutting-Edge Gadgets</h1>
            <div className="grid md:grid-cols-6 gap-6">
                <div className="  md:col-span-2 lg:col-span-1 bg-white rounded-2xl flex  flex-col p-6 gap-6 h-max">
                    <NavLink to={'/'}><button className={`rounded-full pl-6 w-full py-3 bg-[#f2f2f3] text-left ${pathname === '/' && 'text-white bg-primary-color font-semibold'}`}>All Product</button></NavLink>

                    {
                        categories.map((category) => <NavLink
                            key={category.id}
                            to={`/categories/${category.category}`}>
                            <button
                                className={`rounded-full w-full text-left pl-6 py-3 bg-[#f2f2f3] ${pathname === `/categories/${category.category}` && 'text-white bg-primary-color font-semibold'}`}>
                                {category.category}
                            </button>
                        </NavLink>)
                    }

                </div>
                <div className="md:col-span-4 lg:col-span-5">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Home;