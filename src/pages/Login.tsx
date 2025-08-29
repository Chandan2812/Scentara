import { useState } from "react";
import { Eye, EyeOff, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgImage from "../assets/home2-banner-1-2.jpg"; // background image
const baseURL = import.meta.env.VITE_API_BASE_URL;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);

    try {
      const res = await fetch(`${baseURL}/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.msg || "Login failed");
      }

      // ✅ Save token and user info in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setSuccess(true);

      // redirect to home after delay
      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Success Popup */}
      {success && (
        <div className="fixed top-6 right-6 bg-white border-l-4 border-green-500 shadow-lg rounded-lg p-4 flex items-center gap-3 animate-fade-in z-50">
          <CheckCircle className="text-green-500" size={24} />
          <span className="text-green-600 font-medium">Login Successful!</span>
        </div>
      )}

      {/* Main content */}
      <div
        className="flex flex-1 bg-cover bg-center relative pt-28"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Left Form Section */}
        <div className="relative z-10 w-full lg:w-1/2 flex items-center p-10">
          <div className="w-full max-w-md ml-auto ">
            {/* Welcome Text */}
            <h1 className="text-7xl text-[var(--primary-color)] mb-2 font-brand">
              Welcome Back
            </h1>
            <p className="text-2xl text-gray-600 mb-6 font-handwriting">
              We’re happy to see you again. Please log in to continue exploring
              our collection.
            </p>

            <form className="space-y-6" onSubmit={handleLogin}>
              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-transparent border-b border-gray-400 focus:border-[var(--primary-color)] focus:outline-none py-2"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
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

              {/* Error */}
              {error && <p className="text-red-500 text-sm">{error}</p>}

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg bg-[var(--primary-color)] text-white font-semibold hover:opacity-90 transition disabled:opacity-60"
              >
                {loading ? "Logging in..." : "Login"}
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
