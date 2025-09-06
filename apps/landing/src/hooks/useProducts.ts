import { useCallback, useEffect, useMemo, useState } from "react";
import { ApiClient } from "secure-fetch-client";
import { CartItem, Product } from "../types/ProductsType";
import { FakeStoreProduct } from "../types/FakeStoreProduct";
import productsData from "../mock/products.json";
import {
  API_BASE_URL,
  APP_API_BASE_URL,
  MOCK_BASE_URL,
  MOCK_DELAY_MS,
  USE_MOCKS,
  API_ENDPOINTS,
  MOCK_PATHS,
} from "../constants/api.constants";

const mapFakeStoreToProduct = ({
  id,
  title,
  description,
  price,
  image,
  category,
  rating,
}: FakeStoreProduct): Product => ({
  id,
  name: title,
  description,
  price,
  image,
  category,
  rating: rating?.rate ?? 0,
  inStock: (rating?.count ?? 0) > 0,
});

const mockProducts: Product[] = productsData as Product[];

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [cartLoading, setCartLoading] = useState(false);

  const mockMode = USE_MOCKS;

  const productsClient = useMemo(
    () =>
      new ApiClient({
        baseUrl: API_BASE_URL,
        mockBaseUrl: MOCK_BASE_URL,
        mockDelayMs: MOCK_DELAY_MS,
      }),
    [],
  );
  const appClient = useMemo(
    () =>
      new ApiClient({
        baseUrl: APP_API_BASE_URL,
        mockBaseUrl: MOCK_BASE_URL,
        mockDelayMs: MOCK_DELAY_MS,
      }),
    [],
  );

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await productsClient.request<FakeStoreProduct[]>({
        url: API_ENDPOINTS.PRODUCTS,
        method: "GET",
        mock: mockMode,
        mockPath: MOCK_PATHS.PRODUCTS,
      });
      if (response.ok) {
        setProducts(response.data.map(mapFakeStoreToProduct));
        setError("");
      } else {
        setProducts(mockProducts);
        setError("");
      }
    } catch {
      setProducts(mockProducts);
      setError("Failed to load from API. Showing mock data.");
    } finally {
      setLoading(false);
    }
  }, [productsClient, mockMode]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const addToCart = useCallback(
    async (product: Product) => {
      setCartLoading(true);
      try {
        const current: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
        const index = current.findIndex((i) => i.product.id === product.id);
        const next: CartItem[] =
          index >= 0
            ? current.map((i, idx) => (idx === index ? { ...i, quantity: i.quantity + 1 } : i))
            : [...current, { product, quantity: 1 }];

        localStorage.setItem("cart", JSON.stringify(next));
        await appClient.request({
          url: API_ENDPOINTS.CART,
          method: "POST",
          body: next,
          mock: mockMode,
          mockPath: MOCK_PATHS.CART,
        });
        alert(`${product.name} added to cart!`);
      } catch (err) {
        console.error("Error adding to cart:", err);
        alert("Failed to add item to cart. Please try again.");
      } finally {
        setCartLoading(false);
      }
    },
    [appClient, mockMode],
  );

  return { products, loading, error, cartLoading, fetchProducts, addToCart };
}
