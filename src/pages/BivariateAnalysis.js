import React from 'react';


const BivariateAnalysis = () => {
  return (
    <div className="analysis-page">
      <h1>Bivariate Analysis</h1>
      <p className="page-description">
        Explore relationships between pairs of features in the dataset.
      </p>
      
      <div className="visualization-grid">
        <div className="visualization-card">
          <h3>Scatter Plot: N vs P</h3>
          <img src="https://sample2801.s3.us-east-1.amazonaws.com/plot+images/scatter_n_vs_p.png" alt="Scatter Plot" className="analysis-image" />
          <p>Relationship between Nitrogen and Phosphorus levels</p>
        </div>
        
        <div className="visualization-card">
          <h3>Line Chart: Temperature over Time</h3>
          <img src="https://sample2801.s3.us-east-1.amazonaws.com/plot+images/line_temp_over_time.png" alt="Line Chart" className="analysis-image" />
          <p>Temperature fluctuations across different time periods</p>
        </div>
        
        <div className="visualization-card">
          <h3>Pair Plot of Key Features</h3>
          <img src="https://sample2801.s3.us-east-1.amazonaws.com/plot+images/pairplot_key_features.png" alt="Pair Plot" className="analysis-image" />
          <p>Pairwise relationships between multiple features</p>
        </div>
        
        <div className="visualization-card">
          <h3>Correlation Heatmap</h3>
          <img src="https://sample2801.s3.us-east-1.amazonaws.com/plot+images/correlation_heatmap.png" alt="Heatmap" className="analysis-image" />
          <p>Correlation matrix </p>
        </div>
      </div>
    </div>
  );
};

export default BivariateAnalysis;