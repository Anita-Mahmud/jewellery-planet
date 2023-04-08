import React from 'react';
import Nav from '../pages/shared/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';

const Main = () => {
    return (
        <div className='relative'>
            <Nav></Nav>
            <div className='max-w-[1440px] mx-auto'>
            <Outlet ></Outlet>
            </div>
           
            <Footer className='absolute bottom-0 left-0'></Footer>
        </div>
    );
};

export default Main;