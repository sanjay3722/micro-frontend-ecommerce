// Common constants that can be shared across micro-frontends

// API Endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/api/auth/login",
    REGISTER: "/api/auth/register",
    LOGOUT: "/api/auth/logout",
    REFRESH: "/api/auth/refresh",
  },
  USER: {
    PROFILE: "/api/user/profile",
    UPDATE: "/api/user/update",
  },
  PRODUCTS: {
    LIST: "/api/products",
    DETAIL: "/api/products/:id",
    SEARCH: "/api/products/search",
  },
  ORDERS: {
    CREATE: "/api/orders",
    LIST: "/api/orders",
    DETAIL: "/api/orders/:id",
  },
} as const;

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;

// User Roles
export const USER_ROLES = {
  ADMIN: "admin",
  USER: "user",
  GUEST: "guest",
} as const;

// Application Routes
export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  DASHBOARD: "/dashboard",
  PROFILE: "/profile",
  PRODUCTS: "/products",
  CART: "/cart",
  CHECKOUT: "/checkout",
  ORDERS: "/orders",
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: "auth_token",
  USER_DATA: "user_data",
  CART_ITEMS: "cart_items",
  THEME: "theme",
  LANGUAGE: "language",
} as const;

// Validation Rules
export const VALIDATION_RULES = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD_MIN_LENGTH: 8,
  USERNAME_MIN_LENGTH: 3,
  PHONE_REGEX: /^\+?[\d\s\-\(\)]+$/,
} as const;

// UI Constants
export const UI_CONSTANTS = {
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  SUPPORTED_IMAGE_TYPES: ["image/jpeg", "image/png", "image/gif", "image/webp"],
  PAGINATION: {
    DEFAULT_PAGE_SIZE: 10,
    MAX_PAGE_SIZE: 100,
  },
  DEBOUNCE_DELAY: 300,
  TOAST_DURATION: 5000,
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: "Network error. Please check your connection.",
  UNAUTHORIZED: "You are not authorized to perform this action.",
  VALIDATION_ERROR: "Please check your input and try again.",
  SERVER_ERROR: "Server error. Please try again later.",
  NOT_FOUND: "The requested resource was not found.",
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: "Successfully logged in!",
  REGISTER_SUCCESS: "Account created successfully!",
  LOGOUT_SUCCESS: "Successfully logged out!",
  UPDATE_SUCCESS: "Updated successfully!",
  DELETE_SUCCESS: "Deleted successfully!",
} as const;

// Default Values
export const DEFAULTS = {
  THEME: "light",
  LANGUAGE: "en",
  CURRENCY: "USD",
  TIMEZONE: "UTC",
} as const;

// Type definitions
export type ApiEndpoints = typeof API_ENDPOINTS;
export type HttpStatus = typeof HTTP_STATUS;
export type UserRoles = typeof USER_ROLES;
export type Routes = typeof ROUTES;
export type StorageKeys = typeof STORAGE_KEYS;
export type ValidationRules = typeof VALIDATION_RULES;
export type UiConstants = typeof UI_CONSTANTS;
export type ErrorMessages = typeof ERROR_MESSAGES;
export type SuccessMessages = typeof SUCCESS_MESSAGES;
export type Defaults = typeof DEFAULTS;

// Main constants object
const Constants = {
  API_ENDPOINTS,
  HTTP_STATUS,
  USER_ROLES,
  ROUTES,
  STORAGE_KEYS,
  VALIDATION_RULES,
  UI_CONSTANTS,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  DEFAULTS,
} as const;

export default Constants;
