import React, { useState, useEffect } from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";

// Types
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface Plan {
  id: number;
  name: string;
  description: string;
  price: number;
  interval: "monthly" | "yearly";
  features: string[];
  popular?: boolean;
  discount?: number;
}

interface SelectedPlan {
  plan: Plan;
  interval: "monthly" | "yearly";
}

interface PaymentInfo {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
}

interface ShippingInfo {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

// Cart Item Component
const CartItemComponent: React.FC<{
  item: CartItem;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
}> = ({ item, onUpdateQuantity, onRemoveItem }) => {
  return (
    <div className="flex items-center p-4 border border-gray-200 rounded-lg mb-4">
      <div className="w-20 h-20 mr-4">
        <img
          src={item.product.image}
          alt={item.product.name}
          className="w-full h-full object-cover rounded"
        />
      </div>
      <div className="flex-1 mr-4">
        <h4 className="font-semibold text-gray-800 mb-1">{item.product.name}</h4>
        <p className="text-sm text-gray-600 mb-2">{item.product.description}</p>
        <div className="text-lg font-bold text-blue-600">${item.product.price.toFixed(2)}</div>
      </div>
      <div className="flex items-center mr-4">
        <button
          className="w-8 h-8 bg-gray-200 text-gray-700 rounded-l flex items-center justify-center hover:bg-gray-300 disabled:opacity-50"
          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
          disabled={item.quantity <= 1}
        >
          -
        </button>
        <span className="w-12 h-8 bg-gray-100 flex items-center justify-center text-center">
          {item.quantity}
        </span>
        <button
          className="w-8 h-8 bg-gray-200 text-gray-700 rounded-r flex items-center justify-center hover:bg-gray-300"
          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
        >
          +
        </button>
      </div>
      <div className="text-lg font-bold text-gray-800 mr-4">
        ${(item.product.price * item.quantity).toFixed(2)}
      </div>
      <button
        className="text-red-500 hover:text-red-700 text-xl font-bold"
        onClick={() => onRemoveItem(item.product.id)}
      >
        ✕
      </button>
    </div>
  );
};

// Checkout Form Component
const CheckoutForm: React.FC<{
  shippingInfo: ShippingInfo;
  paymentInfo: PaymentInfo;
  onShippingChange: (field: keyof ShippingInfo, value: string) => void;
  onPaymentChange: (field: keyof PaymentInfo, value: string) => void;
}> = ({ shippingInfo, paymentInfo, onShippingChange, onPaymentChange }) => {
  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Shipping Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              value={shippingInfo.firstName}
              onChange={(e) => onShippingChange("firstName", e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              value={shippingInfo.lastName}
              onChange={(e) => onShippingChange("lastName", e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={shippingInfo.email}
            onChange={(e) => onShippingChange("email", e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <input
            type="text"
            value={shippingInfo.address}
            onChange={(e) => onShippingChange("address", e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
            <input
              type="text"
              value={shippingInfo.city}
              onChange={(e) => onShippingChange("city", e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
            <input
              type="text"
              value={shippingInfo.state}
              onChange={(e) => onShippingChange("state", e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
            <input
              type="text"
              value={shippingInfo.zipCode}
              onChange={(e) => onShippingChange("zipCode", e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
            <input
              type="text"
              value={shippingInfo.country}
              onChange={(e) => onShippingChange("country", e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Payment Information</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
          <input
            type="text"
            value={paymentInfo.cardNumber}
            onChange={(e) => onPaymentChange("cardNumber", e.target.value)}
            placeholder="1234 5678 9012 3456"
            maxLength={19}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Card Holder Name</label>
          <input
            type="text"
            value={paymentInfo.cardHolder}
            onChange={(e) => onPaymentChange("cardHolder", e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
            <input
              type="text"
              value={paymentInfo.expiryDate}
              onChange={(e) => onPaymentChange("expiryDate", e.target.value)}
              placeholder="MM/YY"
              maxLength={5}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
            <input
              type="text"
              value={paymentInfo.cvv}
              onChange={(e) => onPaymentChange("cvv", e.target.value)}
              placeholder="123"
              maxLength={4}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Checkout Component
const Checkout: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<SelectedPlan | null>(null);
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
  });
  const [loading, setLoading] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  useEffect(() => {
    // Load cart items from localStorage
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }

    // Load selected plan from localStorage
    const savedPlan = localStorage.getItem("selectedPlan");
    if (savedPlan) {
      setSelectedPlan(JSON.parse(savedPlan));
    }
  }, []);

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(productId);
      return;
    }

    const updatedCart = cartItems.map((item) =>
      item.product.id === productId ? { ...item, quantity: newQuantity } : item,
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (productId: number) => {
    const updatedCart = cartItems.filter((item) => item.product.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const getSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  const getPlanTotal = () => {
    if (!selectedPlan) return 0;
    return selectedPlan.interval === "yearly"
      ? selectedPlan.plan.price * 12
      : selectedPlan.plan.price;
  };

  const getTotal = () => {
    return getSubtotal() + getPlanTotal();
  };

  const handleShippingChange = (field: keyof ShippingInfo, value: string) => {
    setShippingInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handlePaymentChange = (field: keyof PaymentInfo, value: string) => {
    setPaymentInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handlePlaceOrder = async () => {
    setLoading(true);

    try {
      // Mock API call to place order
      const orderData = {
        cartItems,
        selectedPlan,
        shippingInfo,
        paymentInfo,
        total: getTotal(),
      };

      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        // Clear cart and selected plan
        localStorage.removeItem("cart");
        localStorage.removeItem("selectedPlan");
        setCartItems([]);
        setSelectedPlan(null);
        setOrderComplete(true);
      } else {
        throw new Error("Failed to place order");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (orderComplete) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
          <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
            ✓
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Placed Successfully!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. You will receive a confirmation email shortly.
          </p>
          <button
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            onClick={() => (window.location.href = "/landing")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0 && !selectedPlan) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add some products to your cart to continue shopping.</p>
          <button
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            onClick={() => (window.location.href = "/landing")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>

          {cartItems.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shopping Cart</h2>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <CartItemComponent
                    key={item.product.id}
                    item={item}
                    onUpdateQuantity={updateQuantity}
                    onRemoveItem={removeItem}
                  />
                ))}
              </div>
            </div>
          )}

          {selectedPlan && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Selected Plan</h2>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {selectedPlan.plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{selectedPlan.plan.description}</p>
                <div className="text-2xl font-bold text-blue-600">
                  ${getPlanTotal().toFixed(2)}/{selectedPlan.interval}
                </div>
              </div>
            </div>
          )}

          <CheckoutForm
            shippingInfo={shippingInfo}
            paymentInfo={paymentInfo}
            onShippingChange={handleShippingChange}
            onPaymentChange={handlePaymentChange}
          />
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg border border-gray-200 sticky top-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Order Summary</h3>

            {cartItems.length > 0 && (
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Subtotal ({cartItems.length} items)</span>
                <span className="font-semibold">${getSubtotal().toFixed(2)}</span>
              </div>
            )}

            {selectedPlan && (
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Plan: {selectedPlan.plan.name}</span>
                <span className="font-semibold">${getPlanTotal().toFixed(2)}</span>
              </div>
            )}

            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>${getTotal().toFixed(2)}</span>
              </div>
            </div>

            <button
              className="w-full py-3 px-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              onClick={handlePlaceOrder}
              disabled={loading || cartItems.length === 0}
            >
              {loading ? "Processing..." : "Place Order"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Checkout App Component
const CheckoutApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Checkout />} />
      <Route path="/*" element={<Checkout />} />
    </Routes>
  );
};

export default CheckoutApp;
