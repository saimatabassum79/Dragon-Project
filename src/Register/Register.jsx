import { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import LastNav from '../Navbar/LastNav';
import { Link, useNavigate } from 'react-router';
import toast from 'react-hot-toast';

const Register = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get('name');
    const email = form.get('email');
    const password = form.get('password');
    const photo = form.get('photo');

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            toast.success(`Account created for ${name}!`);
            navigate('/');
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        
        setError(err.message);
        toast.error(`Registration failed: ${err.message}`);
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <LastNav />

      <form
        onSubmit={handleSubmit}
        className="flex flex-1 items-center justify-center px-4 sm:px-6 lg:px-20 py-10"
      >
        <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl bg-white rounded-2xl shadow-xl p-6 sm:p-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">
            Register
          </h2>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm sm:text-base font-medium text-gray-600 mb-1">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 sm:py-3 text-gray-500 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>

          {/* Photo URL */}
          <div className="mb-4">
            <label className="block text-sm sm:text-base font-medium text-gray-600 mb-1">
              Photo URL
            </label>
            <input
              name="photo"
              type="url"
              placeholder="Enter photo URL"
              className="w-full px-4 py-2 sm:py-3 text-gray-500 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm sm:text-base font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 sm:py-3 text-gray-500 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm sm:text-base font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 sm:py-3 text-gray-500 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>

          {error && (
            <p className="text-sm sm:text-base text-red-600 mb-4 text-center">{error}</p>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 sm:py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition text-sm sm:text-base"
          >
            Create Account
          </button>

          {/* Footer */}
          <p className="text-sm sm:text-base text-center text-gray-600 mt-5">
            Already have an account?{' '}
            <Link
              to="/auth/login"
              className="text-indigo-500 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
