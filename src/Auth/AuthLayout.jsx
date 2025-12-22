import React from 'react';
import { Outlet } from 'react-router';
import LastNav from '../Navbar/LastNav';

const AuthLayout = () => {
    return (
        <div className='container mx-auto px-40'>
            
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;