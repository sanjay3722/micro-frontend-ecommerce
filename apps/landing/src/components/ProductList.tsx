import React from "react";
import ProductCard from "./ProductCard";
import { useProducts } from "../hooks/useProducts";
import { MESSAGES } from "../constants/message.constants";

const ProductList = () => {
  const { products, loading, error, cartLoading, fetchProducts, addToCart } = useProducts();

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-96 gap-5">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-[#1976D2] rounded-full animate-spin"></div>
        <p className="text-lg text-gray-600">{MESSAGES.LOADING_PRODUCTS}</p>
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
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>
        <p className="text-red-600 text-lg">
          {MESSAGES.ERROR_LOADING_PRODUCTS_PREFIX} {error}
        </p>
        <button
          onClick={fetchProducts}
          className="px-6 py-3 bg-blue-500 text-white border-none rounded-lg cursor-pointer hover:bg-blue-600 transition-colors"
        >
          {MESSAGES.TRY_AGAIN}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          {MESSAGES.FEATURED_PRODUCTS_TITLE}
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {MESSAGES.FEATURED_PRODUCTS_SUBTITLE}
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
          {MESSAGES.VIEW_ALL_PRODUCTS}
        </button>
      </div>
    </div>
  );
};

export default ProductList;
