import React from 'react';
import '../public/styles/kau.css';

const Know = () => {
  return (
    <section className="legal-section">
      <div className="hero-content-know">
        <h1 className="hero-title-k">
          Right to Equality (Article 14-18) - The Indian Constitution Ensures That Every Citizen Is Treated Equally
        </h1>
        <div className="line"></div>
        <div className="text-content">
          <div>
            <p className="hero-text">
              Lorem Ipsum Dolor Sit Amet Consectetur. Sagittis Diam At Congue In Aenean. Leo In Amet Rhoncus Sit Sit Lobortis.
              At Nunc A Tempor Aliquam Malesuada Mus Vitae. Dignissim Morbi Est Lectus Fringilla Tellus.
            </p>
          </div>
          <div>
            <p className="hero-text">
              In Lectus In Dolor Vulputate Ultricies Egestas Nulla. Nec Sit At Gravida Sagittis. Nulla Massa A Tortor Justo.
              Malesuada Donec Tristique Risus Pulvinar Sollicitudin Dictumst Vitae Hac. Interdum Consectetur Ipsum Ullamcorper
              Quis Augue Iaculis. Nibh Sed Nunc Id Lobortis Ut.
            </p>
            <a href="#" className="know-more-btn">
              KNOW ABOUT US <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="video-section">
        <div className="video-container">
          <button className="play-button" aria-label="Play Video">
            ▶
          </button>
        </div>
      </div>

      <div className="practice-areas">
        <h2 className="practice-title">Our Legal Practice Areas</h2>
        <p className="practice-description">
          Nulla Massa A Tortor Justo. Malesuada Donec Tristique Risus Pulvinar Sollicitudin Dictumst Vitae Hac. Interdum Consectetur Ipsum.
        </p>
        <div className="stats-container">
          {[
            { count: "250+", label: "BUSINESS PARTNERS" },
            { count: "180+", label: "CASES COMPLETED" },
            { count: "370+", label: "HAPPY CUSTOMERS" },
            { count: "90+", label: "AWARD WINNING" },
          ].map((stat, index) => (
            <div key={index} className="stat-item">
              <h3>{stat.count}</h3>
              <p>{stat.label}</p>
              <div className="linelast"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Know;
