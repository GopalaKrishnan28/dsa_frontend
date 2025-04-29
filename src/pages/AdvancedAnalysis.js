import React from 'react';


const AdvancedAnalysis = () => {
  return (
    <div className="analysis-page">
      <h1>Advanced Analysis</h1>
      <p className="page-description">
        Interactive and complex visualizations for deeper insights.
      </p>
      
      <div className="visualization-grid">
        <div className="visualization-card">
          <h3>3D Plot: N, P, K Relationship</h3>
          <img src="https://sample2801.s3.us-east-1.amazonaws.com/plot+images/3d_plot_npk.png" alt="3D Plot" className="analysis-image" />
          <p>Three-dimensional view of primary nutrient relationships</p>
        </div>
        
        <div className="visualization-card">
          <h3>Interactive Feature Explorer</h3>
          <iframe src="https://sample2801.s3.us-east-1.amazonaws.com/plot+images/scatter_n_vs_p.html" width="100%" height="500px" title="Interactive Feature Explorer"></iframe>
          <p>Dynamic visualization with customizable parameters</p>
        </div>
        
      
      </div>
    </div>
  );
};

export default AdvancedAnalysis;