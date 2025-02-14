import React from 'react';
import '../public/styles/kau.css';

const Know = () => {
  return (
    <section className="legal-section">
      <div className="hero-content">
        <h1 className="hero-title">
        Right to Equality (Article 14-18) – The Indian Constitution ensures that every citizen is treated equally before the law and prohibits discrimination based on religion, race, caste, sex, or place of birth.
        </h1>
        <div className='line'></div>
        <p className="hero-text">
          Lorem Ipsum Dolor Sit Amet Consectetur. Sagittis Diam At Congue In Aenean. Leo In Amet Rhoncus Sit Sit Lobortis. At Nunc A Tempor Aliquam Malesuada Mus Vitae. Dignissim Morbi Est Lectus Fringilla Tellus.
        </p>
        <p className="hero-text">
          In Lectus In Dolor Vulputate Ultricies Egestas Nulla. Nec Sit At Gravida Sagittis. Nulla Massa A Tortor Justo. Malesuada Donec Tristique Risus Pulvinar Sollicitudin Dictumst Vitae Hac. Interdum Consectetur Ipsum Ullamcorper Quis Augue Iaculis. Nibh Sed Nunc Id Lobortis Ut.
        </p>
        <button className="know-more-btn">KNOW ABOUT US →</button>
      </div>

      <div className="video-section">
        <div className="video-container">
          {/* Replace with your video component or image */}
          <div className="play-button">▶</div>
        </div>
      </div>

      <div className="practice-areas">
        <h2 className="practice-title">Our Legal Practice Areas</h2>
        <p className="practice-description">
          Nulla Massa A Tortor Justo. Malesuada Donec Tristique Risus Pulvinar Sollicitudin Dictumst Vitae Hac. Interdum Consectetur Ipsum.
        </p>
        <div className="stats-container">
          <div className="stat-item">
            <div className='line'></div>
            <h3>250+</h3>
            <p>BUSINESS PARTNERS</p>
            <div className='line'></div>
          </div>
          <div className="stat-item">
            <div className='line'></div>
            <h3>180+</h3>
            <p>CASES COMPLETED</p>
            <div className='line'></div>
          </div>
          <div className="stat-item">
            <div className='line'></div>
            <h3>370+</h3>
            <p>HAPPY CUSTOMERS</p>
            <div className='line'></div>
          </div>
          <div className="stat-item">
            <div className='line'></div>
            <h3>90+</h3>
            <p>AWARD WINNING</p>
            <div className='line'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Know;

