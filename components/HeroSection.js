import React from "react";
import "../public/styles/hero.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <h2>Protecting Your Rights In The Field Of Law & Order</h2>
      <div className="hero-images">
        <img src="/public/images/law1.jpg" alt="Law" />
        <img src="/public/images/law2.jpg" alt="Justice" />
        <img src="/public/images/law3.jpg" alt="Scales" />
        <img src="/public/images/law4.jpg" alt="Legal" />
      </div>
    </section>
  );
};
export default HeroSection;