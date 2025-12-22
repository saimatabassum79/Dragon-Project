import { Link } from "react-router";


const Login = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-12">
    
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
      Login Your Account
    </h2>

    {/* Email */}
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600 mb-1">
        Email
      </label>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-4 text-gray-500 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
    </div>

    {/* Password */}
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-600 mb-1">
        Password
      </label>
      <input
        type="password"
        placeholder="Enter your password"
        className="w-full px-4 py-2 text-gray-500 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
    </div>

    {/* Button */}
    <button
      className="w-full py-2 bg-gray-100  rounded-lg font-semibold hover:bg-gray-300 cursor-pointer text-gray-800 transition"
    >
      Login
    </button>

    {/* Footer */}
    <p className="text-sm text-center text-gray-600 mt-5">
      Don’t have an account?{" "}
      <Link to="/auth/register" className="text-indigo-500 font-medium cursor-pointer">
       Register
      </Link>
    </p>

  </div>
</div>

        </div>
    );
};

export default Login;