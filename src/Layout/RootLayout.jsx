import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar';

const RootLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;