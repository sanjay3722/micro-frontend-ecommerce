import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

interface NavbarProps {
  items?: Array<{
    label: string;
    path: string;
    icon?: string;
  }>;
}

const Navbar: React.FC<NavbarProps> = ({
  items = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/landing" },
    { label: "Plans", path: "/plans" },
    { label: "Checkout", path: "/checkout" },
  ],
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-logo">
            E-commerce
          </Link>
        </div>

        <div className={`navbar-menu ${isOpen ? "navbar-menu-open" : ""}`}>
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`navbar-item ${
                location.pathname === item.path ? "navbar-item-active" : ""
              }`}
              onClick={closeMenu}>
              {item.icon && <span className="navbar-icon">{item.icon}</span>}
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className={`navbar-toggle ${isOpen ? "navbar-toggle-open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu">
          <span className="navbar-toggle-line"></span>
          <span className="navbar-toggle-line"></span>
          <span className="navbar-toggle-line"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
