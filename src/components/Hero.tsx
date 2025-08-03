import perfumeBottle1 from "../assets/home2-slide1-img1-2.png";
import slideBg from "../assets/home2-slide1-bg-2.jpg"; // Background

export default function HeroSection() {
  return (
    <section
      className="relative w-full mt-20 md:mt-28 overflow-hidden font-body flex items-center justify-center p-4 md:p-0"
      style={{
        backgroundImage: `url(${slideBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for dim effect */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-center md:justify-between px-8 md:px-20 text-white">
        {/* Left Image (smaller) */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-8 md:mb-0 transform transition-all duration-1000 animate-[fadeInLeft_1s_ease-out]">
          <img
            src={perfumeBottle1}
            alt="Perfume Bottle"
            className="w-40 md:w-56 drop-shadow-xl"
          />
        </div>

        {/* Right Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6 transform transition-all duration-1000 animate-[fadeInUp_1.2s_ease-out]">
          <h1 className="text-4xl md:text-6xl font-brand leading-tight">
            Discover Your Signature Scent
          </h1>
          <p className="text-lg md:text-2xl font-handwriting text-gray-200">
            Elevate your aura with fragrances crafted for timeless elegance.
          </p>
          <button className="px-6 py-3 bg-[var(--primary-color)] text-gray-900 font-medium rounded-full shadow-md hover:bg-[var(--primary-hover)] transition">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
