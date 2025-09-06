import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <div className="text-9xl font-extrabold text-gray-200">404</div>
        <h1 className="mt-4 text-2xl font-bold text-gray-800">Page not found</h1>
        <p className="mt-2 text-gray-600">
          The page you are looking for might have been removed or temporarily unavailable.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-block bg-[#1976D2] text-white px-6 py-3 rounded-lg hover:bg-[#1565c0]"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
