import React from "react";
import "./Button.css";

function Button({
  children,
  className = "",
  variant = "primary",
  size = "md",
  ...props
}) {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
