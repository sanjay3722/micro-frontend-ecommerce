export const ROUTES = {
  ROOT: "/",
  LANDING: "/landing",
  CHECKOUT: "/checkout",
  PRODUCT_DETAIL: "/product/:id",
  ABOUT: "/about",
  CONTACT: "/contact",
  TERMS: "/terms",
  AFFILIATE: "/affiliate-disclosure",
  AUTH: "/auth",
  PLANS: "/plans",
} as const;

export const buildProductDetailPath = (id: number | string) => `/product/${id}`;
