import React from 'react';
import { Outlet } from 'react-router-dom';
import Navabar from '../componenets/Navabar';
import Footer from '../componenets/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navabar></Navabar>
            <div className='h-screen'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;