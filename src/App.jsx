
import React, { useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import ForestRecovery from './components/ForestRecovery';

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboards');
  const [showForestRecovery, setShowForestRecovery] = useState(true);

  // Toggle between ForestRecovery and regular content
  if (showForestRecovery) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Simple navigation bar */}
        <div className="bg-white border-b border-gray-200 px-6 py-2">
          <button 
            onClick={() => setShowForestRecovery(false)}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center space-x-1"
          >
            <i className="fas fa-arrow-left text-xs"></i>
            <span>Back to Dashboard</span>
          </button>
        </div>
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
