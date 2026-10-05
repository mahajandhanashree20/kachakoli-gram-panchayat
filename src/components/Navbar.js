import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="navbar-menu">

          <Link to="/" className="navbar-link">
            मुखपृष्ठ
          </Link>

          <Link to="/about" className="navbar-link">
            आमच्याबद्दल
          </Link>

          <Link to="/committee" className="navbar-link">
            कार्यकारणी
          </Link>

          <Link to="/works" className="navbar-link">
            केलेली कामे
          </Link>

          <Link to="/contact" className="navbar-link">
            संपर्क
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;