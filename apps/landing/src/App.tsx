import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Types
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
}

interface CartItem {
  product: Product;
  quantity: number;
}

// Header Component
const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-xl font-bold text-gray-900">
                  StoreFront
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Home
            </a>
            <a
              href="#products"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Products
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              About
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600 p-2 rounded-full hover:bg-gray-100 transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="text-gray-700 hover:text-blue-600 p-2 rounded-full hover:bg-gray-100 transition-colors relative">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Banner Section Component
const BannerSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Discover Amazing
              <span className="block text-yellow-300">Products</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Shop the latest trends with premium quality products at unbeatable
              prices. Free shipping on orders over $50!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
                Shop Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
                Learn More
              </button>
            </div>
            <div className="mt-8 flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-yellow-300 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Free Shipping
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-yellow-300 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                30-Day Returns
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-yellow-300 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Secure Payment
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-100 rounded-lg p-4 text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                        />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-700">
                      Best Prices
                    </p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 text-center">
                    <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-700">
                      Quality Guaranteed
                    </p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 text-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-700">
                      Fast Delivery
                    </p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 text-center">
                    <div className="w-12 h-12 bg-red-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-700">
                      Customer Love
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Product Card Component
const ProductCard: React.FC<{
  product: Product;
  onAddToCart: (product: Product) => void;
  loading: boolean;
}> = ({ product, onAddToCart, loading }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {!product.inStock && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
            Out of Stock
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            {product.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-gray-600 text-sm">({product.rating})</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </div>
          <div className="text-sm text-gray-500">
            {product.inStock ? (
              <span className="text-green-600 flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                In Stock
              </span>
            ) : (
              <span className="text-red-600">Out of Stock</span>
            )}
          </div>
        </div>
        <button
          className={`w-full py-3 px-4 rounded-xl font-semibold text-white transition-all duration-300 ${
            product.inStock && !loading
              ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:-translate-y-1 hover:shadow-lg"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          onClick={() => onAddToCart(product)}
          disabled={!product.inStock || loading}>
          {loading ? (
            <div className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Adding...
            </div>
          ) : product.inStock ? (
            <div className="flex items-center justify-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                />
              </svg>
              Add to Cart
            </div>
          ) : (
            "Out of Stock"
          )}
        </button>
      </div>
    </div>
  );
};

// Product List Component
const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [cartLoading, setCartLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      // Mock API call - in real app, this would be a real API
      const response = await fetch("/api/products");

      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        // Fallback to mock data if API fails
        setProducts(mockProducts);
      }
    } catch (err) {
      // Fallback to mock data
      setProducts(mockProducts);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (product: Product) => {
    try {
      setCartLoading(true);

      // Get current cart from localStorage
      const currentCart: CartItem[] = JSON.parse(
        localStorage.getItem("cart") || "[]"
      );

      // Check if product already in cart
      const existingItem = currentCart.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        currentCart.push({ product, quantity: 1 });
      }

      // Save updated cart
      localStorage.setItem("cart", JSON.stringify(currentCart));

      // Mock API call to update cart
      await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentCart),
      });

      // Show success message
      alert(`${product.name} added to cart!`);
    } catch (err) {
      console.error("Error adding to cart:", err);
      alert("Failed to add item to cart. Please try again.");
    } finally {
      setCartLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-96 gap-5">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="text-lg text-gray-600">Loading amazing products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-96 gap-5 text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
          <svg
            className="w-8 h-8 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>
        <p className="text-red-600 text-lg">Error loading products: {error}</p>
        <button
          onClick={fetchProducts}
          className="px-6 py-3 bg-blue-500 text-white border-none rounded-lg cursor-pointer hover:bg-blue-600 transition-colors">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Featured Products
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover our handpicked collection of premium products designed to
          enhance your lifestyle
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
            loading={cartLoading}
          />
        ))}
      </div>

      <div className="text-center mt-16">
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
          View All Products
        </button>
      </div>
    </div>
  );
};

// Mock data for development
const mockProducts: Product[] = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    description:
      "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
    price: 99.99,
    image: "https://via.placeholder.com/400x300?text=Headphones",
    category: "Electronics",
    rating: 4.5,
    inStock: true,
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    description:
      "Track your fitness goals with this advanced smartwatch featuring heart rate monitoring.",
    price: 199.99,
    image: "https://via.placeholder.com/400x300?text=Smartwatch",
    category: "Electronics",
    rating: 4.3,
    inStock: true,
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    description:
      "Comfortable and eco-friendly cotton t-shirt available in multiple colors.",
    price: 29.99,
    image: "https://via.placeholder.com/400x300?text=T-Shirt",
    category: "Clothing",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 4,
    name: "Stainless Steel Water Bottle",
    description:
      "Keep your drinks cold for 24 hours with this insulated water bottle.",
    price: 24.99,
    image: "https://via.placeholder.com/400x300?text=Water+Bottle",
    category: "Home",
    rating: 4.6,
    inStock: false,
  },
  {
    id: 5,
    name: "Wireless Charging Pad",
    description:
      "Fast wireless charging pad compatible with all Qi-enabled devices.",
    price: 49.99,
    image: "https://via.placeholder.com/400x300?text=Charging+Pad",
    category: "Electronics",
    rating: 4.2,
    inStock: true,
  },
  {
    id: 6,
    name: "Yoga Mat",
    description:
      "Premium non-slip yoga mat perfect for home workouts and studio sessions.",
    price: 39.99,
    image: "https://via.placeholder.com/400x300?text=Yoga+Mat",
    category: "Fitness",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 7,
    name: "Portable Bluetooth Speaker",
    description:
      "Waterproof portable speaker with 360-degree sound and 20-hour battery life.",
    price: 79.99,
    image: "https://via.placeholder.com/400x300?text=Speaker",
    category: "Electronics",
    rating: 4.4,
    inStock: true,
  },
  {
    id: 8,
    name: "Leather Wallet",
    description:
      "Genuine leather wallet with RFID protection and multiple card slots.",
    price: 34.99,
    image: "https://via.placeholder.com/400x300?text=Wallet",
    category: "Accessories",
    rating: 4.1,
    inStock: true,
  },
];

// Main Landing App Component
const LandingApp = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <BannerSection />
      <ProductList />
    </div>
  );
};

export default LandingApp;
