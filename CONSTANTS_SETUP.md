# Constants Setup for Micro-Frontend E-commerce

## Overview

This document explains how the shared constants are set up between the Common MFE and Auth MFE using Module Federation.

## What Was Created

### 1. Constants File (`apps/common/src/utils/constants.ts`)

- **Location**: `apps/common/src/utils/constants.ts`
- **Type**: TypeScript file with comprehensive constants
- **Features**:
  - API endpoints for auth, user, products, orders
  - HTTP status codes
  - User roles
  - Application routes
  - Local storage keys
  - Validation rules
  - UI constants
  - Error and success messages
  - Default values

### 2. Module Federation Configuration

#### Common MFE (`apps/common/craco.config.js`)

```javascript
exposes: {
  "./Constants": "./src/utils/constants.ts",
}
```

#### Auth MFE (`apps/auth/craco.config.js`)

```javascript
remotes: {
  common: "common@http://localhost:3002/remoteEntry.js",
}
```

### 3. TypeScript Support (`apps/auth/src/types/remotes.d.ts`)

- Complete type definitions for all constants
- Ensures type safety when using constants

### 4. Fallback Implementation

- Graceful fallback when common MFE is not available
- Prevents build failures during development

## How to Use

### In Auth MFE Components

```typescript
// Import constants from common MFE with fallback
let Constants: any;
try {
  Constants = require("common/Constants").default;
} catch (error) {
  console.warn("Common MFE not available, using fallback constants");
  // Fallback constants...
}

// Use constants
const loginUrl = Constants.API_ENDPOINTS.AUTH.LOGIN;
const successStatus = Constants.HTTP_STATUS.OK;
```

### In Utility Functions (`apps/auth/src/utils/authUtils.ts`)

```typescript
// Example utility functions using constants
export const validateEmail = (email: string): boolean => {
  return Constants.VALIDATION_RULES.EMAIL.test(email);
};

export const getAuthToken = (): string | null => {
  return localStorage.getItem(Constants.STORAGE_KEYS.AUTH_TOKEN);
};
```

## Testing the Setup

### 1. Start the Applications

```bash
# Terminal 1 - Start Common MFE
cd apps/common && npm start

# Terminal 2 - Start Auth MFE
cd apps/auth && npm start
```

### 2. Access the Test Page

- Navigate to: `http://localhost:3001/constants-test`
- Or click the "Constants Test" link in the header

### 3. Verify Constants are Working

The test page will show:

- ✅ Constants loaded successfully
- API endpoints values
- HTTP status codes
- Storage keys
- Validation rules
- Error messages
- Complete constants data

## Available Constants

### API_ENDPOINTS

```typescript
API_ENDPOINTS: {
  AUTH: {
    LOGIN: "/api/auth/login",
    REGISTER: "/api/auth/register",
    LOGOUT: "/api/auth/logout",
    REFRESH: "/api/auth/refresh",
  },
  USER: { /* ... */ },
  PRODUCTS: { /* ... */ },
  ORDERS: { /* ... */ },
}
```

### HTTP_STATUS

```typescript
HTTP_STATUS: {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
}
```

### STORAGE_KEYS

```typescript
STORAGE_KEYS: {
  AUTH_TOKEN: "auth_token",
  USER_DATA: "user_data",
  CART_ITEMS: "cart_items",
  THEME: "theme",
  LANGUAGE: "language",
}
```

### VALIDATION_RULES

```typescript
VALIDATION_RULES: {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD_MIN_LENGTH: 8,
  USERNAME_MIN_LENGTH: 3,
  PHONE_REGEX: /^\+?[\d\s\-\(\)]+$/,
}
```

## Benefits

1. **Centralized Management**: All shared constants in one place
2. **Type Safety**: Full TypeScript support with proper types
3. **Consistency**: Ensures all MFEs use the same values
4. **Maintainability**: Easy to update constants across the entire application
5. **Reusability**: Other MFEs can easily consume these constants
6. **Fallback Support**: Graceful degradation when common MFE is unavailable

## Troubleshooting

### Module Not Found Error

If you see "Can't resolve 'common/Constants'" error:

1. **Ensure Common MFE is running**: `http://localhost:3002` should be accessible
2. **Check Module Federation**: Verify remote entry is available at `http://localhost:3002/remoteEntry.js`
3. **Restart Applications**: Sometimes a restart is needed after configuration changes
4. **Check Ports**: Ensure no port conflicts

### Constants Not Loading

1. **Check Console**: Look for warnings about fallback constants
2. **Verify Network**: Ensure Auth MFE can reach Common MFE
3. **Check CORS**: Ensure no CORS issues between MFEs

## Next Steps

1. **Add More MFEs**: Other MFEs can consume these constants by adding the common MFE as a remote
2. **Extend Constants**: Add more constants as needed for the application
3. **Add Validation**: Consider adding runtime validation for constants
4. **Versioning**: Plan for constants versioning as the application grows
