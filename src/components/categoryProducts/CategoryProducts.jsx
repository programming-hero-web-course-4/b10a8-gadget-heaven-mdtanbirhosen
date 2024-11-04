
import { useLoaderData, useParams } from 'react-router-dom';
import Product from '../Product/Product';

const CategoryProducts = () => {
    const products = useLoaderData();
    const { category } = useParams();
    const categoryWiseData = [...products].filter(product =>product.category === category)
    
    return (
        <div>
            <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    categoryWiseData.map(product => <Product key={product.product_id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default CategoryProducts;