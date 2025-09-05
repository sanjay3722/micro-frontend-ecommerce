import React, { useState, useEffect } from "react";

// Import constants from common MFE with fallback
let Constants: any;
try {
  Constants = require("common/Constants").default;
} catch (error) {
  console.warn("Common MFE not available, using fallback constants");
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
    },
    STORAGE_KEYS: {
      AUTH_TOKEN: "auth_token",
      USER_DATA: "user_data",
    },
    ROUTES: {
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
    },
  };
}

const ConstantsTest: React.FC = () => {
  const [constantsLoaded, setConstantsLoaded] = useState(false);
  const [constantsData, setConstantsData] = useState<any>(null);

  useEffect(() => {
    if (Constants) {
      setConstantsLoaded(true);
      setConstantsData(Constants);
      console.log("Constants loaded successfully:", Constants);
    }
  }, []);

  if (!constantsLoaded) {
    return (
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <div className="flex items-center">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-yellow-600 mr-2"></div>
          <span className="text-yellow-800">Loading constants...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Constants Test Component
      </h3>

      <div className="space-y-4">
        <div className="p-3 bg-green-50 border border-green-200 rounded">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-green-600 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-green-800 font-medium">
              Constants loaded successfully!
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 bg-blue-50 border border-blue-200 rounded">
            <h4 className="font-medium text-blue-800 mb-2">API Endpoints</h4>
            <div className="text-sm text-blue-700">
              <div>Login: {Constants.API_ENDPOINTS?.AUTH?.LOGIN || "N/A"}</div>
              <div>
                Register: {Constants.API_ENDPOINTS?.AUTH?.REGISTER || "N/A"}
              </div>
            </div>
          </div>

          <div className="p-3 bg-purple-50 border border-purple-200 rounded">
            <h4 className="font-medium text-purple-800 mb-2">HTTP Status</h4>
            <div className="text-sm text-purple-700">
              <div>OK: {Constants.HTTP_STATUS?.OK || "N/A"}</div>
              <div>
                Unauthorized: {Constants.HTTP_STATUS?.UNAUTHORIZED || "N/A"}
              </div>
            </div>
          </div>

          <div className="p-3 bg-indigo-50 border border-indigo-200 rounded">
            <h4 className="font-medium text-indigo-800 mb-2">Storage Keys</h4>
            <div className="text-sm text-indigo-700">
              <div>
                Auth Token: {Constants.STORAGE_KEYS?.AUTH_TOKEN || "N/A"}
              </div>
              <div>User Data: {Constants.STORAGE_KEYS?.USER_DATA || "N/A"}</div>
            </div>
          </div>

          <div className="p-3 bg-teal-50 border border-teal-200 rounded">
            <h4 className="font-medium text-teal-800 mb-2">Validation Rules</h4>
            <div className="text-sm text-teal-700">
              <div>
                Min Password Length:{" "}
                {Constants.VALIDATION_RULES?.PASSWORD_MIN_LENGTH || "N/A"}
              </div>
              <div>
                Email Pattern:{" "}
                {Constants.VALIDATION_RULES?.EMAIL?.toString() || "N/A"}
              </div>
            </div>
          </div>
        </div>

        <div className="p-3 bg-gray-50 border border-gray-200 rounded">
          <h4 className="font-medium text-gray-800 mb-2">Error Messages</h4>
          <div className="text-sm text-gray-700 space-y-1">
            <div>
              Network Error: {Constants.ERROR_MESSAGES?.NETWORK_ERROR || "N/A"}
            </div>
            <div>
              Unauthorized: {Constants.ERROR_MESSAGES?.UNAUTHORIZED || "N/A"}
            </div>
            <div>
              Validation Error:{" "}
              {Constants.ERROR_MESSAGES?.VALIDATION_ERROR || "N/A"}
            </div>
          </div>
        </div>

        <details className="p-3 bg-gray-50 border border-gray-200 rounded">
          <summary className="font-medium text-gray-800 cursor-pointer">
            View All Constants Data
          </summary>
          <pre className="mt-2 text-xs text-gray-600 overflow-auto max-h-40">
            {JSON.stringify(constantsData, null, 2)}
          </pre>
        </details>
      </div>
    </div>
  );
};

export default ConstantsTest;
