import React, { forwardRef } from "react";
import "./Input.css";

interface InputProps {
  type?: "text" | "email" | "password" | "number" | "tel" | "url";
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  label?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  name?: string;
  id?: string;
  autoComplete?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      placeholder,
      value,
      onChange,
      onBlur,
      onFocus,
      label,
      error,
      disabled = false,
      required = false,
      className = "",
      name,
      id,
      autoComplete,
    },
    ref
  ) => {
    const inputId = id || name;
    const hasError = !!error;

    return (
      <div
        className={`input-wrapper ${
          hasError ? "input-error" : ""
        } ${className}`}>
        {label && (
          <label htmlFor={inputId} className="input-label">
            {label}
            {required && <span className="required">*</span>}
          </label>
        )}
        <input
          ref={ref}
          type={type}
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          autoComplete={autoComplete}
          className={`input-field ${hasError ? "input-field-error" : ""}`}
        />
        {error && <div className="input-error-message">{error}</div>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
