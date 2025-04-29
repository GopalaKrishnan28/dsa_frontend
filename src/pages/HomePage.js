import React from 'react';

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="hero-section">
        <h1>Crop Data Analysis Platform</h1>
        <p>Comprehensive agricultural data visualization and prediction tools</p>
      </section>
      
      <section className="dataset-section">
        <h2>Dataset Description</h2>
        <div className="dataset-info">
          <h3>Source and Nature of Data</h3>
          <p>The dataset contains agricultural parameters for optimal crop cultivation.</p>
          
          <h3>Dataset Statistics</h3>
          <ul>
            <li><strong>Number of features:</strong> 7 (N, P, K, temperature, humidity, pH, rainfall)</li>
            <li><strong>Number of records:</strong> 2200</li>
            <li><strong>Target variable:</strong> Crop type (22 classes)</li>
          </ul>
          
          <a 
            href="https://www.kaggle.com/datasets/atharvaingle/crop-recommendation-dataset" 
            className="dataset-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Access the Dataset
          </a>
        </div>
      </section>
      
      <section className="analysis-preview">
        <h2>Analysis Features</h2>
        <div className="preview-cards">
          <div className="preview-card">
            <h3>Univariate Analysis</h3>
            <p>Explore individual feature distributions and statistics</p>
          </div>
          <div className="preview-card">
            <h3>Bivariate Analysis</h3>
            <p>Examine relationships between pairs of features</p>
          </div>
          <div className="preview-card">
            <h3>Advanced Analysis</h3>
            <p>Interactive 3D visualizations and complex relationships</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;