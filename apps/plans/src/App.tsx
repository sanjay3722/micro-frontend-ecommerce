import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Types
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

// Plan Card Component
const PlanCard: React.FC<{
  plan: Plan;
  selectedPlan: SelectedPlan | null;
  onSelectPlan: (plan: Plan, interval: "monthly" | "yearly") => void;
  interval: "monthly" | "yearly";
}> = ({ plan, selectedPlan, onSelectPlan, interval }) => {
  const isSelected =
    selectedPlan?.plan.id === plan.id && selectedPlan?.interval === interval;
  const isPopular = plan.popular;

  const getPrice = () => {
    if (interval === "yearly" && plan.discount) {
      return plan.price * 12 * (1 - plan.discount / 100);
    }
    return plan.price;
  };

  const getDisplayPrice = () => {
    const price = getPrice();
    return interval === "yearly" ? price / 12 : price;
  };

  return (
    <div
      className={`relative p-6 rounded-xl border-2 transition-all duration-300 ${
        isSelected
          ? "border-blue-500 bg-blue-50 shadow-lg"
          : "border-gray-200 bg-white hover:border-gray-300"
      } ${isPopular ? "ring-2 ring-blue-500 ring-opacity-50" : ""}`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
        <div className="mb-2">
          <span className="text-4xl font-bold text-blue-600">
            ${getDisplayPrice().toFixed(2)}
          </span>
          <span className="text-gray-600">
            /{interval === "monthly" ? "month" : "month"}
          </span>
        </div>
        {interval === "yearly" && plan.discount && (
          <div className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
            Save {plan.discount}%
          </div>
        )}
      </div>

      <p className="text-gray-600 text-center mb-6">{plan.description}</p>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-3 text-lg">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
          isSelected
            ? "bg-blue-500 text-white"
            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
        }`}
        onClick={() => onSelectPlan(plan, interval)}>
        {isSelected ? "Selected" : "Select Plan"}
      </button>
    </div>
  );
};

// Plans List Component
const PlansList: React.FC = () => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<SelectedPlan | null>(null);
  const [interval, setInterval] = useState<"monthly" | "yearly">("monthly");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      setLoading(true);
      // Mock API call - in real app, this would be a real API
      const response = await fetch("/api/plans");

      if (response.ok) {
        const data = await response.json();
        setPlans(data);
      } else {
        // Fallback to mock data if API fails
        setPlans(mockPlans);
      }
    } catch (err) {
      // Fallback to mock data
      setPlans(mockPlans);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectPlan = (
    plan: Plan,
    selectedInterval: "monthly" | "yearly"
  ) => {
    setSelectedPlan({ plan, interval: selectedInterval });

    // Save selected plan to localStorage
    localStorage.setItem(
      "selectedPlan",
      JSON.stringify({ plan, interval: selectedInterval })
    );

    // Mock API call to save selection
    fetch("/api/selected-plan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ plan, interval: selectedInterval }),
    }).catch((err) => {
      console.error("Error saving plan selection:", err);
    });
  };

  const handleProceedToCheckout = () => {
    if (selectedPlan) {
      window.location.href = "/checkout";
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-96 gap-5">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="text-lg text-gray-600">Loading plans...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-96 gap-5 text-center">
        <p className="text-red-600">Error loading plans: {error}</p>
        <button
          onClick={fetchPlans}
          className="px-6 py-3 bg-blue-500 text-white border-none rounded-lg cursor-pointer hover:bg-blue-600 transition-colors">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-5">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Choose Your Plan
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Select the perfect plan for your needs
        </p>

        <div className="flex items-center justify-center gap-4">
          <span
            className={`text-sm font-medium ${
              interval === "monthly" ? "text-blue-600" : "text-gray-500"
            }`}>
            Monthly
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={interval === "yearly"}
              onChange={(e) =>
                setInterval(e.target.checked ? "yearly" : "monthly")
              }
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
          <span
            className={`text-sm font-medium ${
              interval === "yearly" ? "text-blue-600" : "text-gray-500"
            }`}>
            Yearly
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            selectedPlan={selectedPlan}
            onSelectPlan={handleSelectPlan}
            interval={interval}
          />
        ))}
      </div>

      {selectedPlan && (
        <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Selected Plan: {selectedPlan.plan.name}
          </h3>
          <p className="text-gray-600 mb-4">
            Price: $
            {(selectedPlan.interval === "yearly"
              ? selectedPlan.plan.price * 12
              : selectedPlan.plan.price
            ).toFixed(2)}
            /{selectedPlan.interval}
          </p>
          <button
            className="px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            onClick={handleProceedToCheckout}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

// Mock data for development
const mockPlans: Plan[] = [
  {
    id: 1,
    name: "Basic",
    description: "Perfect for individuals getting started",
    price: 9.99,
    interval: "monthly",
    features: [
      "Up to 5 products",
      "Basic analytics",
      "Email support",
      "Standard templates",
    ],
  },
  {
    id: 2,
    name: "Pro",
    description: "Great for growing businesses",
    price: 29.99,
    interval: "monthly",
    features: [
      "Up to 50 products",
      "Advanced analytics",
      "Priority support",
      "Custom templates",
      "API access",
      "Team collaboration",
    ],
    popular: true,
    discount: 20,
  },
  {
    id: 3,
    name: "Enterprise",
    description: "For large organizations with advanced needs",
    price: 99.99,
    interval: "monthly",
    features: [
      "Unlimited products",
      "Enterprise analytics",
      "24/7 phone support",
      "Custom integrations",
      "Advanced API",
      "Dedicated account manager",
      "SLA guarantee",
      "Custom branding",
    ],
    discount: 30,
  },
];

// Main Plans App Component
const PlansApp = () => {
  return (
    <Routes>
      <Route path="/" element={<PlansList />} />
      <Route path="/*" element={<PlansList />} />
    </Routes>
  );
};

export default PlansApp;
