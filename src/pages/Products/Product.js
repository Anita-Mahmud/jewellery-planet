import React from 'react';

const Product = ({product}) => {
    return (
        <div>
          <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={product.image} alt="Movie" className='w-96 h-96'/></figure>
  <div className="card-body">
    <h2 className="card-title">{product.name}</h2>
    <p>{product.price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Book Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Product;