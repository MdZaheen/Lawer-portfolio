import React from "react";
import "../public/styles/hero.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="lawhead">Protecting Your Rights In The Field Of Law & Order</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Massa scelerisque enim dui tristique massa hendrerit.
          Phasellus est aliquet suspendisse sed et cras viverra vitae. Ipsum in tempor turpis ut aliquet tincidunt.
        </p>
        <button className="hero-button">BOOK APPOINTMENT →</button>
      </div>
      <div className="image-container">
        <img src="/images/image1.png" alt="Law Image 1" className="image1" />
        <img src="/images/image2.png" alt="Law Image 2" className="image2" />
        <img src="/images/image3.png" alt="Law Image 3" className="image3" />
        <img src="/images/image4.png" alt="Law Image 4" className="image4" />
      </div>
    </div>
  );
};

export default HeroSection;
