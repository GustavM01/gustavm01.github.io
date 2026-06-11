import React from "react";
import "./NotFound.css";
import Button from "../ui/Button/Button";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <Link to={"/"}>
        <Button variant="outline">Back to Home</Button>
      </Link>
    </div>
  );
}

export default NotFound;
