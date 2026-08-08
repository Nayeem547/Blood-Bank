import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Home/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';


const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <p>Hello</p>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout; 