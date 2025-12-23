import  { useContext} from 'react';
import { AuthContext } from '../provider/AuthProvider';


const Register = () => {
  const {createNewUser,setUser}=useContext(AuthContext)
  const handleSubmit=(e)=>{
   e.preventDefault();
   const form = new FormData(e.target);
   const name = form.get("name");
   const email = form.get("email");
   const password = form.get("password");
   const confirm = form.get("Confirm Password");
   console.log({name,email,password,confirm})
   createNewUser(email,password)
   .then((result)=>{
    const user = result.user;
    setUser(user)
    console.log(user);
    
   })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
    
    // ..
  });
  }
    return (
        <div>
            <form onSubmit={handleSubmit} className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-8">
    
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
      Register
    </h2>

    {/* Name */}
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600 mb-1">
        Full Name
      </label>
      <input
      name="name"
        type="text"
        placeholder="Enter your name"
        className="w-full px-4 py-2 text-gray-500 border bg-none border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
    </div>

    {/* Email */}
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600 mb-1">
        Email
      </label>
      <input
      name="email"
        type="email"
        placeholder="Enter your email"
        className="w-full px-4 py-2 text-gray-500 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
    </div>

    {/* Password */}
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600 mb-1">
        Password
      </label>
      <input
      name="password"
        type="password"
        placeholder="......."
        className="w-full px-4 py-2 text-gray-500 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
    </div>

    {/* Confirm Password */}
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-600 mb-1">
        Confirm Password
      </label>
      <input
      name="Confirm Password"
        type="password"
        placeholder="Confirm your password"
        className="w-full px-4 py-2  text-gray-500 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
    </div>

    {/* Button */}
    <button
      className="w-full py-2 bg-gray-100 cursor-pointer rounded-lg font-semibold hover:bg-gray-300 text-gray-800 transition"
    >
      Create Account
    </button>

    {/* Footer */}
    <p className="text-sm text-center text-gray-600 mt-5">
      Already have an account?{" "}
      <span className="text-indigo-500 font-medium cursor-pointer">
        Login
      </span>
    </p>

  </div>
           </form>

        </div>
    );
};

export default Register;