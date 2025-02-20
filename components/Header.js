import React from 'react';

import { Search, ChevronDown } from 'lucide-react';
import '../public/styles/header.css';

function Header() {
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <a  className="logo">
            HASHMATH PASHA 
          </a>
          
          <div className="nav-links">
            <NavLink href="/">Home</NavLink>
            
            <div className="dropdown">
              <NavLink href="/pages">
                Pages
                <ChevronDown className="chevron-icon" />
              </NavLink>
              <div className="dropdown-content">
                <a href="/about" className="dropdown-link">About Us</a>
                <a href="/case-studies" className="dropdown-link">Case Studies</a>
                <a href="/attorneys" className="dropdown-link">Attorneys</a>
              </div>
            </div>

            <div className="dropdown">
              <NavLink href="/services">
                Services
                <ChevronDown className="chevron-icon" />
              </NavLink>
              <div className="dropdown-content">
                <a href="/insurance-law" className="dropdown-link">Insurance Law</a>
                <a href="/family-law" className="dropdown-link">Family Law</a>
                <a href="/real-estate-law" className="dropdown-link">Real Estate Law</a>
                <a href="/corporate-law" className="dropdown-link">Corporate Law</a>
              </div>
            </div>

            <NavLink href="/news">News</NavLink>
            {/* <Search className="search-icon" /> */}
          </div>
        </nav>
      </header>
    </div>
  );
}

function NavLink({ href, children }) {
  return (
    <a href={href} className="nav-link">
      <span>{children}</span>
      <span></span>
    </a>
  );
}

export default Header;