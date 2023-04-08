import React from 'react';
import diamond from '../../../images/slider/diamond.avif'
import gold from '../../../images/slider/goldjewelleryistock_d.webp'
import platinum from '../../../images/slider/Platinum-Rings.jpg'
import silver from '../../../images/slider/silver.jpg'
import fullset from '../../../images/slider/fullset.webp'
import bracelet from '../../../images/slider/bracelet.jpeg'
import neck from '../../../images/slider/neck.webp'
const Gallery = () => {
    return (
        <div className='my-20'>
        <h2 className='font-lobster text-6xl italic text-center mb-8'>Latest Products</h2>
        <div class="grid grid-cols-3 gap-2">
  <div class="">
    <img src={diamond} alt='diamond' className='w-full h-96'></img>
  </div>
  <div class="">
  <img src={gold} alt='gold' className='w-full h-96'></img>
  </div>
  <div class="">
  <img src={platinum} alt='platinum' className='w-full h-96'></img>
  </div>
  <div class="col-span-2 ">
  <img src={silver} alt='silver' className='w-full h-96'></img>
  </div>
  <div class="">
  <img src={fullset} alt='fullset' className='w-full h-96'></img>
  </div>
  <div class="">
  <img src={neck} alt='neck'  className='w-full h-96'></img>
  </div>
  <div class="col-span-1">
  <img src={bracelet} alt='bracelet' className='w-full h-96'></img>
  </div>
</div>
    </div>
    );
};

export default Gallery;