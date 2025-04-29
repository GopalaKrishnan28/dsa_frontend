import React, { useState } from 'react';


const PredictionPage = () => {
  const [formData, setFormData] = useState({
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    temperature: '',
    humidity: '',
    ph: '',
    rainfall: ''
  });
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('https://3sp014ajnk.execute-api.us-east-1.amazonaws.com/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Prediction failed');
      }
      
      const data = await response.json();
      setPrediction(data.crop);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="prediction-page">
      <h1>Crop Prediction</h1>
      <p className="page-description">
        Enter soil and weather parameters to get the optimal crop suggestion.
      </p>
      
      <div className="prediction-container">
        <form onSubmit={handleSubmit} className="prediction-form">
          <div className="form-group">
            <label>Nitrogen (N)</label>
            <input
              type="number"
              name="nitrogen"
              value={formData.nitrogen}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Phosphorus (P)</label>
            <input
              type="number"
              name="phosphorus"
              value={formData.phosphorus}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Potassium (K)</label>
            <input
              type="number"
              name="potassium"
              value={formData.potassium}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Temperature (°C)</label>
            <input
              type="number"
              name="temperature"
              value={formData.temperature}
              onChange={handleChange}
              step="0.1"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Humidity (%)</label>
            <input
              type="number"
              name="humidity"
              value={formData.humidity}
              onChange={handleChange}
              step="0.1"
              required
            />
          </div>
          
          <div className="form-group">
            <label>pH</label>
            <input
              type="number"
              name="ph"
              value={formData.ph}
              onChange={handleChange}
              step="0.1"
              min="0"
              max="14"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Rainfall (mm)</label>
            <input
              type="number"
              name="rainfall"
              value={formData.rainfall}
              onChange={handleChange}
              step="0.1"
              required
            />
          </div>
          
          <button type="submit" disabled={loading}>
            {loading ? 'Predicting...' : 'Predict Crop'}
          </button>
        </form>
        
        {error && <div className="error-message">{error}</div>}
        
        {prediction && (
          <div className="prediction-result">
            <h3>Recommended Crop:</h3>
            <div className="crop-suggestion">{prediction}</div>
            <p>Based on the input parameters, this crop has the highest predicted yield.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PredictionPage;
