import React from 'react';
import { Outlet } from 'react-router-dom';
import Navabar from '../componenets/Navabar';

const MainLayout = () => {
    return (
        <div>
            <Navabar></Navabar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;