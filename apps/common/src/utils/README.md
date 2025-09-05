# Common Constants

This directory contains shared constants that can be used across all micro-frontends in the e-commerce application.

## Usage

### In Common MFE

```javascript
import { API_ENDPOINTS, HTTP_STATUS, USER_ROLES } from "./constants";

// Use constants directly
const loginUrl = API_ENDPOINTS.AUTH.LOGIN;
const successStatus = HTTP_STATUS.OK;
const userRole = USER_ROLES.USER;
```

### In Other MFEs (e.g., Auth MFE)

```javascript
import Constants from "common/Constants";

// Use the default export
const loginUrl = Constants.API_ENDPOINTS.AUTH.LOGIN;
const successStatus = Constants.HTTP_STATUS.OK;

// Or import specific constants
import { API_ENDPOINTS, HTTP_STATUS } from "common/Constants";
```

## Available Constants

### API_ENDPOINTS

Contains all API endpoint URLs organized by feature:

- `AUTH`: Authentication endpoints (login, register, logout, refresh)
- `USER`: User management endpoints (profile, update)
- `PRODUCTS`: Product-related endpoints (list, detail, search)
- `ORDERS`: Order management endpoints (create, list, detail)

### HTTP_STATUS

Common HTTP status codes:

- `OK` (200)
- `CREATED` (201)
- `BAD_REQUEST` (400)
- `UNAUTHORIZED` (401)
- `FORBIDDEN` (403)
- `NOT_FOUND` (404)
- `INTERNAL_SERVER_ERROR` (500)

### USER_ROLES

User role definitions:

- `ADMIN`
- `USER`
- `GUEST`

### ROUTES

Application route constants:

- `HOME`, `LOGIN`, `REGISTER`
- `DASHBOARD`, `PROFILE`
- `PRODUCTS`, `CART`, `CHECKOUT`, `ORDERS`

### STORAGE_KEYS

Local storage key names:

- `AUTH_TOKEN`, `USER_DATA`
- `CART_ITEMS`, `THEME`, `LANGUAGE`

### VALIDATION_RULES

Common validation patterns and rules:

- `EMAIL`: Email regex pattern
- `PASSWORD_MIN_LENGTH`: Minimum password length
- `USERNAME_MIN_LENGTH`: Minimum username length
- `PHONE_REGEX`: Phone number regex pattern

### UI_CONSTANTS

UI-related constants:

- `MAX_FILE_SIZE`: Maximum file upload size
- `SUPPORTED_IMAGE_TYPES`: Supported image file types
- `PAGINATION`: Pagination settings
- `DEBOUNCE_DELAY`: Debounce delay for search
- `TOAST_DURATION`: Toast notification duration

### ERROR_MESSAGES

Standard error messages for common scenarios:

- `NETWORK_ERROR`, `UNAUTHORIZED`
- `VALIDATION_ERROR`, `SERVER_ERROR`, `NOT_FOUND`

### SUCCESS_MESSAGES

Standard success messages:

- `LOGIN_SUCCESS`, `REGISTER_SUCCESS`
- `LOGOUT_SUCCESS`, `UPDATE_SUCCESS`, `DELETE_SUCCESS`

### DEFAULTS

Default application settings:

- `THEME`, `LANGUAGE`, `CURRENCY`, `TIMEZONE`

## Module Federation Setup

The constants are exposed through Module Federation in the common MFE's `craco.config.js`:

```javascript
exposes: {
  "./Constants": "./src/utils/constants",
}
```

Other MFEs can consume these constants by adding the common MFE as a remote:

```javascript
remotes: {
  common: "common@http://localhost:3002/remoteEntry.js",
}
```

## TypeScript Support

For TypeScript projects, create a declaration file (`types/remotes.d.ts`) to get proper type support:

```typescript
declare module "common/Constants" {
  // Type definitions for all constants
}
```

## Best Practices

1. **Centralized Management**: All shared constants should be defined here to maintain consistency across MFEs
2. **Type Safety**: Use TypeScript declarations for better development experience
3. **Versioning**: When updating constants, ensure backward compatibility or coordinate updates across all MFEs
4. **Documentation**: Keep this README updated when adding new constants
5. **Testing**: Test constant usage in consuming MFEs to ensure proper module federation setup
