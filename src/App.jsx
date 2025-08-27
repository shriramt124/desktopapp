import React, { useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import ForestRecovery from './components/ForestRecovery';

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboards');
  const [showForestRecovery, setShowForestRecovery] = useState(true); // Set to true to show ForestRecovery by default

  // Toggle between ForestRecovery and regular content
  if (showForestRecovery) {
    return (
      <div className="min-h-screen bg-gray-50">
        <ForestRecovery />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <MainContent activeTab={activeTab} />
    </div>
  );
};

export default App;