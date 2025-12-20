
import moment from 'moment';
import logo from '../assets/logo.png'
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router';
const Navbar = () => {
    return (
        <div className='text-center '>
           <div className='flex justify-center'>
            <img className='w-90 my-4 ' src={logo} alt="" />
           </div>
           <h2 className='text-gray-500 '>Journalism Without Fear or Favour</h2>
             <p className='text-sm text-gray-800 font-medium mt-2'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
             <div className='bg-gray-100 w-200 mx-auto py-2 mt-3  flex justify-center items-center gap-5'>
                <h1 className='bg-red-600 w-20 px-5 py-1 ml-2'>Latest</h1>
                 
                  <Marquee pauseOnHover={true} className='text-gray-800 font-semibold'>
                    <Link to="/news">Match Highlights: Germany vs Spain - as it happened !</Link>
                    <Link to="/news">Match Highlights: Germany vs Spain - as it happened !</Link>
                    <Link to="/news">Match Highlights: Germany vs Spain - as it happened !</Link>
                    </Marquee>
             </div>
        </div>
    );
};

export default Navbar;