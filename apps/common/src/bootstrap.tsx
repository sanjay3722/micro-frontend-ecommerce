import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// This is just for development - the components are exposed via Module Federation
root.render(
  <React.StrictMode>
    <div className="p-5">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Common Components
      </h1>
      <p className="text-gray-600 mb-4">
        This app exposes shared UI components via Module Federation.
      </p>
      <p className="text-gray-600 mb-6">Components available:</p>
      <ul className="space-y-2 text-gray-700">
        <li className="flex items-center">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
          Header
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
          Footer
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
          Navbar
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
          Button
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
          Input
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
          Card
        </li>
      </ul>
    </div>
  </React.StrictMode>
);
