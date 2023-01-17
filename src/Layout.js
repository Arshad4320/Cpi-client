import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './pages/Footer/Footer';
import Navbar from './pages/Nabvar/Navbar';


const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;