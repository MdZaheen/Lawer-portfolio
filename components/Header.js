"use client";
import React, { useState } from "react";
import "../public/styles/header.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Header = () => {
  const [dropdown, setDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  const menuItems = {
    pages: ["About Us", "Our Team", "Testimonials"],
    services: ["Insurance Law", "Family Law", "Real Estate Law", "Corporate Law"],
  };

  return (
    <header className="header">
      <div className="logo">Law & Order</div>
      <nav className="nav">
        <ul className="nav-list">
          <li><a href="#" className="nav-link">Home</a></li>

          {["pages", "services"].map((menu) => (
            <li
              key={menu}
              className="dropdown"
              onMouseEnter={() => toggleDropdown(menu)}
              onMouseLeave={() => toggleDropdown(null)}
            >
              <a href="#" className="nav-link">
                {menu.charAt(0).toUpperCase() + menu.slice(1)}
                {dropdown === menu ? <FaChevronUp /> : <FaChevronDown />}
              </a>

              {dropdown === menu && (
                <ul className="dropdown-menu" role="menu">
                  {menuItems[menu].map((item, index) => (
                    <li key={index} className="dropdown-item">
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          <li><a href="#" className="nav-link">News</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;