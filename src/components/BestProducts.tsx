import { Star } from "lucide-react";

export default function BestProducts() {
  // Product Data in JSON format
  const bestProducts = [
    {
      id: 1,
      name: "Ethereal Blossom",
      image:
        "https://8ded8880.delivery.rocketcdn.me/themes/cosmecos-new/wp-content/uploads/2021/01/img_2-9-545x654.jpg",
      price: 5999,
      rating: 4.8,
      category: "Women",
      description: "A floral fragrance that captures the essence of spring.",
    },
    {
      id: 2,
      name: "Ocean Breeze",
      image:
        "https://8ded8880.delivery.rocketcdn.me/themes/cosmecos-new/wp-content/uploads/2021/01/img_2-8-545x654.jpg",
      price: 4599,
      rating: 4.6,
      category: "Unisex",
      description: "A fresh and aquatic scent that energizes your senses.",
    },
    {
      id: 3,
      name: "Royal Oud",
      image:
        "https://8ded8880.delivery.rocketcdn.me/themes/cosmecos-new/wp-content/uploads/2021/01/img_2-6-545x654.jpg",
      price: 8999,
      rating: 4.9,
      category: "Men",
      description: "A luxurious woody scent for a bold and elegant aura.",
    },
    {
      id: 4,
      name: "Vanilla Essence",
      image:
        "https://8ded8880.delivery.rocketcdn.me/themes/cosmecos-new/wp-content/uploads/2021/01/img_2-4-545x654.jpg",
      price: 3299,
      rating: 4.5,
      category: "Women",
      description: "Warm vanilla blended with a hint of amber and musk.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 font-body relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-6xl md:text-7xl font-brand text-[var(--primary-color)]">
            Our Best Products
          </h2>

          <p className="text-center text-gray-600  mx-auto text-xl md:text-3xl font-handwriting leading-relaxed">
            Luxury scents that define your signature style.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestProducts.map((product) => {
            const formattedPrice = product.price.toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
              maximumFractionDigits: 0,
            });

            return (
              <div
                key={product.id}
                className="relative bg-white shadow-lg  overflow-hidden group transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Product Image */}
                <div className="relative w-full h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Category Badge */}
                  <span className="absolute top-3 left-3 bg-[var(--primary-color)] text-gray-900 text-xs font-medium px-3 py-1 rounded-full shadow-md">
                    {product.category}
                  </span>
                </div>

                {/* Product Info */}
                <div className="p-5 text-center space-y-3">
                  <h3 className="text-lg  text-gray-800 font-light font-body">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-center space-x-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={
                          i < Math.floor(product.rating)
                            ? "currentColor"
                            : "none"
                        }
                      />
                    ))}
                  </div>
                  <p className="text-3xl font-handwriting text-gray-900">
                    {formattedPrice}
                  </p>
                  <button className="mt-2 px-5 py-2 bg-[var(--primary-color)] text-gray-900 font-medium rounded-full shadow-md hover:bg-[var(--primary-hover)] transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
