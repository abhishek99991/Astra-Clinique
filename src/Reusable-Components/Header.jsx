import React, { useState } from "react";
import logo from "../images/astra-logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <div className="container">
        <nav className="flex al-center space-bw">
          <div className="logo" onClick={() => navigate("/")}>
            <img src={logo} alt="" />
          </div>
          <div className={`hf-nav-menu col-33 ${menuOpen ? "show-menu" : ""}`}>
            <ul>
              <li
                className={location.pathname === "/" ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                <Link to="/">Home</Link>
              </li>

              <li
                className={location.pathname === "/about" ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                <Link to="/about">About</Link>
              </li>

              <li
                className={location.pathname === "/services" ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                <Link to="/services">Services</Link>
              </li>

              <li
                className={location.pathname === "/contact" ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="book-now">
            <button>Book an appointment</button>
          </div>
          <div
            className={`hf-menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
