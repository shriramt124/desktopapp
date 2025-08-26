
import React, { useState } from 'react';

const Header = ({ activeTab, setActiveTab }) => {
  const [isRibbonExpanded, setIsRibbonExpanded] = useState(true);

  const tabs = [
    {
      id: 'dashboards',
      label: 'Dashboards',
      icon: 'fas fa-chart-bar',
      groups: [
        {
          title: 'Create',
          items: [
            { icon: 'fas fa-plus-circle', label: 'New Dashboard', size: 'large' },
            { icon: 'fas fa-chart-line', label: 'Analytics', size: 'medium' },
            { icon: 'fas fa-chart-pie', label: 'Reports', size: 'medium' }
          ]
        },
        {
          title: 'View',
          items: [
            { icon: 'fas fa-eye', label: 'Preview', size: 'large' },
            { icon: 'fas fa-expand', label: 'Fullscreen', size: 'small' },
            { icon: 'fas fa-refresh', label: 'Refresh', size: 'small' }
          ]
        },
        {
          title: 'Export',
          items: [
            { icon: 'fas fa-download', label: 'Export', size: 'large' },
            { icon: 'fas fa-file-pdf', label: 'PDF', size: 'small' },
            { icon: 'fas fa-file-excel', label: 'Excel', size: 'small' }
          ]
        }
      ]
    },
    {
      id: 'directory',
      label: 'Active Directory',
      icon: 'fas fa-users',
      groups: [
        {
          title: 'Users',
          items: [
            { icon: 'fas fa-user-plus', label: 'Add User', size: 'large' },
            { icon: 'fas fa-users-cog', label: 'Manage Users', size: 'medium' },
            { icon: 'fas fa-user-shield', label: 'Permissions', size: 'medium' }
          ]
        },
        {
          title: 'Computers',
          items: [
            { icon: 'fas fa-desktop', label: 'Computers', size: 'large' },
            { icon: 'fas fa-server', label: 'Servers', size: 'medium' },
            { icon: 'fas fa-laptop', label: 'Workstations', size: 'medium' }
          ]
        },
        {
          title: 'Security',
          items: [
            { icon: 'fas fa-key', label: 'Reset Password', size: 'large' },
            { icon: 'fas fa-shield-alt', label: 'Domain Controllers', size: 'medium' },
            { icon: 'fas fa-lock', label: 'Security Groups', size: 'medium' }
          ]
        }
      ]
    },
    {
      id: 'aws',
      label: 'AWS',
      icon: 'fab fa-aws',
      groups: [
        {
          title: 'Compute',
          items: [
            { icon: 'fas fa-server', label: 'EC2', size: 'large' },
            { icon: 'fas fa-lambda', label: 'Lambda', size: 'medium' },
            { icon: 'fas fa-container', label: 'ECS', size: 'medium' }
          ]
        },
        {
          title: 'Storage',
          items: [
            { icon: 'fas fa-cube', label: 'S3', size: 'large' },
            { icon: 'fas fa-database', label: 'RDS', size: 'medium' },
            { icon: 'fas fa-hdd', label: 'EBS', size: 'medium' }
          ]
        },
        {
          title: 'Monitor',
          items: [
            { icon: 'fas fa-chart-line', label: 'CloudWatch', size: 'large' },
            { icon: 'fas fa-bell', label: 'Alarms', size: 'small' },
            { icon: 'fas fa-list', label: 'Logs', size: 'small' }
          ]
        }
      ]
    },
    {
      id: 'azure',
      label: 'Azure',
      icon: 'fab fa-microsoft',
      groups: [
        {
          title: 'Virtual Machines',
          items: [
            { icon: 'fas fa-server', label: 'VMs', size: 'large' },
            { icon: 'fas fa-network-wired', label: 'Networks', size: 'medium' },
            { icon: 'fas fa-hdd', label: 'Storage', size: 'medium' }
          ]
        },
        {
          title: 'Security',
          items: [
            { icon: 'fas fa-lock', label: 'Isolation', size: 'large' },
            { icon: 'fas fa-shield-alt', label: 'Security Center', size: 'medium' },
            { icon: 'fas fa-key', label: 'Key Vault', size: 'medium' }
          ]
        },
        {
          title: 'Backup',
          items: [
            { icon: 'fas fa-history', label: 'Restore', size: 'large' },
            { icon: 'fas fa-download', label: 'Backup', size: 'small' },
            { icon: 'fas fa-upload', label: 'Archive', size: 'small' }
          ]
        }
      ]
    },
    {
      id: 'forensics',
      label: 'Digital Forensics',
      icon: 'fas fa-search',
      groups: [
        {
          title: 'Investigation',
          items: [
            { icon: 'fas fa-search-plus', label: 'Evidence Search', size: 'large' },
            { icon: 'fas fa-file-medical', label: 'Case Management', size: 'medium' },
            { icon: 'fas fa-fingerprint', label: 'Analysis', size: 'medium' }
          ]
        },
        {
          title: 'Tools',
          items: [
            { icon: 'fas fa-microscope', label: 'Deep Scan', size: 'large' },
            { icon: 'fas fa-file-archive', label: 'Extract', size: 'small' },
            { icon: 'fas fa-camera', label: 'Capture', size: 'small' }
          ]
        },
        {
          title: 'Reports',
          items: [
            { icon: 'fas fa-file-alt', label: 'Generate Report', size: 'large' },
            { icon: 'fas fa-print', label: 'Print', size: 'small' },
            { icon: 'fas fa-share', label: 'Share', size: 'small' }
          ]
        }
      ]
    }
  ];

  const currentTab = tabs.find(tab => tab.id === activeTab);

  return (
    <div className="bg-white border-b border-gray-300 shadow-sm">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <i className="fas fa-cube text-white text-sm"></i>
          </div>
          <h1 className="text-sm font-semibold text-gray-900">Admin Console</h1>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Tell me what you want to do..." 
              className="w-80 pl-10 pr-4 py-1.5 text-sm border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
          </div>
          <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded transition-colors">
            <i className="fas fa-cog text-sm"></i>
          </button>
          <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded transition-colors">
            <i className="fas fa-user-circle text-sm"></i>
          </button>
          <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded transition-colors">
            <i className="fas fa-question-circle text-sm"></i>
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex items-center px-4 bg-white">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
              activeTab === tab.id
                ? 'text-blue-600 border-blue-600 bg-blue-50'
                : 'text-gray-600 border-transparent hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <i className={`${tab.icon} mr-2`}></i>
            {tab.label}
          </button>
        ))}
        <button
          onClick={() => setIsRibbonExpanded(!isRibbonExpanded)}
          className="ml-auto p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors"
        >
          <i className={`fas ${isRibbonExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
        </button>
      </div>

      {/* Ribbon Content */}
      {isRibbonExpanded && currentTab && (
        <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
          <div className="flex space-x-8">
            {currentTab.groups.map((group, groupIndex) => (
              <div key={groupIndex} className="flex flex-col">
                <div className="flex items-end space-x-1 mb-2">
                  {group.items.map((item, itemIndex) => (
                    <button
                      key={itemIndex}
                      className={`ribbon-button ${item.size}`}
                    >
                      <i className={`${item.icon} ${
                        item.size === 'large' ? 'text-xl mb-1' : 
                        item.size === 'medium' ? 'text-base mb-1' : 'text-sm'
                      }`}></i>
                      <span className={`${
                        item.size === 'large' ? 'text-xs' : 
                        item.size === 'medium' ? 'text-xs' : 'text-xs'
                      }`}>
                        {item.label}
                      </span>
                    </button>
                  ))}
                </div>
                <div className="text-xs text-gray-500 text-center font-medium border-t border-gray-300 pt-1">
                  {group.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
