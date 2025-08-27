
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
      sections: [
        {
          title: 'Create & Design',
          items: [
            { icon: 'fas fa-plus-circle', label: 'New Dashboard', desc: 'Create a new dashboard from scratch', shortcut: 'Ctrl+N' },
            { icon: 'fas fa-palette', label: 'Templates', desc: 'Use pre-built dashboard templates', shortcut: 'Ctrl+T' },
            { icon: 'fas fa-chart-line', label: 'Analytics Builder', desc: 'Build custom analytics views' },
            { icon: 'fas fa-brush', label: 'Theme Editor', desc: 'Customize dashboard appearance' }
          ]
        },
        {
          title: 'Manage & View',
          items: [
            { icon: 'fas fa-eye', label: 'Preview Mode', desc: 'Preview your dashboard', shortcut: 'Ctrl+P' },
            { icon: 'fas fa-expand-arrows-alt', label: 'Fullscreen', desc: 'View in fullscreen mode', shortcut: 'F11' },
            { icon: 'fas fa-sync-alt', label: 'Refresh Data', desc: 'Refresh all dashboard data', shortcut: 'F5' },
            { icon: 'fas fa-share-alt', label: 'Share Dashboard', desc: 'Share with team members' }
          ]
        },
        {
          title: 'Export & Reports',
          items: [
            { icon: 'fas fa-download', label: 'Export Data', desc: 'Export dashboard data' },
            { icon: 'fas fa-file-pdf', label: 'Export PDF', desc: 'Generate PDF report' },
            { icon: 'fas fa-file-excel', label: 'Export Excel', desc: 'Export to Excel format' },
            { icon: 'fas fa-print', label: 'Print Report', desc: 'Print dashboard report' }
          ]
        }
      ]
    },
    {
      id: 'directory',
      label: 'Active Directory',
      icon: 'fas fa-users',
      sections: [
        {
          title: 'User Management',
          items: [
            { icon: 'fas fa-user-plus', label: 'Add User', desc: 'Create new user account', shortcut: 'Ctrl+U' },
            { icon: 'fas fa-users-cog', label: 'Manage Users', desc: 'Edit existing user accounts' },
            { icon: 'fas fa-user-shield', label: 'User Permissions', desc: 'Set user access permissions' },
            { icon: 'fas fa-user-lock', label: 'Account Security', desc: 'Manage account security settings' }
          ]
        },
        {
          title: 'Computer Management',
          items: [
            { icon: 'fas fa-desktop', label: 'View Computers', desc: 'Browse all computers in domain' },
            { icon: 'fas fa-server', label: 'Server Management', desc: 'Manage domain servers' },
            { icon: 'fas fa-laptop', label: 'Workstations', desc: 'Manage user workstations' },
            { icon: 'fas fa-network-wired', label: 'Network Status', desc: 'View network connectivity' }
          ]
        },
        {
          title: 'Security & Groups',
          items: [
            { icon: 'fas fa-key', label: 'Password Reset', desc: 'Reset user passwords' },
            { icon: 'fas fa-shield-alt', label: 'Domain Controllers', desc: 'Manage domain controllers' },
            { icon: 'fas fa-users', label: 'Security Groups', desc: 'Manage security groups' },
            { icon: 'fas fa-lock', label: 'Group Policies', desc: 'Configure group policies' }
          ]
        }
      ]
    },
    {
      id: 'aws',
      label: 'AWS',
      icon: 'fab fa-aws',
      sections: [
        {
          title: 'Compute Services',
          items: [
            { icon: 'fas fa-server', label: 'EC2 Instances', desc: 'Manage virtual servers', shortcut: 'Alt+E' },
            { icon: 'fas fa-bolt', label: 'Lambda Functions', desc: 'Serverless computing' },
            { icon: 'fas fa-cubes', label: 'ECS Containers', desc: 'Container orchestration' },
            { icon: 'fas fa-layer-group', label: 'Auto Scaling', desc: 'Configure auto scaling groups' }
          ]
        },
        {
          title: 'Storage & Database',
          items: [
            { icon: 'fas fa-cube', label: 'S3 Storage', desc: 'Object storage service' },
            { icon: 'fas fa-database', label: 'RDS Database', desc: 'Relational database service' },
            { icon: 'fas fa-hdd', label: 'EBS Volumes', desc: 'Block storage volumes' },
            { icon: 'fas fa-archive', label: 'Glacier Archive', desc: 'Long-term data archival' }
          ]
        },
        {
          title: 'Monitoring & Security',
          items: [
            { icon: 'fas fa-chart-line', label: 'CloudWatch', desc: 'Monitoring and logging' },
            { icon: 'fas fa-bell', label: 'CloudWatch Alarms', desc: 'Set up monitoring alarms' },
            { icon: 'fas fa-shield-virus', label: 'Security Hub', desc: 'Centralized security findings' },
            { icon: 'fas fa-key', label: 'IAM Roles', desc: 'Identity and access management' }
          ]
        }
      ]
    },
    {
      id: 'azure',
      label: 'Azure',
      icon: 'fab fa-microsoft',
      sections: [
        {
          title: 'Virtual Infrastructure',
          items: [
            { icon: 'fas fa-server', label: 'Virtual Machines', desc: 'Create and manage VMs' },
            { icon: 'fas fa-network-wired', label: 'Virtual Networks', desc: 'Configure network topology' },
            { icon: 'fas fa-hdd', label: 'Storage Accounts', desc: 'Manage cloud storage' },
            { icon: 'fas fa-balance-scale', label: 'Load Balancer', desc: 'Distribute network traffic' }
          ]
        },
        {
          title: 'Security & Identity',
          items: [
            { icon: 'fas fa-shield-virus', label: 'Security Center', desc: 'Unified security management' },
            { icon: 'fas fa-key', label: 'Key Vault', desc: 'Secure key and secret management' },
            { icon: 'fas fa-user-shield', label: 'Active Directory', desc: 'Identity and access management' },
            { icon: 'fas fa-fingerprint', label: 'Multi-Factor Auth', desc: 'Enhanced security authentication' }
          ]
        },
        {
          title: 'Backup & Recovery',
          items: [
            { icon: 'fas fa-history', label: 'Backup & Restore', desc: 'Data backup solutions' },
            { icon: 'fas fa-cloud-upload-alt', label: 'Site Recovery', desc: 'Disaster recovery service' },
            { icon: 'fas fa-download', label: 'Backup Vault', desc: 'Centralized backup management' },
            { icon: 'fas fa-undo-alt', label: 'Point-in-Time Recovery', desc: 'Restore to specific time' }
          ]
        }
      ]
    },
    {
      id: 'forensics',
      label: 'Digital Forensics',
      icon: 'fas fa-search',
      sections: [
        {
          title: 'Investigation Tools',
          items: [
            { icon: 'fas fa-search-plus', label: 'Evidence Search', desc: 'Search through digital evidence' },
            { icon: 'fas fa-microscope', label: 'Deep Analysis', desc: 'Perform deep forensic analysis' },
            { icon: 'fas fa-fingerprint', label: 'Hash Analysis', desc: 'File integrity verification' },
            { icon: 'fas fa-eye', label: 'Timeline Analysis', desc: 'Reconstruct event timelines' }
          ]
        },
        {
          title: 'Case Management',
          items: [
            { icon: 'fas fa-folder-plus', label: 'New Case', desc: 'Create new investigation case' },
            { icon: 'fas fa-file-medical', label: 'Case Files', desc: 'Manage investigation files' },
            { icon: 'fas fa-users', label: 'Case Team', desc: 'Assign team members to case' },
            { icon: 'fas fa-calendar-alt', label: 'Case Timeline', desc: 'Track investigation progress' }
          ]
        },
        {
          title: 'Reporting & Export',
          items: [
            { icon: 'fas fa-file-alt', label: 'Generate Report', desc: 'Create investigation report' },
            { icon: 'fas fa-camera', label: 'Evidence Capture', desc: 'Capture digital evidence' },
            { icon: 'fas fa-print', label: 'Print Documentation', desc: 'Print case documentation' },
            { icon: 'fas fa-share', label: 'Share Findings', desc: 'Share investigation results' }
          ]
        }
      ]
    }
  ];

  // Handle clicking outside dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (activeDropdown === tabId) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(tabId);
    }
  };

  const currentTab = tabs.find(tab => tab.id === activeTab);

  return (
    <div className="relative bg-white shadow-lg border-b border-gray-200/60 z-50">
      {/* macOS-style Top Bar */}
      <div className="flex items-center justify-between px-6 py-3 bg-gradient-to-r from-gray-50/90 via-white to-gray-50/90 border-b border-gray-200/50">
        <div className="flex items-center space-x-4">
          {/* macOS Window Controls */}
          <div className="flex items-center space-x-1.5">
            <div className="w-3 h-3 bg-gradient-to-br from-red-400 to-red-500 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer"></div>
            <div className="w-3 h-3 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer"></div>
            <div className="w-3 h-3 bg-gradient-to-br from-green-400 to-green-500 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer"></div>
          </div>
          
          <div className="h-5 w-px bg-gray-300/60"></div>
          
          {/* App Icon & Title */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
              <i className="fas fa-cube text-white text-sm drop-shadow-sm"></i>
            </div>
            <h1 className="text-lg font-semibold text-gray-900 tracking-tight">Admin Console</h1>
          </div>
        </div>
        
        {/* Search & Controls */}
        <div className="flex items-center space-x-4">
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Tell me what you want to do..." 
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className={`w-96 pl-10 pr-4 py-2.5 text-sm border rounded-xl bg-white/70 backdrop-blur-sm focus:outline-none transition-all duration-300 placeholder-gray-500 ${
                isSearchFocused 
                  ? 'ring-2 ring-blue-500/30 border-blue-400 bg-white shadow-lg' 
                  : 'border-gray-300/60 hover:border-gray-400/60 hover:bg-white/80'
              }`}
            />
            <i className={`fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-sm transition-colors ${
              isSearchFocused ? 'text-blue-500' : 'text-gray-400'
            }`}></i>
          </div>
          
          <div className="flex items-center space-x-1">
            {['fas fa-cog', 'fas fa-bell', 'fas fa-user-circle', 'fas fa-question-circle'].map((icon, index) => (
              <button 
                key={index}
                className="p-2.5 text-gray-500 hover:text-gray-700 hover:bg-white/80 rounded-xl transition-all duration-200 backdrop-blur-sm group"
              >
                <i className={`${icon} text-sm group-hover:scale-110 transition-transform`}></i>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Elegant Tab Navigation */}
      <div className="relative">
        <div className="flex items-center justify-center px-6 py-1 bg-gradient-to-r from-white via-gray-50/30 to-white">
          <div className="flex items-center space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`group relative px-6 py-3 text-sm font-medium transition-all duration-300 flex items-center space-x-2.5 rounded-lg ${
                  activeTab === tab.id
                    ? 'text-blue-600 bg-blue-50/80 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50/60'
                }`}
              >
                <i className={`${tab.icon} text-sm transition-transform group-hover:scale-110`}></i>
                <span className="font-medium">{tab.label}</span>
                <i className={`fas fa-chevron-down text-xs transition-transform duration-200 ${
                  activeDropdown === tab.id ? 'rotate-180' : ''
                } ${activeTab === tab.id ? 'text-blue-600' : 'text-gray-400'}`}></i>
              </button>
            ))}
          </div>
        </div>

        {/* Elegant Dropdown Menu */}
        {activeDropdown && currentTab && (
          <div 
            ref={dropdownRef}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-2xl border-t border-gray-200/50 z-50"
          >
            <div className="max-w-7xl mx-auto px-8 py-8">
              <div className="grid grid-cols-3 gap-8">
                {currentTab.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="space-y-4">
                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide border-b border-gray-200 pb-2">
                      {section.title}
                    </h3>
                    <div className="space-y-1">
                      {section.items.map((item, itemIndex) => (
                        <button
                          key={itemIndex}
                          onClick={() => setActiveDropdown(null)}
                          className="w-full flex items-start space-x-3 p-3 text-left rounded-xl hover:bg-gray-50/80 transition-all duration-200 group"
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center group-hover:from-blue-50 group-hover:to-blue-100 transition-all duration-200">
                            <i className={`${item.icon} text-sm text-gray-600 group-hover:text-blue-600 transition-colors`}></i>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-900 transition-colors">
                                {item.label}
                              </h4>
                              {item.shortcut && (
                                <kbd className="px-2 py-0.5 text-xs font-mono text-gray-500 bg-gray-100 rounded border group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                                  {item.shortcut}
                                </kbd>
                              )}
                            </div>
                            <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Overlay to close dropdown when clicking outside */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40"
          onClick={() => setActiveDropdown(null)}
        ></div>
      )}
    </div>
  );
};

export default Header;
