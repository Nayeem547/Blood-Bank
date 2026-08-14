import React from 'react';
import { Outlet } from 'react-router';
// import Footer from '../Pages/Shared/Footer/Footer';
// import Header from '../Pages/Home/Header';
import Footer from '../Pages/Home/Home/Footer';
import Navbar from '../Pages/Home/Home/Navbar';

const RootLayout = () => {
    return (
        <div> 
            {/* <Header></Header> */}
            <Navbar></Navbar>
            {/* <p>Hello</p> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout; 