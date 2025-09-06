export const MFE_URLS = {
  AUTH: process.env.REACT_APP_AUTH_URL || "http://localhost:3001",
  PLANS: process.env.REACT_APP_PLANS_URL || "http://localhost:3004",
  CHECKOUT: process.env.REACT_APP_CHECKOUT_URL || "http://localhost:3005",
  LANDING: process.env.REACT_APP_LANDING_URL || "http://localhost:3003",
} as const;
