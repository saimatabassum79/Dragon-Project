import moment from 'moment';
import logo from '../assets/logo.png';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import LastNav from './LastNav';

const Navbar = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-40">
      {/* Logo */}
      <div className="flex justify-center pt-8">
        <img className="w-48 sm:w-60 md:w-72 lg:w-80" src={logo} alt="Logo" />
      </div>

      {/* Tagline */}
      <h2 className="text-gray-500 text-sm sm:text-base mt-2 text-center">
        Journalism Without Fear or Favour
      </h2>

      {/* Date & Time */}
      <p className="text-gray-800 text-xs sm:text-sm font-medium mt-1 text-center">
        {moment().format('MMMM Do YYYY, h:mm:ss a')}
      </p>

      {/* Latest News Marquee */}
      <div className="bg-gray-100 py-2 mt-4 flex flex-col sm:flex-row items-center gap-2 sm:gap-5">
        <h1 className="bg-red-600 text-white px-3 sm:px-5 py-1 w-fit text-sm sm:text-base rounded">
          Latest
        </h1>
        <div className="w-full sm:flex-1">
          <Marquee pauseOnHover={true} className="text-gray-800 font-semibold text-sm sm:text-base">
            <Link className="mr-10  transition" to="/news">
              Match Highlights: Germany vs Spain - as it happened!
            </Link>
            <Link className="mr-10  transition" to="/news">
              Match Highlights: Germany vs Spain - as it happened!
            </Link>
            <Link className="mr-10  transition" to="/news">
              Match Highlights: Germany vs Spain - as it happened!
            </Link>
          </Marquee>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-4">
        <LastNav />
      </div>
    </div>
  );
};

export default Navbar;
