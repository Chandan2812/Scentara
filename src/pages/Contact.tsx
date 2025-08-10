import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import bgImage from "../assets/home2-bg-8.jpg";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all required fields.");
      return;
    }
    // Here you would typically send data to backend or email service
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div>
      <Navbar />
      <section className="w-full min-h-screen bg-white font-body">
        {/* Hero */}
        <div
          className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center bg-[var(--primary-color)] text-white px-6 text-center"
          data-aos="fade-in"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div>
            <h1 className="text-6xl md:text-7xl font-brand mb-4">
              Contact Scentara
            </h1>
            <p className="max-w-xl mx-auto text-xl md:text-2xl font-handwriting">
              We’d love to hear from you! Whether you have questions or
              feedback, reach out anytime.
            </p>
          </div>
        </div>

        {/* Contact Form & Details */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {submitted && (
              <div className="bg-green-100 text-green-800 p-4 rounded">
                Thanks for reaching out! We'll get back to you soon.
              </div>
            )}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                required
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-gray-700 font-semibold mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject (optional)"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows={5}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-[var(--primary-color)] text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Details */}
          <div className="space-y-8" data-aos="fade-left" data-aos-delay="400">
            <div>
              <h3 className="text-2xl font-semibold text-[var(--primary-color)] mb-4">
                Contact Information
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Address:</strong> 123 Aroma Lane, Fragrance City, India
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> +91 98765 43210
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> contact@scentara.com
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[var(--primary-color)] mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-6 text-[var(--primary-color)] text-3xl">
                <a
                  href="https://facebook.com/scentara"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600 transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://instagram.com/scentara"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-pink-500 transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://twitter.com/scentara"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black transition"
                >
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Optional Map */}
        <div data-aos="fade-up" data-aos-delay="600">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7005.2999423426645!2d77.0254439!3d28.610275800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1754766476938!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
