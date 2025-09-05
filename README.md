# Micro-Frontend E-commerce Application

A modern e-commerce application built using React micro-frontends with Webpack Module Federation and CRACO configuration.

## 🏗️ Architecture

This project follows a micro-frontend architecture with the following structure:

- **Host App** (Port 3000) - Main container application
- **Auth App** (Port 3001) - Authentication micro-frontend
- **Common App** (Port 3002) - Shared UI components
- **Landing App** (Port 3003) - Product listing and catalog
- **Plans App** (Port 3004) - Subscription plans
- **Checkout App** (Port 3005) - Cart and payment processing

## 🚀 Features

### ✅ Implemented Features

1. **Module Federation Setup**

   - Webpack Module Federation configuration for each micro-frontend
   - Shared dependencies (React, React-DOM, React Router)
   - Dynamic loading of remote components

2. **Authentication Module**

   - Login and signup forms
   - JWT token storage in localStorage
   - User session management
   - Protected routes

3. **Common UI Components**

   - Reusable Header, Footer, Navbar components
   - Button, Input, Card components with multiple variants
   - Responsive design with modern styling

4. **Product Landing**

   - Product grid with mock data
   - Add to cart functionality
   - Product ratings and availability status
   - Responsive product cards

5. **Subscription Plans**

   - Monthly/Yearly plan toggle
   - Plan comparison with features
   - Popular plan highlighting
   - Discount calculations

6. **Checkout Process**
   - Shopping cart management
   - Quantity controls and item removal
   - Shipping and payment forms
   - Order summary with totals
   - Order completion flow

## 🛠️ Technology Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Webpack 5 with Module Federation
- **Configuration**: CRACO (Create React App Configuration Override)
- **Routing**: React Router v6
- **Styling**: CSS with modern design patterns
- **Package Management**: npm workspaces
- **Development**: Concurrent development servers

## 📦 Installation

### Prerequisites

- Node.js >= 16.0.0
- npm >= 8.0.0

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd micro-frontend-ecommerce
   ```

2. **Install dependencies**

   ```bash
   npm run install:all
   ```

3. **Start development servers**

   **Option 1: Start all apps concurrently**

   ```bash
   npm run dev
   ```

   **Option 2: Start individual apps**

   ```bash
   # Start host app (main container)
   npm run start:host

   # Start individual micro-frontends
   npm run start:auth
   npm run start:common
   npm run start:landing
   npm run start:plans
   npm run start:checkout
   ```

## 🌐 Access Points

Once all servers are running, you can access:

- **Host Application**: http://localhost:3000
- **Auth App**: http://localhost:3001
- **Common App**: http://localhost:3002
- **Landing App**: http://localhost:3003
- **Plans App**: http://localhost:3004
- **Checkout App**: http://localhost:3005

## 🔧 Available Scripts

### Root Level Scripts

- `npm run start` - Start the host application
- `npm run dev` - Start all applications concurrently
- `npm run build` - Build all applications
- `npm run test` - Run tests for all applications
- `npm run clean` - Clean all node_modules

### Individual App Scripts

- `npm run start:host` - Start host app
- `npm run start:auth` - Start auth app
- `npm run start:common` - Start common app
- `npm run start:landing` - Start landing app
- `npm run start:plans` - Start plans app
- `npm run start:checkout` - Start checkout app

## 🧪 Testing

Run tests for all applications:

```bash
npm run test
```

Run tests for specific applications:

```bash
npm run test:host
npm run test:auth
npm run test:common
npm run test:landing
npm run test:plans
npm run test:checkout
```

## 📁 Project Structure

```
micro-frontend-ecommerce/
├── apps/
│   ├── host/                 # Main container application
│   ├── auth/                 # Authentication micro-frontend
│   ├── common/               # Shared UI components
│   ├── landing/              # Product catalog
│   ├── plans/                # Subscription plans
│   └── checkout/             # Cart and payment
├── packages/                 # Shared packages (future use)
├── package.json             # Root package.json with workspaces
└── README.md               # This file
```

## 🔄 User Flow

1. **Authentication** → User logs in or signs up
2. **Product Browsing** → User browses products on landing page
3. **Add to Cart** → User adds products to cart
4. **Plan Selection** → User selects subscription plan (optional)
5. **Checkout** → User completes purchase with shipping/payment info
6. **Order Confirmation** → User receives order confirmation

## 🎨 Design System

The application uses a consistent design system with:

- **Color Palette**: Purple gradient theme (#667eea to #764ba2)
- **Typography**: System fonts with consistent sizing
- **Components**: Reusable UI components with variants
- **Responsive**: Mobile-first responsive design
- **Animations**: Smooth transitions and hover effects

## 🔐 Authentication

- JWT tokens stored in localStorage
- Protected routes based on authentication status
- User session management
- Automatic redirect to login for protected pages

## 🛒 Shopping Cart

- Cart data stored in localStorage
- Real-time cart updates
- Quantity controls
- Item removal functionality
- Cart persistence across sessions

## 💳 Payment Processing

- Mock payment form with validation
- Credit card input fields
- Shipping information collection
- Order summary with totals
- Order completion flow

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Individual App Builds

```bash
npm run build --workspace=host
npm run build --workspace=auth
npm run build --workspace=common
npm run build --workspace=landing
npm run build --workspace=plans
npm run build --workspace=checkout
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Troubleshooting

### Common Issues

1. **Port conflicts**: Ensure no other applications are using ports 3000-3005
2. **Module Federation errors**: Clear browser cache and restart development servers
3. **Build errors**: Run `npm run clean` and reinstall dependencies

### Development Tips

- Use the `npm run dev` command to start all applications at once
- Check browser console for Module Federation loading issues
- Ensure all micro-frontends are running before accessing the host app
- Use browser dev tools to inspect network requests and module loading

## 🔮 Future Enhancements

- [ ] Add unit tests with Jest and React Testing Library
- [ ] Implement MSW (Mock Service Worker) for API mocking
- [ ] Add state management (Redux/Zustand)
- [ ] Implement real payment processing
- [ ] Add product search and filtering
- [ ] Implement user reviews and ratings
- [ ] Add admin dashboard
- [ ] Implement real-time notifications
- [ ] Add PWA capabilities
- [ ] Implement internationalization (i18n)
# micro-frontend-ecommerce
