"use client";
import React, { useState } from "react";
import "../public/styles/header.css";

const Header = () => {
  const [pagesOpen, setPagesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">Law & Order</div>
      <nav className="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li
            className="dropdown"
            onMouseEnter={() => setPagesOpen(true)}
            onMouseLeave={() => setPagesOpen(false)}
          >
            <a href="#">Pages ▾</a>
            {pagesOpen && (
              <ul className="dropdown-menu">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">Testimonials</a></li>
              </ul>
            )}
          </li>
          <li
            className="dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <a href="#">Services ▾</a>
            {servicesOpen && (
              <ul className="dropdown-menu">
                <li><a href="#">Criminal Law</a></li>
                <li><a href="#">Family Law</a></li>
                <li><a href="#">Corporate Law</a></li>
              </ul>
            )}
          </li>
          <li><a href="#">News</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
