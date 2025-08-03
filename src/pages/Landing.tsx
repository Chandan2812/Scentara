import HeroSection from "../components/Hero";
import Navbar from "../components/Navbar";
import flowerPerfume from "../assets/home2-banner-1-2.jpg"; // left card bg
import coolPerfume from "../assets/home2-banner-2-2.jpg";
import aboutImage from "../assets/scentara.png";
import { useEffect, useState } from "react";
import bannerImage from "../assets/home2-bg-13.jpg";
import bgImage from "../assets/home2-bg-10-2.jpg"; // background image
import perfumeBottle from "../assets/home2-image-3.png";
import feature1 from "../assets/home2-image-1.jpg";
import feature2 from "../assets/home2-image-2.jpg";
import BestProducts from "../components/BestProducts";
import NewArrivals from "../components/NewArrival";
import TestimonialSection from "../components/Testimonial";
import partner1 from "../assets/partner-logo-1-blue-2.png";
import partner2 from "../assets/partner-logo-2-blue-2.png";
import partner3 from "../assets/partner-logo-3-blue-2.png";
import partner4 from "../assets/partner-logo-4-blue-2.png";
import partner5 from "../assets/partner-logo-5-blue-2.png";
import partner6 from "../assets/partner-logo-6-blue-2.png";
import bgPartners from "../assets/home2-bg-10-2.jpg";
import Footer from "../components/Footer";

const partners = [partner1, partner2, partner3, partner4, partner5, partner6];
const collections = [
  {
    image: flowerPerfume,
    title: "Best price",
    subtitle: "Perfume Flower Collection",
  },
  {
    image: coolPerfume,
    title: "New perfume",
    subtitle: "Perfume Cool Collection",
  },
];

function Landing() {
  const [stats, setStats] = useState([
    { label: "Products Sold", value: 0, target: 1200 },
    { label: "Years of Experience", value: 0, target: 15 },
    { label: "Happy Customers", value: 0, target: 5000 },
    { label: "Awards Won", value: 0, target: 12 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) =>
        prev.map((stat) => {
          if (stat.value < stat.target) {
            return { ...stat, value: stat.value + Math.ceil(stat.target / 50) };
          }
          return stat;
        })
      );
    }, 50);

    // ✅ Cleanup to clear interval on unmount
    return () => clearInterval(interval);
  }, []); // Add empty dependency array

  return (
    <div>
      <Navbar />
      <HeroSection />

      <section className="w-full py-8 bg-white">
        <div className="w-11/12 md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((item, index) => (
            <div key={index} className="relative group overflow-hidden">
              {/* Image shifted inside the card */}
              <img
                src={item.image}
                alt={item.subtitle}
                className={`
                  w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105
                  ${
                    index === 0
                      ? "translate-x-9 translate-y-9"
                      : "translate-x-9 translate-y-9"
                  }
                `}
              />

              {/* Border overlay */}
              <div className="absolute inset-4 border border-gray-700 pointer-events-none" />

              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center px-14 space-y-3">
                <h3 className="text-6xl md:text-7xl font-brand text-[var(--primary-color)]">
                  {item.title}
                </h3>
                <p className="text-2xl md:text-3xl font-handwriting text-gray-900 font-medium">
                  {item.subtitle}
                </p>
                <button className="w-fit px-6 py-2 border border-gray-900 text-gray-900 font-medium mt-2 hover:bg-gray-900 hover:text-white transition">
                  SHOP NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full py-10 bg-white font-body">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 items-center">
          {/* Left Side - Text & Stats */}
          <div className="space-y-8">
            <div>
              <h2 className="text-6xl md:text-7xl font-brand text-[var(--primary-color)] mb-4">
                About Scentara
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                At Scentara, we craft timeless fragrances that enhance your aura
                and define your personality. Our dedication to quality and
                craftsmanship ensures that every drop tells a story.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left space-y-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)]">
                    {stat.value}+
                  </h3>
                  <p className="text-gray-700 text-2xl font-handwriting">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Video */}
          <div className="relative rounded-xl overflow-hidden ">
            <img src={aboutImage} alt="" />
          </div>
        </div>
      </section>

      <section
        className="relative w-full py-8 flex items-center justify-center font-body overflow-hidden"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay to make text readable */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Text Content */}
        <div className="relative z-10 text-center text-white px-6">
          <h2 className="text-4xl md:text-5xl font-brand mb-4">
            Elegant Fragrance Collection
          </h2>
          <p className="text-lg md:text-2xl mb-6">
            Experience luxury scents that define your aura
          </p>
          <button className="px-6 py-3 bg-[var(--primary-color)] text-gray-900 font-medium rounded-full shadow-md hover:bg-[var(--primary-hover)] transition">
            Explore Now
          </button>
        </div>
      </section>

      <BestProducts />
      <section
        className="relative w-full font-body overflow-hidden"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 w-11/12 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="text-white space-y-6 w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-7xl md:text-7xl font-brand text-[var(--primary-color)]">
              Perfume
            </h3>
            <h2 className="text-4xl md:text-5xl font-handwriting leading-tight">
              Fresh Aroma
            </h2>
            <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              Discover the essence of timeless fragrances. Our fresh aroma
              collection blends elegance and charm, leaving a lasting impression
              wherever you go.
            </p>
            <button className="px-6 py-3 bg-[var(--primary-color)] text-gray-900 font-medium rounded-full shadow-md hover:bg-[var(--primary-hover)] transition">
              Explore Collection
            </button>
          </div>

          {/* Right Side Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={perfumeBottle}
              alt="Perfume Bottle"
              className="w-60 md:w-80 lg:w-[400px] drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-white font-body">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
          {/* Left - Image with Border */}
          <div className="relative w-full flex justify-center md:justify-start">
            <div className="relative w-[90%] md:w-[70%] ">
              {/* Image shifted inside */}
              <img
                src={feature1}
                alt="Perfume"
                className="relative w-full h-full object-contain translate-x-6 translate-y-6"
              />
              {/* Border */}
              <div className="absolute z-10 top-0 left-0 w-full h-full border border-black"></div>
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-6xl md:text-7xl font-brand text-[var(--primary-color)]">
              Features
            </h3>
            <h2 className="text-2xl md:text-3xl font-handwriting text-gray-900 leading-tight">
              ONLY HIGH QUALITY IS OUR CORE VALUE
            </h2>
            <p className="text-gray-700 font-medium">
              Our perfumes are crafted with precision using the world’s finest
              ingredients, blending art and science to create timeless
              fragrances that define elegance.
            </p>
            <p className="text-gray-500">
              Experience the harmony of floral, woody, and musky notes in every
              drop. Perfected through years of expertise, our scents leave a
              lasting impression for every occasion.
            </p>
            <button className="px-6 py-3 mt-4 border border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition">
              EXPLORE MORE
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white font-body">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Right - Image (First in mobile) */}
          <div className="order-1 md:order-2 relative w-full flex justify-center md:justify-start">
            <div className="relative w-[90%] md:w-[70%]">
              {/* Image shifted inside */}
              <img
                src={feature2}
                alt="Perfume"
                className="relative w-full h-full object-contain translate-x-6 translate-y-6"
              />
              {/* Border */}
              <div className="absolute z-10 top-0 left-0 w-full h-full border border-black"></div>
            </div>
          </div>

          {/* Left - Text Content (Second in mobile) */}
          <div className="order-2 md:order-1 space-y-6 text-center md:text-left">
            <h3 className="text-6xl md:text-7xl font-brand text-[var(--primary-color)]">
              Features
            </h3>
            <h2 className="text-2xl md:text-3xl font-handwriting text-gray-900 leading-tight uppercase">
              A perfume that makes dressing complete
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Experience the elegance of our premium fragrances, crafted to
              enhance your presence and leave a memorable impression wherever
              you go.
            </p>

            {/* Bullet Points */}
            <ul className="text-gray-700 space-y-2 text-left mx-auto md:mx-0 w-fit">
              <li className="flex items-center gap-2">
                <span className="text-[var(--primary-color)] text-lg">•</span>
                Long-lasting natural fragrance
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--primary-color)] text-lg">•</span>
                Premium ingredients sourced globally
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--primary-color)] text-lg">•</span>
                Perfect for any occasion
              </li>
            </ul>

            <button className="px-6 py-3 mt-4 border border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition">
              EXPLORE MORE
            </button>
          </div>
        </div>
      </section>

      <NewArrivals />
      <TestimonialSection />

      <section
        className="py-16 bg-cover bg-center font-body"
        style={{ backgroundImage: `url(${bgPartners})` }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            {partners.map((logo, index) => (
              <div
                key={index}
                className="w-20 md:w-24 opacity-70 hover:opacity-100 transition-transform hover:scale-110"
              >
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Landing;
