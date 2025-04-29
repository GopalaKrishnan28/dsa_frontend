import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UnivariateAnalysis from './pages/UnivariateAnalysis';
import BivariateAnalysis from './pages/BivariateAnalysis';
import AdvancedAnalysis from './pages/AdvancedAnalysis';
import Prediction from './pages/Prediction';
import Metrics from './pages/Metrics';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './main.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/univariate" element={<UnivariateAnalysis />} />
            <Route path="/bivariate" element={<BivariateAnalysis />} />
            <Route path="/advanced" element={<AdvancedAnalysis />} />
            <Route path="/predict" element={<Prediction />} />
            <Route path="/metrics" element={<Metrics />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;