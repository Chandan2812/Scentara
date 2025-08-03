import { Star } from "lucide-react";
import rightImage from "../assets/home2-image-4.jpg";
import prod1 from "../assets/home2-image-3.png";
import prod2 from "../assets/home2-image-3.png";
import prod3 from "../assets/home2-image-3.png";
import prod4 from "../assets/home2-image-3.png";
import prod5 from "../assets/home2-image-3.png";
import prod6 from "../assets/home2-image-3.png";

const newArrivals = [
  {
    id: 1,
    name: "Dropped Body Oil",
    image: prod1,
    price: 1500,
    oldPrice: 2700,
    rating: 5,
  },
  {
    id: 2,
    name: "Perfect Concealer",
    image: prod2,
    price: 2800,
    oldPrice: null,
    rating: 3,
  },
  {
    id: 3,
    name: "Lipstick Brown",
    image: prod3,
    price: 3500,
    oldPrice: 4500,
    rating: 5,
  },
  {
    id: 4,
    name: "Soft Hand Lotion",
    image: prod4,
    price: 2500,
    oldPrice: null,
    rating: 5,
  },
  {
    id: 5,
    name: "Nail Polish Nova",
    image: prod5,
    price: 1500,
    oldPrice: null,
    rating: 4,
  },
  {
    id: 6,
    name: "Dropped Beard Oil",
    image: prod6,
    price: 2800,
    oldPrice: null,
    rating: 2,
  },
];

export default function NewArrivals() {
  return (
    <section className="py-16 bg-white relative font-body">
      {/* Title */}
      <div className="text-center mb-12">
        <h4 className="text-6xl md:text-7xl font-brand text-[var(--primary-color)]">
          New Products
        </h4>
        <h2 className="text-2xl md:text-3xl font-handwriting text-gray-900">
          MEET NEW ARRIVALS
        </h2>
      </div>

      <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch">
        {/* Left - Product Grid */}
        <div className="lg:col-span-2 flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-4">
            {newArrivals.map((product) => (
              <div key={product.id} className="flex items-center gap-4 group">
                {/* Product Image */}
                <div className="border border-gray-200 p-2 hover:shadow-md transition">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-24 object-contain mx-auto"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1">
                  <h3 className="text-gray-800 font-medium text-sm">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <div className="text-sm">
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through mr-2">
                        ₹{product.oldPrice.toLocaleString("en-IN")}
                      </span>
                    )}
                    <span className="text-[var(--primary-color)] font-semibold">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex mt-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill={i < product.rating ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Image with equal height */}
        <div className="flex justify-center items-center">
          <img
            src={rightImage}
            alt="Perfume Bottle"
            className="w-full h-full object-contain max-h-[400px]"
          />
        </div>
      </div>
    </section>
  );
}
