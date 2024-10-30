import React from 'react';
import '../styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <nav className="navbar">
        <div className="logo">tier</div>
        <ul className="nav-links">
          <li><a href="#what-we-do">WHAT WE DO</a></li>
          <li><a href="#blog">BLOG</a></li>
          <li><a href="#podcast">PODCAST</a></li>
          <li><a href="#careers">CAREERS</a></li>
          <li><a href="#contact" className="cta-button">WORK WITH US</a></li>
        </ul>
      </nav>
      <header className="header">
        <h1>Unlock Your Business Potential With Facebook & Instagram Advertising</h1>
        <p>Facebook Premier Level Partner Agency</p>
        <button className="cta-button">WORK WITH US</button>
      </header>
      <section className="partners">
        <div className="partner-logo">Facebook Marketing Partner</div>
        <div className="partner-logo">Google Endorsed Marketing Partner</div>
        <div className="partner-logo">Forbes Agency Council Member</div>
        <div className="partner-logo">Inc. 5000 Fastest Growing Company</div>
        <div className="partner-logo">$100M In Annual Digital Ad Spend</div>
        <div className="partner-logo">15+ Years of Facebook Advertising Experience</div>
      </section>
    </div>
  );
};

export default LandingPage;
