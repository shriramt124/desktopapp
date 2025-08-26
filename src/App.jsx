
import React, { useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  const [activeTab, setActiveTab] = useState('dashboards');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <MainContent activeTab={activeTab} />
    </div>
  );
}

export default App;
