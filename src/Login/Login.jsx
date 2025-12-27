import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import LastNav from "../Navbar/LastNav";
import toast from "react-hot-toast";

const Login = () => {
  const { userLogin, setUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const email = form.get("email");
    const password = form.get("password");

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);

        // Success toast
        toast.success(`Welcome back, ${user.displayName || "User"}!`);

        // navigate to previous page or home
        navigate(location.state?.from || "/");
      })
      .catch((error) => {
        setError(error.code);
        // Error toast
        toast.error(`Login failed: ${error.code}`);
      });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <LastNav />

      <form
        onSubmit={handleSubmit}
        className="flex flex-1 items-center justify-center px-4 sm:px-6 lg:px-20 py-10 bg-gray-100"
      >
        <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl bg-white rounded-2xl shadow-xl p-6 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
            Login Your Account
          </h2>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm sm:text-base font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 sm:py-3 text-gray-500 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
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
              placeholder="Enter your password"
              className="w-full px-4 py-2 sm:py-3 text-gray-500 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {error && (
            <p className="text-sm sm:text-base text-red-600 mb-4 text-center">
              {error}
            </p>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 sm:py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition text-sm sm:text-base"
          >
            Login
          </button>

          {/* Footer */}
          <p className="text-sm sm:text-base text-center text-gray-600 mt-5">
            Don’t have an account?{" "}
            <Link
              to="/auth/register"
              className="text-indigo-500 font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
