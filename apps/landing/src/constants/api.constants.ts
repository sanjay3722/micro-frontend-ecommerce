export const API_BASE_URL = process.env.REACT_APP_API_BASE || "https://fakestoreapi.com";
export const APP_API_BASE_URL = process.env.REACT_APP_APP_API_BASE || "/api";
export const MOCK_BASE_URL = process.env.REACT_APP_MOCK_BASE || "/mocks";
export const MOCK_DELAY_MS = Number(process.env.REACT_APP_MOCK_DELAY_MS || 200);
export const USE_MOCKS = (process.env.REACT_APP_USE_MOCKS || "true").toLowerCase() === "true";

export const API_ENDPOINTS = {
  PRODUCTS: "/products",
  CART: "/cart",
} as const;

export const MOCK_PATHS = {
  PRODUCTS: "/products.json",
  CART: "/cart.json",
} as const;
