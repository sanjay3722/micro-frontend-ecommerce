import React, { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ApiClient } from "secure-fetch-client";
import { FakeStoreProduct } from "../types/FakeStoreProduct";
import {
  API_BASE_URL,
  MOCK_BASE_URL,
  MOCK_DELAY_MS,
  USE_MOCKS,
  API_ENDPOINTS,
} from "../constants/api.constants";
import { MESSAGES } from "../constants/message.constants";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<FakeStoreProduct | null>(null);
  const [loading, setLoading] = useState(true);

  const client = useMemo(
    () =>
      new ApiClient({
        baseUrl: API_BASE_URL,
        mockBaseUrl: MOCK_BASE_URL,
        mockDelayMs: MOCK_DELAY_MS,
      }),
    [],
  );

  useEffect(() => {
    const run = async () => {
      try {
        setLoading(true);
        const response = await client.request<FakeStoreProduct>({
          url: `${API_ENDPOINTS.PRODUCTS}/${id}`,
          method: "GET",
          mock: USE_MOCKS,
        });
        if (response.ok) setProduct(response.data);
      } finally {
        setLoading(false);
      }
    };
    run();
  }, [client, id]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-96 gap-5">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-[#1976D2] rounded-full animate-spin"></div>
        <p className="text-lg text-gray-600">{MESSAGES.LOADING_PRODUCTS}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-gray-700">Product not found.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-6 bg-[#1976D2] text-white px-6 py-3 rounded-lg hover:bg-[#1565c0]"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <img src={product.image} alt={product.title} className="w-full h-96 object-cover" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="flex items-center justify-between mb-6">
            <div className="text-3xl font-bold text-[#E53935]">${product.price.toFixed(2)}</div>
            <span className="text-sm text-gray-600">Category: {product.category}</span>
          </div>
          <button className="bg-[#E53935] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d32f2f]">
            {MESSAGES.ADD_TO_CART}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
