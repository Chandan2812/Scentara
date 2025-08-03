import { useState } from "react";
import bgImage from "../assets/home2-bg-8.jpg"; // background image
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "“Our perfumes are a journey of emotions. Each note is carefully curated to make every moment memorable.”",
    author: "Samanta Peterson",
    role: "CLIENT OF SCENTARA",
  },
  {
    id: 2,
    quote:
      "“The fragrances are so long-lasting and elegant. I always get compliments whenever I wear them.”",
    author: "David Mathews",
    role: "CLIENT OF SCENTARA",
  },
  {
    id: 3,
    quote:
      "“Every product feels premium. It's not just perfume, it's a piece of art.”",
    author: "Priya Kapoor",
    role: "CLIENT OF SCENTARA",
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section
      className="relative py-20 bg-cover bg-center font-body"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        {/* Testimonial Card */}
        <div className="bg-white  p-10 relative border border-gray-400 rounded-sm shadow-md">
          {/* Custom Speech Bubble Effect */}
          <div className="absolute -bottom-3 left-12 w-6 h-6 bg-white border-b border-gray-400 rotate-45"></div>

          <h4 className="text-6xl md:text-7xl font-brand text-[var(--primary-color)] mb-2">
            Testimonials
          </h4>
          <h2 className="text-2xl md:text-3xl font-handwriting  mb-6">
            WHAT OUR CLIENTS SAY
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            {testimonials[current].quote}
          </p>

          <h5 className="font-semibold text-gray-800">
            {testimonials[current].author}
          </h5>
          <p className="text-[var(--primary-color)] text-sm">
            {testimonials[current].role}
          </p>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  current === index
                    ? "bg-[var(--primary-color)] w-4"
                    : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>

          {/* Optional Arrows */}
          <div className="absolute -left-12 top-1/2 -translate-y-1/2 hidden md:flex">
            <button
              onClick={prevSlide}
              className="p-2 bg-white border border-gray-400 rounded-full hover:bg-gray-100"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          <div className="absolute -right-12 top-1/2 -translate-y-1/2 hidden md:flex">
            <button
              onClick={nextSlide}
              className="p-2 bg-white border border-gray-400 rounded-full hover:bg-gray-100"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
