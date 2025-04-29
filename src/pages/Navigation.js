import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          CropData Insights
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/univariate" className="nav-link">Univariate</Link>
          </li>
          <li className="nav-item">
            <Link to="/bivariate" className="nav-link">Bivariate</Link>
          </li>
          <li className="nav-item">
            <Link to="/advanced" className="nav-link">Advanced</Link>
          </li>
          <li className="nav-item">
            <Link to="/predict" className="nav-link">Predict</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;