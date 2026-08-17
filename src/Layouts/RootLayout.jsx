import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Pages/Home/Home/Footer';
import Navbar from '../Pages/Home/Home/Navbar';

const RootLayout = () => {
    return (
        <div className="flex flex-col min-h-screen"> 
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};



export default RootLayout;