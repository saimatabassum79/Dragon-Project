
import moment from 'moment';
import logo from '../assets/logo.png'
import Marquee from 'react-fast-marquee';
import { Link, NavLink } from 'react-router';
import { IoIosContact } from 'react-icons/io';
import LastNav from './LastNav';
const Navbar = () => {
    return (
        <div className='text-center container mx-auto px-40'>
           <div className='flex justify-center'>
            <img className='w-90 my-4 ' src={logo} alt="" />
           </div>
           <h2 className='text-gray-500 '>Journalism Without Fear or Favour</h2>
             <p className='text-sm text-gray-800 font-medium mt-2'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
             <div className='bg-gray-100  py-2 mt-3  flex justify-center items-center gap-5'>
                <h1 className='bg-red-600 w-20 px-5 py-1 ml-2'>Latest</h1>
                 
                  <Marquee pauseOnHover={true} className='text-gray-800 font-semibold'>
                    <Link to="/news">Match Highlights: Germany vs Spain - as it happened !</Link>
                    <Link to="/news">Match Highlights: Germany vs Spain - as it happened !</Link>
                    <Link to="/news">Match Highlights: Germany vs Spain - as it happened !</Link>
                    </Marquee>
                   
             </div>
             <LastNav></LastNav>
             
        </div>
    );
};

export default Navbar;