import React from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';


const MainLayout = () => {
    return (
        <div className='w-[98%] mx-auto'>
            <div >
                <Toaster />
                <header>
                    <Navbar />
                </header>
                <div>
                    <Outlet />
                </div>
                <footer>
                    <Footer />
                </footer>


            </div>
        </div>
    );
};

export default MainLayout;