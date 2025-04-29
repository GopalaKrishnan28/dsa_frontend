import React from 'react';


const Metrics = () => {
  return (
    <div className="analysis-page">
      <h1>Metrics</h1>
      <p className="page-description">
        Performance evaluation of model
      </p>
      
      <div className="visualization-grid">
        <div className="visualization-card">
          <h3>Confusion matrix heatmap</h3>
          <img src="https://sample2801.s3.us-east-1.amazonaws.com/plot+images/confusion.png" alt="3D Plot" className="analysis-image" />
          <p>heatmap using seaborn</p>
        </div>
        
        <div className="visualization-card">
          <h3>metrics bar graph</h3>
          <img src="https://sample2801.s3.us-east-1.amazonaws.com/plot+images/metrics.png" className="analysis-image"/>
          <p>accuracy,f1 score,specificity,recall</p>
        </div>
        
      
      </div>
    </div>
  );
};

export default Metrics;