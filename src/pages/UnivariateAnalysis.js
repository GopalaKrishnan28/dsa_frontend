import React from 'react';


const UnivariateAnalysis = () => {
  return (
    <div className="analysis-page">
      <h1>Univariate Analysis</h1>
      <p className="page-description">
        This section displays the distribution and characteristics of individual features in the dataset.
      </p>
      
      <div className="visualization-grid">
        <div className="visualization-card">
          <h3>Pie Chart of Crop Distribution</h3>
          <img src="https://sample2801.s3.us-east-1.amazonaws.com/plot+images/pie_chart_crop_distribution.png" alt="Pie Chart" className="analysis-image" />
          <p>Distribution of different crop types in the dataset</p>
        </div>
        
        <div className="visualization-card">
          <h3>Histogram of Nitrogen Levels</h3>
          <img src="https://sample2801.s3.us-east-1.amazonaws.com/plot+images/histogram_nitrogen_levels.png" alt="Histogram" className="analysis-image" />
          <p>Frequency distribution of nitrogen content in soil</p>
        </div>
        
        <div className="visualization-card">
          <h3>KDE Plot of Temperature</h3>
          <img src="https://sample2801.s3.us-east-1.amazonaws.com/plot+images/kde_temperature.png" alt="KDE Plot" className="analysis-image" />
          <p>Kernel Density Estimate of temperature distribution</p>
        </div>
        
        <div className="visualization-card">
          <h3>Box Plot of pH Values</h3>
          <img src="https://sample2801.s3.us-east-1.amazonaws.com/plot+images/boxplot_ph.png" alt="Box Plot" className="analysis-image" />
          <p>Box plot showing pH value statistics and outliers</p>
        </div>
      </div>
    </div>
  );
};

export default UnivariateAnalysis;