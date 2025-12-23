import React, { useContext } from 'react';
import { IoIosContact } from 'react-icons/io';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const LastNav = () => {
  const {user,logOut} = useContext(AuthContext)
    return (
        <div>
             <div className='flex items-center  py-4 justify-between text-gray-500 '>
                      <div>
                  
                      </div>
                      <div className="gap-4">
                        <NavLink className="px-2" to="/">Home</NavLink>
                        <NavLink  className="px-2" to="/about">About</NavLink>
                        <NavLink  className="px-2" to="/career">Career</NavLink>
                      </div>
                      <div className='flex items-center gap-1'><IoIosContact className='text-black text-4xl' />
                      {
                        user && user?.email? (<button onClick={logOut} className='bg-gray-900 text-white cursor-pointer w-20 px-4 py-1 ml-2'>LogOut</button>): <Link to="/auth/login" className='bg-gray-900 text-white cursor-pointer w-20 px-4 py-1 ml-2'>Login</Link>
                      }
                      
                      </div>
                    </div>
        </div>
    );
};

export default LastNav;