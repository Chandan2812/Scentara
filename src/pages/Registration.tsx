import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgImage from "../assets/home2-banner-1-2.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner"; // ✅ import toast

const baseURL = import.meta.env.VITE_API_BASE_URL;

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return toast.error("❌ Passwords do not match!");
    }

    try {
      setLoading(true);
      const res = await axios.post(`${baseURL}/user/register`, {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      toast.success(`🎉 ${res.data.msg || "Registered successfully!"}`);

      setFormData({ name: "", email: "", password: "", confirmPassword: "" });

      // redirect to login after short delay
      setTimeout(() => navigate("/login"), 1500);
    } catch (err: any) {
      toast.error(err.response?.data?.msg || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div
        className="flex flex-1 bg-cover bg-center relative pt-28"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="relative z-10 w-full lg:w-1/2 flex items-center p-10">
          <div className="w-full max-w-md ml-auto">
            <h1 className="text-7xl text-[var(--primary-color)] mb-2 font-brand">
              Join Us
            </h1>
            <p className="text-2xl text-gray-600 mb-6 font-handwriting">
              Create your account and start exploring our exclusive collection.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name */}
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-transparent border-b border-gray-400 focus:border-[var(--primary-color)] focus:outline-none py-2"
                required
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-transparent border-b border-gray-400 focus:border-[var(--primary-color)] focus:outline-none py-2"
                required
              />

              {/* Password */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-gray-400 focus:border-[var(--primary-color)] focus:outline-none py-2"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                  className="w-full bg-transparent border-b border-gray-400 focus:border-[var(--primary-color)] focus:outline-none py-2"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg bg-[var(--primary-color)] text-white font-semibold hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </form>

            {/* Extra Links */}
            <div className="flex justify-between mt-4 text-sm">
              <a href="/login" className="text-[var(--primary-color)]">
                Already have an account? Login
              </a>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden lg:block lg:w-1/2"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
