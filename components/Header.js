"use client";
import React, { useState } from "react";
import "../public/styles/header.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Updated icons

const Header = () => {
  const [pagesOpen, setPagesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">Law & Order</div>
      <nav className="nav">
        <ul>
          <li><a href="#" className="nav-link">Home</a></li>
          <li
            className="dropdown"
            onMouseEnter={() => setPagesOpen(true)}
            onMouseLeave={() => setPagesOpen(false)}
          >
            <a href="#" className="nav-link">
              Pages {pagesOpen ? <FaChevronUp /> : <FaChevronDown />}
            </a>
            {pagesOpen && (
              <ul className="dropdown-menu">
                <li><a href="#" className="dropdown-item">About Us</a></li>
                <li><a href="#" className="dropdown-item">Our Team</a></li>
                <li><a href="#" className="dropdown-item">Testimonials</a></li>
              </ul>
            )}
          </li>
          <li
            className="dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <a href="#" className="nav-link">
              Services {servicesOpen ? <FaChevronUp /> : <FaChevronDown />}
            </a>
            {servicesOpen && (
              <ul className="dropdown-menu">
                <li><a href="#" className="dropdown-item">Insurance Law</a></li>
                <li><a href="#" className="dropdown-item">Family Law</a></li>
                <li><a href="#" className="dropdown-item">Real Estate Law</a></li>
                <li><a href="#" className="dropdown-item">Corporate Law</a></li>
              </ul>
            )}
          </li>
          <li><a href="#" className="nav-link">News</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
