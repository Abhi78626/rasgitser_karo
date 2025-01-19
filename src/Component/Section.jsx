
import React from 'react';
import './Section.css';
import Sidebar from './Sidebar';

function Section() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Your trusted partner for compliance business needs</h1>
        <p>
          An online business compliance platform that helps entrepreneurs and
          individuals with registrations, tax filings, and legal matters.
        </p>
        <div className="stats">
          <div>4.5+ Customer Rating</div>
          <div>20,000+ Clients</div>
          <div>99.8% Financial Stability</div>
        </div>
        <button className="cta-button">See how it works</button>
      </div>
      <Sidebar/>
    </section>
  );
}

export default Section;
