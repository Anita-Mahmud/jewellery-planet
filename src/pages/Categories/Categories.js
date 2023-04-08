import React from 'react';
import Category from './Category';
import { useLoaderData } from 'react-router-dom';

const Categories = () => {
const categories = useLoaderData();
    
console.log(categories);
    return (
        <div className='mb-10'>
            <h2 className='font-lobster text-6xl italic text-center'>Categories</h2>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {categories.map(category=><Category
            key={category._id}
            category={category}
            ></Category>)}
           </div>
        </div>
    );
};

export default Categories;