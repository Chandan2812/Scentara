import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import logo from "../assets/scentara.png"; // your logo

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 font-body">
      {/* Top Section */}
      <div className="w-11/12 mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* 1. Brand */}
        <div>
          <img src={logo} alt="Scentara" className="w-32 mb-4" />
          <p className="text-gray-400 text-sm leading-relaxed">
            Scentara brings you premium fragrances crafted with the finest
            ingredients to make every moment unforgettable.
          </p>
        </div>

        {/* 2. Quick Links */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-[var(--primary-color)] transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[var(--primary-color)] transition"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[var(--primary-color)] transition"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[var(--primary-color)] transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* 3. Customer Service */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">
            Customer Service
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-[var(--primary-color)] transition"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[var(--primary-color)] transition"
              >
                Shipping & Returns
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[var(--primary-color)] transition"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[var(--primary-color)] transition"
              >
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* 4. Social Media */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-[var(--primary-color)] transition"
            >
              <Facebook />
            </a>
            <a
              href="#"
              className="hover:text-[var(--primary-color)] transition"
            >
              <Instagram />
            </a>
            <a
              href="#"
              className="hover:text-[var(--primary-color)] transition"
            >
              <Twitter />
            </a>
            <a
              href="#"
              className="hover:text-[var(--primary-color)] transition"
            >
              <Youtube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Scentara. All rights reserved.
      </div>
    </footer>
  );
}
