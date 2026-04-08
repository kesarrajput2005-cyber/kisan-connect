// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LanguageSelector from './components/LanguageSelector';
import FarmerLogin from './components/Login/FarmerLogin';
import SubscriptionDashboard from './components/Subscription/SubscriptionDashboard';
import FarmerDashboard from './components/Dashboard/FarmerDashboard';
import './App.css';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('language')) {
      setSelectedLanguage(true);
    }
  }, []);

  if (!selectedLanguage) {
    return <LanguageSelector />;
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<FarmerLogin />} />
          <Route path="/subscription" element={<SubscriptionDashboard />} />
          <Route path="/dashboard" element={<FarmerDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;