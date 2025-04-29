import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>CropData Insights</h3>
          <p>Advanced data analysis for agricultural optimization</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/univariate">Univariate Analysis</a></li>
            <li><a href="/bivariate">Bivariate Analysis</a></li>
            <li><a href="/predict">Crop Prediction</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@cropdata.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CropData Insights. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;