import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

interface HeaderProps {
  title?: string;
  showNav?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title = "E-commerce Store", showNav = true }) => {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/auth";
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-brand">
          <Link to="/" className="header-logo">
            {title}
          </Link>
        </div>

        {showNav && (
          <nav className="header-nav">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/landing" className="nav-link">
              Products
            </Link>
            <Link to="/plans" className="nav-link">
              Plans
            </Link>
            <Link to="/checkout" className="nav-link">
              Checkout
            </Link>
          </nav>
        )}

        <div className="header-actions">
          {user ? (
            <div className="user-section">
              <span className="user-name">Welcome, {user.name}</span>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/auth" className="auth-link">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
