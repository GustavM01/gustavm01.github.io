import React from "react";
import "./Button.css";

function Button({
  children,
  className = "",
  variant = "primary",
  size = "md",
  href,
  ...props
}) {
  if (href)
    return (
      <a
        href={href}
        className={`btn btn-${variant} btn-${size} ${className}`}
        {...props}
      >
        {children}
      </a>
    );

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
