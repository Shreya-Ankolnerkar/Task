import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          ClientConnect
        </Link>

        <div className="nav-hamburger" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${open ? "open" : ""}`}>
    
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/newsletter">Newsletter</Link>
          </li>
          <li>
            <Link to="/admin" className="admin-btn">
              Admin Panel
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
