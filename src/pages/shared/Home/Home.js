import React from 'react';
import Slider from './Slider';
import Categories from '../../Categories/Categories';
import Gallery from './Gallery';
import Review from './Review';


const Home = () => {
    return (
        <div>
            <Slider></Slider>
          
          <Categories></Categories>
         <Gallery></Gallery>
         <Review></Review>
        </div>
    );
};

export default Home;