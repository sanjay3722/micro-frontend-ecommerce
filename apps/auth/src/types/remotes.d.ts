declare module "common/Constants" {
  export const API_ENDPOINTS: {
    readonly AUTH: {
      readonly LOGIN: string;
      readonly REGISTER: string;
      readonly LOGOUT: string;
      readonly REFRESH: string;
    };
    readonly USER: {
      readonly PROFILE: string;
      readonly UPDATE: string;
    };
    readonly PRODUCTS: {
      readonly LIST: string;
      readonly DETAIL: string;
      readonly SEARCH: string;
    };
    readonly ORDERS: {
      readonly CREATE: string;
      readonly LIST: string;
      readonly DETAIL: string;
    };
  };

  export const HTTP_STATUS: {
    readonly OK: number;
    readonly CREATED: number;
    readonly BAD_REQUEST: number;
    readonly UNAUTHORIZED: number;
    readonly FORBIDDEN: number;
    readonly NOT_FOUND: number;
    readonly INTERNAL_SERVER_ERROR: number;
  };

  export const USER_ROLES: {
    readonly ADMIN: string;
    readonly USER: string;
    readonly GUEST: string;
  };

  export const ROUTES: {
    readonly HOME: string;
    readonly LOGIN: string;
    readonly REGISTER: string;
    readonly DASHBOARD: string;
    readonly PROFILE: string;
    readonly PRODUCTS: string;
    readonly CART: string;
    readonly CHECKOUT: string;
    readonly ORDERS: string;
  };

  export const STORAGE_KEYS: {
    readonly AUTH_TOKEN: string;
    readonly USER_DATA: string;
    readonly CART_ITEMS: string;
    readonly THEME: string;
    readonly LANGUAGE: string;
  };

  export const VALIDATION_RULES: {
    readonly EMAIL: RegExp;
    readonly PASSWORD_MIN_LENGTH: number;
    readonly USERNAME_MIN_LENGTH: number;
    readonly PHONE_REGEX: RegExp;
  };

  export const UI_CONSTANTS: {
    readonly MAX_FILE_SIZE: number;
    readonly SUPPORTED_IMAGE_TYPES: readonly string[];
    readonly PAGINATION: {
      readonly DEFAULT_PAGE_SIZE: number;
      readonly MAX_PAGE_SIZE: number;
    };
    readonly DEBOUNCE_DELAY: number;
    readonly TOAST_DURATION: number;
  };

  export const ERROR_MESSAGES: {
    readonly NETWORK_ERROR: string;
    readonly UNAUTHORIZED: string;
    readonly VALIDATION_ERROR: string;
    readonly SERVER_ERROR: string;
    readonly NOT_FOUND: string;
  };

  export const SUCCESS_MESSAGES: {
    readonly LOGIN_SUCCESS: string;
    readonly REGISTER_SUCCESS: string;
    readonly LOGOUT_SUCCESS: string;
    readonly UPDATE_SUCCESS: string;
    readonly DELETE_SUCCESS: string;
  };

  export const DEFAULTS: {
    readonly THEME: string;
    readonly LANGUAGE: string;
    readonly CURRENCY: string;
    readonly TIMEZONE: string;
  };

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

  const Constants: {
    readonly API_ENDPOINTS: typeof API_ENDPOINTS;
    readonly HTTP_STATUS: typeof HTTP_STATUS;
    readonly USER_ROLES: typeof USER_ROLES;
    readonly ROUTES: typeof ROUTES;
    readonly STORAGE_KEYS: typeof STORAGE_KEYS;
    readonly VALIDATION_RULES: typeof VALIDATION_RULES;
    readonly UI_CONSTANTS: typeof UI_CONSTANTS;
    readonly ERROR_MESSAGES: typeof ERROR_MESSAGES;
    readonly SUCCESS_MESSAGES: typeof SUCCESS_MESSAGES;
    readonly DEFAULTS: typeof DEFAULTS;
  };

  export default Constants;
}
