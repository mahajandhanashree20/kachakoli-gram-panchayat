import React from "react";
import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-container">
        <div className="top-social">

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/1VHrzhC2cU/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/gpkachkolimurbad?stkn=NjdjdWF1emR6Y2hv"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

        </div>
      </div>
    </div>
  );
}

export default TopBar;