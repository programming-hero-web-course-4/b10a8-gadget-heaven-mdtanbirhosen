import { NavLink, Outlet, useLoaderData } from "react-router-dom";

const Home = () => {
    const categories = useLoaderData()
    console.log(categories)
    return (
        <div className="max-w-7xl mx-auto relative mb-24">
            <h1 className="text-center font-bold text-4xl relative -top-12">Explore Cutting-Edge Gadgets</h1>
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-1 bg-white rounded-2xl flex  flex-col p-6 gap-6">
                    <NavLink to={'/'}><button className="rounded-full pl-6 w-full py-3 bg-[#f2f2f3] text-left">All Product</button></NavLink>
                    {
                        categories.map((category )=><NavLink key={category.id} to={`/categories/${category.category}`}><button className="rounded-full w-full text-left pl-6 py-3 bg-[#f2f2f3] ">{category.category}</button></NavLink>)
                    }
                </div>
                <div className="col-span-5">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Home;