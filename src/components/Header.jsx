
import React, { useState, useRef, useEffect } from 'react';

const Header = ({ activeTab, setActiveTab }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

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

  // Handle mouse enter with delay
  const handleMouseEnter = (tabId) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(tabId);
    }, 150);
  };

  // Handle mouse leave with delay
  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  // Handle dropdown mouse enter (cancel close timeout)
  const handleDropdownMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
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
  };

  const currentTab = tabs.find(tab => tab.id === activeDropdown);

  return (
    <div className="relative bg-white shadow-lg border-b border-gray-200/60 z-50">
      {/* Clean Top Bar */}
      <div className="flex items-center justify-between px-8 py-4 bg-gradient-to-r from-slate-50/90 via-white to-slate-50/90 border-b border-gray-200/50">
        {/* Search Bar - Centered */}
        <div className="flex-1 max-w-2xl mx-auto">
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Tell me what you want to do..." 
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className={`w-full pl-12 pr-6 py-3 text-sm border rounded-2xl bg-white/80 backdrop-blur-sm focus:outline-none transition-all duration-300 placeholder-gray-500 ${
                isSearchFocused 
                  ? 'ring-2 ring-blue-500/30 border-blue-400 bg-white shadow-xl' 
                  : 'border-gray-300/60 hover:border-gray-400/60 hover:bg-white shadow-sm'
              }`}
            />
            <i className={`fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-lg transition-colors ${
              isSearchFocused ? 'text-blue-500' : 'text-gray-400'
            }`}></i>
          </div>
        </div>
        
        {/* Right Controls */}
        <div className="flex items-center space-x-2 ml-8">
          {['fas fa-cog', 'fas fa-bell', 'fas fa-user-circle', 'fas fa-question-circle'].map((icon, index) => (
            <button 
              key={index}
              className="p-3 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200 group"
            >
              <i className={`${icon} text-lg group-hover:scale-110 transition-transform`}></i>
            </button>
          ))}
        </div>
      </div>

      {/* Professional Tab Navigation */}
      <div className="relative">
        <div className="flex items-center justify-center px-8 py-2 bg-gradient-to-r from-white via-gray-50/50 to-white">
          <div className="flex items-center space-x-2">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className="relative"
                onMouseEnter={() => handleMouseEnter(tab.id)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => handleTabClick(tab.id)}
                  className={`group relative px-8 py-4 text-sm font-medium transition-all duration-300 flex items-center space-x-3 rounded-xl ${
                    activeTab === tab.id
                      ? 'text-blue-700 bg-blue-50/90 shadow-md border border-blue-200/50'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50/80'
                  }`}
                >
                  <i className={`${tab.icon} text-base transition-transform group-hover:scale-110`}></i>
                  <span className="font-medium">{tab.label}</span>
                  <i className={`fas fa-chevron-down text-xs transition-all duration-200 ${
                    activeDropdown === tab.id ? 'rotate-180 opacity-100' : 'opacity-60'
                  }`}></i>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Modern Hover Dropdown Menu */}
        {activeDropdown && currentTab && (
          <div 
            ref={dropdownRef}
            className="absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl shadow-2xl border border-gray-200/60 z-50 animate-in slide-in-from-top-2 duration-200"
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto px-10 py-10">
              <div className="grid grid-cols-3 gap-10">
                {currentTab.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="space-y-5">
                    <div className="flex items-center space-x-2 mb-6">
                      <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                      <h3 className="text-base font-bold text-gray-900 tracking-wide">
                        {section.title}
                      </h3>
                    </div>
                    <div className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <button
                          key={itemIndex}
                          onClick={() => setActiveDropdown(null)}
                          className="w-full flex items-start space-x-4 p-4 text-left rounded-xl hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-indigo-50/60 transition-all duration-300 group border border-transparent hover:border-blue-100/50"
                        >
                          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 shadow-sm group-hover:shadow-md">
                            <i className={`${item.icon} text-base text-gray-600 group-hover:text-blue-700 transition-colors`}></i>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="text-base font-semibold text-gray-900 group-hover:text-blue-900 transition-colors">
                                {item.label}
                              </h4>
                              {item.shortcut && (
                                <kbd className="px-3 py-1 text-xs font-mono text-gray-500 bg-gray-100/80 rounded-lg border border-gray-200 group-hover:bg-blue-100 group-hover:text-blue-600 group-hover:border-blue-200 transition-all duration-300">
                                  {item.shortcut}
                                </kbd>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700">
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
    </div>
  );
};

export default Header;
