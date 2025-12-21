import React from 'react';
import  fb from '../../assets/fb.png'
import  insta from '../../assets/instagram.png'
import  tiwt from '../../assets/twitter.png'
import { FaGithub, FaGoogle } from 'react-icons/fa';
const RightSide = () => {
    return (
        <div className='*:w-full'>
            <h1 className='text-gray-700 font-semibold text-2xl mb-3'>Login</h1>
            <button className='btn mb-3 bg-gray-100 text-gray-800 border-none px-8'><FaGoogle />Login with Google</button>
            <button className='btn bg-gray-100 text-gray-800 border-none px-8'>
                <FaGithub />
                Login with Github</button>
                <h1 className='text-gray-700 font-semibold text-2xl mb-3 mt-8'>Find Us On</h1>
                 <button className='btn   py-6 text-gray-800 justify-start bg-[#ffffff] border border-gray-200 px-8'><img src={fb} alt="" srcset="" /> Facebook</button>
            <button className='btn  py-6 text-gray-800 justify-start bg-[#ffffff] border border-gray-200 px-8'>
               <img src={insta} alt="" srcset="" />
                Instagram</button>
            <button className='btn shadow-none py-6 justify-start bg-[#ffffff] text-gray-800 border border-gray-200 px-8'>
               <img src={tiwt} alt="" srcset="" />
                Twitter</button>
        </div>
    );
};

export default RightSide;