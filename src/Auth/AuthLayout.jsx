import React from 'react';
import { Outlet } from 'react-router';
import LastNav from '../Navbar/LastNav';

const AuthLayout = () => {
    return (
        <div className='container mx-auto lg:px-40 px-4'>
            
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;