// Import constants from common MFE with fallback
let Constants: any;
try {
  Constants = require("common/Constants").default;
} catch (error) {
  console.warn(
    "Common MFE not available, using fallback constants in authUtils"
  );
  // Fallback constants
  Constants = {
    API_ENDPOINTS: {
      AUTH: {
        LOGIN: "/api/auth/login",
        REGISTER: "/api/auth/register",
        LOGOUT: "/api/auth/logout",
        REFRESH: "/api/auth/refresh",
      },
    },
    HTTP_STATUS: {
      OK: 200,
      UNAUTHORIZED: 401,
      FORBIDDEN: 403,
      NOT_FOUND: 404,
      INTERNAL_SERVER_ERROR: 500,
    },
    STORAGE_KEYS: {
      AUTH_TOKEN: "auth_token",
      USER_DATA: "user_data",
    },
    ROUTES: {
      LOGIN: "/login",
      DASHBOARD: "/dashboard",
    },
    VALIDATION_RULES: {
      EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      PASSWORD_MIN_LENGTH: 8,
    },
    ERROR_MESSAGES: {
      NETWORK_ERROR: "Network error. Please check your connection.",
      UNAUTHORIZED: "You are not authorized to perform this action.",
      VALIDATION_ERROR: "Please check your input and try again.",
      SERVER_ERROR: "Server error. Please try again later.",
      NOT_FOUND: "The requested resource was not found.",
    },
    SUCCESS_MESSAGES: {
      LOGIN_SUCCESS: "Successfully logged in!",
      REGISTER_SUCCESS: "Account created successfully!",
      LOGOUT_SUCCESS: "Successfully logged out!",
      UPDATE_SUCCESS: "Updated successfully!",
      DELETE_SUCCESS: "Deleted successfully!",
    },
    DEFAULTS: {
      THEME: "light",
      LANGUAGE: "en",
      CURRENCY: "USD",
      TIMEZONE: "UTC",
    },
  };
}

// Example utility functions using constants from common MFE

export const validateEmail = (email: string): boolean => {
  return Constants.VALIDATION_RULES.EMAIL.test(email);
};

export const validatePassword = (
  password: string
): { isValid: boolean; message?: string } => {
  if (password.length < Constants.VALIDATION_RULES.PASSWORD_MIN_LENGTH) {
    return {
      isValid: false,
      message: `Password must be at least ${Constants.VALIDATION_RULES.PASSWORD_MIN_LENGTH} characters long`,
    };
  }
  return { isValid: true };
};

export const getAuthToken = (): string | null => {
  return localStorage.getItem(Constants.STORAGE_KEYS.AUTH_TOKEN);
};

export const setAuthToken = (token: string): void => {
  localStorage.setItem(Constants.STORAGE_KEYS.AUTH_TOKEN, token);
};

export const removeAuthToken = (): void => {
  localStorage.removeItem(Constants.STORAGE_KEYS.AUTH_TOKEN);
};

export const getUserData = (): any => {
  const userData = localStorage.getItem(Constants.STORAGE_KEYS.USER_DATA);
  return userData ? JSON.parse(userData) : null;
};

export const setUserData = (userData: any): void => {
  localStorage.setItem(
    Constants.STORAGE_KEYS.USER_DATA,
    JSON.stringify(userData)
  );
};

export const isAuthenticated = (): boolean => {
  return !!getAuthToken();
};

export const logout = (): void => {
  removeAuthToken();
  localStorage.removeItem(Constants.STORAGE_KEYS.USER_DATA);
  window.location.href = Constants.ROUTES.LOGIN;
};

export const getApiUrl = (endpoint: string): string => {
  // In a real app, you might have a base URL configuration
  const baseUrl = process.env.REACT_APP_API_BASE_URL || "http://localhost:3000";
  return `${baseUrl}${endpoint}`;
};

export const handleApiError = (status: number): string => {
  switch (status) {
    case Constants.HTTP_STATUS.UNAUTHORIZED:
      return Constants.ERROR_MESSAGES.UNAUTHORIZED;
    case Constants.HTTP_STATUS.FORBIDDEN:
      return Constants.ERROR_MESSAGES.UNAUTHORIZED;
    case Constants.HTTP_STATUS.NOT_FOUND:
      return Constants.ERROR_MESSAGES.NOT_FOUND;
    case Constants.HTTP_STATUS.INTERNAL_SERVER_ERROR:
      return Constants.ERROR_MESSAGES.SERVER_ERROR;
    default:
      return Constants.ERROR_MESSAGES.NETWORK_ERROR;
  }
};

export const showSuccessMessage = (message: string): void => {
  // In a real app, you might use a toast library
  console.log(
    Constants.SUCCESS_MESSAGES[
      message as keyof typeof Constants.SUCCESS_MESSAGES
    ] || message
  );
};

export const getDefaultTheme = (): string => {
  return Constants.DEFAULTS.THEME;
};

export const getDefaultLanguage = (): string => {
  return Constants.DEFAULTS.LANGUAGE;
};
