import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const products = useLoaderData();
  //console.log(products);
    return (
        <div className=''>
            <h2 className='font-lobster text-6xl text-center my-10'>Products</h2>
            <div className='grid grid-cols-1 gap-10 mx-auto'>
                {
                    products.map(product => 
                    <Product
                        key={product._id} product={product}
                        
                    ></Product>
                    
                    )
                }
            </div>
           
        </div>
    );
};

export default Products;