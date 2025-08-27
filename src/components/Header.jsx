
import React, { useState, useRef, useEffect } from 'react';

const Header = ({ activeTab, setActiveTab }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  const tabs = [
    {
      id: 'dashboards',
      label: 'Dashboards',
      icon: 'fas fa-chart-bar',
      items: [
        { icon: 'fas fa-plus-circle', label: 'New Dashboard', desc: 'Create a new dashboard from scratch' },
        { icon: 'fas fa-palette', label: 'Templates', desc: 'Use pre-built dashboard templates' },
        { icon: 'fas fa-eye', label: 'Preview Mode', desc: 'Preview your dashboard' },
        { icon: 'fas fa-download', label: 'Export Data', desc: 'Export dashboard data' }
      ]
    },
    {
      id: 'directory',
      label: 'Active Directory',
      icon: 'fas fa-users',
      items: [
        { 
          icon: 'fas fa-desktop', 
          label: 'Computers', 
          desc: 'Manage domain computers',
          submenu: [
            { icon: 'fas fa-key', label: 'Account Password Reset', desc: 'Reset computer accounts' },
            { icon: 'fas fa-shield-alt', label: 'Domain Controllers', desc: 'Manage domain controllers' },
            { icon: 'fas fa-server', label: 'Servers', desc: 'Manage domain servers' },
            { icon: 'fas fa-laptop', label: 'Workstations', desc: 'Manage user workstations' }
          ]
        },
        { icon: 'fas fa-user-friends', label: 'Identities', desc: 'Manage user identities' },
        { icon: 'fas fa-cloud-upload-alt', label: 'Azure Isolation', desc: 'Azure AD integration' },
        { icon: 'fas fa-history', label: 'Restore from Backup', desc: 'Restore AD objects' }
      ]
    },
    {
      id: 'aws',
      label: 'AWS',
      icon: 'fab fa-aws',
      items: [
        { icon: 'fas fa-server', label: 'EC2 Instances', desc: 'Manage virtual servers' },
        { icon: 'fas fa-cube', label: 'S3 Storage', desc: 'Object storage service' },
        { icon: 'fas fa-database', label: 'RDS Database', desc: 'Relational database service' },
        { icon: 'fas fa-chart-line', label: 'CloudWatch', desc: 'Monitoring and logging' }
      ]
    },
    {
      id: 'azure',
      label: 'Azure',
      icon: 'fab fa-microsoft',
      items: [
        { icon: 'fas fa-server', label: 'Virtual Machines', desc: 'Create and manage VMs' },
        { icon: 'fas fa-network-wired', label: 'Virtual Networks', desc: 'Configure network topology' },
        { icon: 'fas fa-shield-virus', label: 'Security Center', desc: 'Unified security management' },
        { icon: 'fas fa-history', label: 'Backup & Restore', desc: 'Data backup solutions' }
      ]
    },
    {
      id: 'forensics',
      label: 'Digital Forensics',
      icon: 'fas fa-search',
      items: [
        { icon: 'fas fa-search-plus', label: 'Evidence Search', desc: 'Search through digital evidence' },
        { icon: 'fas fa-folder-plus', label: 'New Case', desc: 'Create new investigation case' },
        { icon: 'fas fa-file-alt', label: 'Generate Report', desc: 'Create investigation report' },
        { icon: 'fas fa-camera', label: 'Evidence Capture', desc: 'Capture digital evidence' }
      ]
    }
  ];

  // Handle mouse enter with delay
  const handleMouseEnter = (tabId) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(tabId);
      setActiveSubmenu(null);
    }, 100);
  };

  // Handle mouse leave with delay
  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubmenu(null);
    }, 150);
  };

  // Handle dropdown mouse enter (cancel close timeout)
  const handleDropdownMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  // Handle submenu hover
  const handleSubmenuHover = (itemLabel) => {
    setActiveSubmenu(itemLabel);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setActiveDropdown(null);
    setActiveSubmenu(null);
  };

  const currentTab = tabs.find(tab => tab.id === activeDropdown);

  return (
    <div className="relative bg-white shadow-sm border-b border-gray-200 z-50">
      {/* Top Bar with Logo and Search */}
      <div className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-100">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <i className="fas fa-shield-alt text-white text-sm"></i>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">AdminPanel</h1>
          </div>
        </div>

        {/* Search Bar - Centered */}
        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search..." 
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className={`w-full pl-10 pr-4 py-2 text-sm border rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-colors ${
                isSearchFocused ? 'border-blue-500' : 'border-gray-200'
              }`}
            />
            <i className={`fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-sm ${
              isSearchFocused ? 'text-blue-500' : 'text-gray-400'
            }`}></i>
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex items-center space-x-1">
          {[
            { icon: 'fas fa-bell', badge: true },
            { icon: 'fas fa-cog' },
            { icon: 'fas fa-user-circle' }
          ].map((item, index) => (
            <button 
              key={index}
              className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <i className={`${item.icon} text-lg`}></i>
              {item.badge && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="relative">
        <div className="flex items-center px-6 py-1 bg-gray-50">
          <div className="flex items-center space-x-1">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className="relative"
                onMouseEnter={() => handleMouseEnter(tab.id)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => handleTabClick(tab.id)}
                  className={`group relative px-4 py-2 text-sm font-medium flex items-center space-x-2 rounded-md transition-colors ${
                    activeTab === tab.id
                      ? 'text-blue-700 bg-white shadow-sm border border-gray-200'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                  }`}
                >
                  <i className={`${tab.icon} text-sm`}></i>
                  <span>{tab.label}</span>
                  <i className={`fas fa-chevron-down text-xs transition-transform ${
                    activeDropdown === tab.id ? 'rotate-180' : ''
                  }`}></i>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Dropdown Menu */}
        {activeDropdown && currentTab && (
          <div 
            ref={dropdownRef}
            className="absolute top-full left-0 right-0 bg-white shadow-lg border border-gray-200 z-50"
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-5xl mx-auto px-6 py-4">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  {currentTab.items.map((item, index) => (
                    <div key={index} className="relative">
                      <button
                        onClick={() => !item.submenu && setActiveDropdown(null)}
                        onMouseEnter={() => item.submenu && handleSubmenuHover(item.label)}
                        className="w-full flex items-center space-x-3 p-3 text-left rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                          <i className={`${item.icon} text-sm text-gray-500 group-hover:text-blue-600`}></i>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-gray-900">
                            {item.label}
                          </h4>
                          <p className="text-xs text-gray-500">{item.desc}</p>
                        </div>
                        {item.submenu && (
                          <i className="fas fa-chevron-right text-xs text-gray-400"></i>
                        )}
                      </button>
                    </div>
                  ))}
                </div>

                {/* Submenu Panel */}
                {activeSubmenu && (
                  <div className="space-y-1 border-l border-gray-200 pl-4">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2 px-2">{activeSubmenu}</h3>
                    {currentTab.items.find(item => item.label === activeSubmenu)?.submenu?.map((subItem, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveDropdown(null)}
                        className="w-full flex items-center space-x-3 p-2 text-left rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                          <i className={`${subItem.icon} text-xs text-gray-500 group-hover:text-blue-600`}></i>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-gray-900">
                            {subItem.label}
                          </h4>
                          <p className="text-xs text-gray-500">{subItem.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
