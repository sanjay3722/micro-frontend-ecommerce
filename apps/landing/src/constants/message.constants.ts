export const MESSAGES = {
  LOADING_PRODUCTS: "Loading amazing products...",
  ERROR_LOADING_PRODUCTS_PREFIX: "Error loading products:",
  ADDING_TO_CART: "Adding...",
  ADDED_TO_CART: (name: string) => `${name} added to cart!`,
  ADD_TO_CART: "Add to Cart",
  OUT_OF_STOCK: "Out of Stock",
  IN_STOCK: "In Stock",
  VIEW_ALL_PRODUCTS: "View All Products",
  FEATURED_PRODUCTS_TITLE: "Featured Products",
  FEATURED_PRODUCTS_SUBTITLE:
    "Discover our handpicked collection of premium products designed to enhance your lifestyle",
  TRY_AGAIN: "Try Again",
} as const;
