import React from 'react';

import { Link } from 'react-router-dom';
const Category = ({category}) => {
    const {cat_name,image}=category;
    return (
        <div className='mt-10'>
            <div className="card bg-base-100 shadow-xl image-full h-96">
                <figure><img src={image} alt={cat_name} className='w-full brightness-90'/></figure>
                <div className="card-body flex  justify-center items-center">
                <Link to={`/category/${cat_name}`}>
                    <h2 className="card-title text-4xl font-bold text-white">{cat_name}</h2></Link>
                   
                    
                </div>
            </div>
        </div>
    );
};

export default Category;