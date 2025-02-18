import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import '../public/styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Law & Order</h2>
          <p className="footer-description">
            Elit Senectus Egestas Blandit Diam In Sed Tincidunt Nisi. Hendrerit Gravida Eget Tristique Morbi.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <Facebook size={20} />
            </a>
            <a href="#" className="social-icon">
              <Instagram size={20} />
            </a>
            <a href="#" className="social-icon">
              <Twitter size={20} />
            </a>
            <a href="#" className="social-icon">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h2>Connect</h2>
          <div className="contact-info">
            <p>A: 400 Broad St, Seattle, Western Australia, 98109</p>
            <p>E: Lawandorder@Gmail.Com</p>
            <p>+1 (605) 475 6968</p>
          </div>
        </div>

        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul className="quick-links">
            <li><a href="#">About Law & Order</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Latest Articles</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h2>Newsletter</h2>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter E-Mail"
            />
            <div className="privacy-checkbox">
              <input
                type="checkbox"
                id="privacy-policy"
              />
              <label htmlFor="privacy-policy">
                I Agree To The Privacy Policy
              </label>
            </div>
            <button type="submit" className="subscribe-button">
              SUBSCRIBE
              <span>→</span>
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;