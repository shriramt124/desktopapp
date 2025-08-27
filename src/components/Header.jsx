import React, { useState, useRef, useEffect } from 'react';

const Header = ({ activeTab, setActiveTab }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const dropdownRef = useRef(null);

  const tabs = [
    {
      id: 'dashboards',
      label: 'Dashboards',
      icon: 'fas fa-chart-bar',
      items: [
        { icon: 'fas fa-plus', label: 'New Dashboard', desc: 'Create new dashboard' },
        { icon: 'fas fa-template', label: 'Templates', desc: 'Browse templates' },
        { icon: 'fas fa-download', label: 'Export', desc: 'Export data' }
      ]
    },
    {
      id: 'directory',
      label: 'Active Directory',
      icon: 'fas fa-users',
      items: [
        { icon: 'fas fa-desktop', label: 'Computers', desc: 'Manage computers' },
        { icon: 'fas fa-user', label: 'Users', desc: 'Manage users' },
        { icon: 'fas fa-shield', label: 'Security', desc: 'Security settings' }
      ]
    },
    {
      id: 'aws',
      label: 'AWS',
      icon: 'fab fa-aws',
      items: [
        { icon: 'fas fa-server', label: 'EC2', desc: 'Virtual servers' },
        { icon: 'fas fa-database', label: 'RDS', desc: 'Databases' },
        { icon: 'fas fa-cube', label: 'S3', desc: 'Storage' }
      ]
    },
    {
      id: 'azure',
      label: 'Azure',
      icon: 'fab fa-microsoft',
      items: [
        { icon: 'fas fa-server', label: 'VMs', desc: 'Virtual machines' },
        { icon: 'fas fa-network-wired', label: 'Networks', desc: 'Virtual networks' },
        { icon: 'fas fa-shield-alt', label: 'Security', desc: 'Security center' }
      ]
    },
    {
      id: 'forensics',
      label: 'Forensics',
      icon: 'fas fa-search',
      items: [
        { icon: 'fas fa-search-plus', label: 'Search', desc: 'Search evidence' },
        { icon: 'fas fa-folder', label: 'Cases', desc: 'Manage cases' },
        { icon: 'fas fa-file-alt', label: 'Reports', desc: 'Generate reports' }
      ]
    }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleTabClick = (tabId) => {
    if (activeTab === tabId && activeDropdown === tabId) {
      setActiveDropdown(null);
    } else {
      setActiveTab(tabId);
      setActiveDropdown(activeDropdown === tabId ? null : tabId);
    }
  };

  const currentTab = tabs.find(tab => tab.id === activeDropdown);

  return (
    <div className="relative bg-white shadow-sm border-b border-gray-100 z-50">
      {/* Main Header */}
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
            <i className="fas fa-shield-alt text-white text-sm"></i>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`relative flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeTab === tab.id
                  ? 'text-blue-700 bg-blue-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <i className={`${tab.icon} text-sm`}></i>
              <span>{tab.label}</span>
              {activeDropdown === tab.id && (
                <i className="fas fa-chevron-up text-xs ml-1"></i>
              )}
            </button>
          ))}
        </div>

        {/* Search & Actions */}
        <div className="flex items-center space-x-3">
          {/* Search */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search..." 
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className={`w-64 pl-9 pr-4 py-2 text-sm border rounded-lg bg-gray-50 focus:outline-none transition-all duration-200 ${
                isSearchFocused 
                  ? 'ring-2 ring-blue-500/20 border-blue-300 bg-white' 
                  : 'border-transparent hover:bg-gray-100'
              }`}
            />
            <i className={`fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-sm ${
              isSearchFocused ? 'text-blue-500' : 'text-gray-400'
            }`}></i>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-1">
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <i className="fas fa-bell text-sm"></i>
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <i className="fas fa-cog text-sm"></i>
            </button>
            <button className="flex items-center space-x-2 p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <i className="fas fa-user-circle text-lg"></i>
              <span className="text-sm font-medium">Admin</span>
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      {activeDropdown && currentTab && (
        <div 
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 animate-in slide-in-from-top-1 duration-150"
        >
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="grid grid-cols-3 gap-2">
              {currentTab.items.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveDropdown(null)}
                  className="flex items-center space-x-3 p-3 text-left rounded-lg hover:bg-gray-50 transition-colors duration-150 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <i className={`${item.icon} text-sm text-gray-600 group-hover:text-blue-600`}></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">{item.label}</h4>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;