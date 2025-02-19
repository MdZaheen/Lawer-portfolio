import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import '../public/styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-section brand-section">
          <h2>Law & Order</h2>
          <p className="footer-description">
            Elit Senectus Egestas Blandit Diam In Sed Tincidunt Nisi. Hendrerit Gravida Eget Tristique Morbi.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon"><Facebook size={20} /></a>
            <a href="#" className="social-icon"><Instagram size={20} /></a>
            <a href="#" className="social-icon"><Twitter size={20} /></a>
            <a href="#" className="social-icon"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Connect Section */}
        <div className="footer-section">
          <h2>Connect</h2>
          <div className="contact-info">
            <p><strong>A:</strong> 400 Broad St, Seattle, Western Australia, 98109</p>
            <p><strong>E:</strong> Lawandorder@Gmail.Com</p>
            <p><strong>P:</strong> +1 (605) 475 6968</p>
          </div>
        </div>

        {/* Quick Links Section */}
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

        {/* Newsletter Section */}
        <div className="footer-section">
          <h2>Newsletter</h2>
          <form className="newsletter-form">
            {/* <input type="email" placeholder="Enter E-Mail" required /> */}
            <div className="privacy-checkbox">
              <input type="checkbox" id="privacy-policy" />
              <label htmlFor="privacy-policy">I Agree To The Privacy Policy</label>
            </div>
            <button type="submit" className="subscribe-button">
              SUBSCRIBE <span>→</span>
            </button>
          </form>
        </div>
      </div>
    </footer>
  );

};
<style>
@import url('https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>

export default Footer;
