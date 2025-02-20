import React from 'react';
import '../public/styles/TrustedLawFirm.css';

const TrustedLawFirm = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content-l">
          <div>
            <h1 className="hero-title-l">
              Trusted And Full Service Law Firm For Every Client
            </h1>
          </div>
          <div>
            <p className="hero-description-l">
              Lorem Ipsum Dolor Sit Amet Consectetur. Volutpat Scelerisque
              Facilisis Nibh Morbi A Id Et Odio Viverra. Scelerisque Condimentum Nulla.
            </p>
            <a href="#appointment" className="book-appointment">
              BOOK APPOINTMENT
              <span>→</span>
            </a>
          </div>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-number">01</div>
            <h3 className="service-title">Expert Attorneys</h3>
            <p className="service-description">
              Lorem Ipsum Dolor Sit Amet Consectetur. Sed Risus Viverra Nunc Congue Nulla Penatibus Orci.
            </p>
          </div>

          <div className="service-card">
            <div className="service-number">02</div>
            <h3 className="service-title">Financial Analysis</h3>
            <p className="service-description">
              Lorem Ipsum Dolor Sit Amet Consectetur. Sed Risus Viverra Nunc Congue Nulla Penatibus Orci.
            </p>
          </div>

          <div className="service-card">
            <div className="service-number">03</div>
            <h3 className="service-title">Highly Recommend</h3>
            <p className="service-description">
              Lorem Ipsum Dolor Sit Amet Consectetur. Sed Risus Viverra Nunc Congue Nulla Penatibus Orci.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedLawFirm;