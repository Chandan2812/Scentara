import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgImage from "../assets/home2-banner-1-2.jpg"; // background image

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <div
        className="flex flex-1 bg-cover bg-center relative pt-28"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Left Form Section */}
        <div className="relative z-10 w-full lg:w-1/2 flex items-center p-10">
          <div className="w-full max-w-md ml-auto ">
            {/* Welcome Text */}
            <h1 className="text-7xl  text-[var(--primary-color)] mb-2 font-brand">
              Welcome Back
            </h1>
            <p className="text-2xl text-gray-600 mb-6 font-handwriting">
              We’re happy to see you again. Please log in to continue exploring
              our collection.
            </p>

            <form className="space-y-6">
              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border-b border-gray-400 focus:border-[var(--primary-color)] focus:outline-none py-2"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full bg-transparent border-b border-gray-400 focus:border-[var(--primary-color)] focus:outline-none py-2"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[var(--primary-color)] text-white font-semibold hover:opacity-90 transition"
              >
                Login
              </button>
            </form>

            {/* Extra Links */}
            <div className="flex justify-between mt-4 text-sm">
              <a
                href="/forgot-password"
                className="text-[var(--primary-color)]"
              >
                Forgot Password?
              </a>
              <a href="/register" className="text-[var(--primary-color)]">
                Create Account
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Empty but showing background */}
        <div className="hidden lg:block lg:w-1/2"></div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Login;
