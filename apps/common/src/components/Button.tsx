import React from "react";
import "./Button.css";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "outline";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  onClick,
  type = "button",
  className = "",
}) => {
  const baseClass = "btn";
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;
  const loadingClass = loading ? "btn-loading" : "";
  const disabledClass = disabled ? "btn-disabled" : "";

  const buttonClass =
    `${baseClass} ${variantClass} ${sizeClass} ${loadingClass} ${disabledClass} ${className}`.trim();

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled || loading}
      type={type}>
      {loading && <span className="btn-spinner"></span>}
      {children}
    </button>
  );
};

export default Button;
