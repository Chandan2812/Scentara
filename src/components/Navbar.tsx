import { useState } from "react";
import { ShoppingBag, User, MapPin, Mail, Menu, X } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "../App.css";
import logo from "../assets/scentara.png";

export default function Navbar() {
  const [cartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 font-body">
      {/* Mini Navbar (Desktop Only) */}
      <div className="hidden md:flex justify-between items-center bg-[var(--primary-color)] text-white px-12 py-2 text-sm shadow-md">
        {/* Left: Contact Info */}
        <div className="flex items-center space-x-6">
          <span className="flex items-center space-x-1">
            <MapPin size={16} />
            <span>New Delhi, India</span>
          </span>
          <a
            href="mailto:info@scentara.com"
            className="flex items-center space-x-1 hover:underline transition"
          >
            <Mail size={16} />
            <span>info@scentara.com</span>
          </a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="hover:text-gray-100 transition hover:scale-110"
          >
            <FaFacebookF size={14} />
          </a>
          <a
            href="#"
            className="hover:text-gray-100 transition hover:scale-110"
          >
            <FaInstagram size={14} />
          </a>
          <a
            href="#"
            className="hover:text-gray-100 transition hover:scale-110"
          >
            <FaTwitter size={14} />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-10 py-3 bg-white relative shadow-md">
        {/* Left - Logo */}
        <div>
          <img src={logo} alt="Scentara" className="w-24" />
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center space-x-10 text-gray-700 font-medium">
          <li className="hover:text-[var(--primary-color)] transition cursor-pointer">
            Home
          </li>
          <li className="relative group cursor-pointer hover:text-[var(--primary-color)] transition">
            Shop
            <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-md  py-2 w-44 text-gray-600">
              {["Men", "Women", "Unisex", "Gift Sets"].map((item) => (
                <li
                  key={item}
                  className="px-4 py-2 hover:bg-[var(--primary-color)] hover:text-white transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>
          <li className="hover:text-[var(--primary-color)] transition cursor-pointer">
            About
          </li>
          <li className="hover:text-[var(--primary-color)] transition cursor-pointer">
            Contact
          </li>
        </ul>

        {/* Right - User & Cart + Mobile Menu Button */}
        <div className="flex items-center space-x-6">
          <User
            className="cursor-pointer hover:text-[var(--primary-color)] transition"
            size={22}
          />
          <div className="relative cursor-pointer">
            <ShoppingBag
              className="hover:text-[var(--primary-color)] transition"
              size={22}
            />
            <span
              className={`absolute -top-2 -right-2 text-xs rounded-full px-1 ${
                cartCount === 0
                  ? "bg-gray-400 text-white"
                  : "bg-[var(--primary-color)] text-white"
              }`}
            >
              {cartCount}
            </span>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={26} className="text-gray-700" />
            ) : (
              <Menu size={26} className="text-gray-700" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md w-full flex flex-col items-center py-6 space-y-4 text-gray-700 font-medium animate-slide-down">
          <a href="#" className="hover:text-[var(--primary-color)] transition">
            Home
          </a>
          <a href="#" className="hover:text-[var(--primary-color)] transition">
            Shop
          </a>
          <a href="#" className="hover:text-[var(--primary-color)] transition">
            About
          </a>
          <a href="#" className="hover:text-[var(--primary-color)] transition">
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
