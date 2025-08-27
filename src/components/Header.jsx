
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
            { icon: 'fas fa-plus-circle', label: 'New Dashboard', size: 'large', desc: 'Create dashboard' },
            { icon: 'fas fa-chart-line', label: 'Analytics', size: 'medium', desc: 'View analytics' },
            { icon: 'fas fa-chart-pie', label: 'Reports', size: 'medium', desc: 'Generate reports' }
          ]
        },
        {
          title: 'View',
          items: [
            { icon: 'fas fa-eye', label: 'Preview', size: 'large', desc: 'Preview mode' },
            { icon: 'fas fa-expand', label: 'Fullscreen', size: 'small', desc: 'Full screen' },
            { icon: 'fas fa-refresh', label: 'Refresh', size: 'small', desc: 'Refresh data' }
          ]
        },
        {
          title: 'Export',
          items: [
            { icon: 'fas fa-download', label: 'Export', size: 'large', desc: 'Export data' },
            { icon: 'fas fa-file-pdf', label: 'PDF', size: 'small', desc: 'Export as PDF' },
            { icon: 'fas fa-file-excel', label: 'Excel', size: 'small', desc: 'Export to Excel' }
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
            { icon: 'fas fa-user-plus', label: 'Add User', size: 'large', desc: 'Create new user' },
            { icon: 'fas fa-users-cog', label: 'Manage', size: 'medium', desc: 'Manage users' },
            { icon: 'fas fa-user-shield', label: 'Permissions', size: 'medium', desc: 'Set permissions' }
          ]
        },
        {
          title: 'Computers',
          items: [
            { icon: 'fas fa-desktop', label: 'Computers', size: 'large', desc: 'View computers' },
            { icon: 'fas fa-server', label: 'Servers', size: 'medium', desc: 'Manage servers' },
            { icon: 'fas fa-laptop', label: 'Workstations', size: 'medium', desc: 'Workstation list' }
          ]
        },
        {
          title: 'Security',
          items: [
            { icon: 'fas fa-key', label: 'Password Reset', size: 'large', desc: 'Reset passwords' },
            { icon: 'fas fa-shield-alt', label: 'Controllers', size: 'medium', desc: 'Domain controllers' },
            { icon: 'fas fa-lock', label: 'Groups', size: 'medium', desc: 'Security groups' }
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
            { icon: 'fas fa-server', label: 'EC2', size: 'large', desc: 'Elastic Compute' },
            { icon: 'fas fa-bolt', label: 'Lambda', size: 'medium', desc: 'Serverless functions' },
            { icon: 'fas fa-cubes', label: 'ECS', size: 'medium', desc: 'Container service' }
          ]
        },
        {
          title: 'Storage',
          items: [
            { icon: 'fas fa-cube', label: 'S3', size: 'large', desc: 'Simple Storage' },
            { icon: 'fas fa-database', label: 'RDS', size: 'medium', desc: 'Relational Database' },
            { icon: 'fas fa-hdd', label: 'EBS', size: 'medium', desc: 'Block Storage' }
          ]
        },
        {
          title: 'Monitor',
          items: [
            { icon: 'fas fa-chart-line', label: 'CloudWatch', size: 'large', desc: 'Monitoring service' },
            { icon: 'fas fa-bell', label: 'Alarms', size: 'small', desc: 'Set alarms' },
            { icon: 'fas fa-list', label: 'Logs', size: 'small', desc: 'View logs' }
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
            { icon: 'fas fa-server', label: 'VMs', size: 'large', desc: 'Virtual Machines' },
            { icon: 'fas fa-network-wired', label: 'Networks', size: 'medium', desc: 'Virtual Networks' },
            { icon: 'fas fa-hdd', label: 'Storage', size: 'medium', desc: 'Storage Accounts' }
          ]
        },
        {
          title: 'Security',
          items: [
            { icon: 'fas fa-shield-virus', label: 'Isolation', size: 'large', desc: 'Azure Isolation' },
            { icon: 'fas fa-shield-alt', label: 'Security Center', size: 'medium', desc: 'Security monitoring' },
            { icon: 'fas fa-key', label: 'Key Vault', size: 'medium', desc: 'Key management' }
          ]
        },
        {
          title: 'Backup',
          items: [
            { icon: 'fas fa-history', label: 'Restore', size: 'large', desc: 'Restore from backup' },
            { icon: 'fas fa-download', label: 'Backup', size: 'small', desc: 'Create backup' },
            { icon: 'fas fa-upload', label: 'Archive', size: 'small', desc: 'Archive data' }
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
            { icon: 'fas fa-search-plus', label: 'Evidence Search', size: 'large', desc: 'Search evidence' },
            { icon: 'fas fa-file-medical', label: 'Cases', size: 'medium', desc: 'Case management' },
            { icon: 'fas fa-fingerprint', label: 'Analysis', size: 'medium', desc: 'Forensic analysis' }
          ]
        },
        {
          title: 'Tools',
          items: [
            { icon: 'fas fa-microscope', label: 'Deep Scan', size: 'large', desc: 'Deep forensic scan' },
            { icon: 'fas fa-file-archive', label: 'Extract', size: 'small', desc: 'Extract files' },
            { icon: 'fas fa-camera', label: 'Capture', size: 'small', desc: 'Capture evidence' }
          ]
        },
        {
          title: 'Reports',
          items: [
            { icon: 'fas fa-file-alt', label: 'Generate', size: 'large', desc: 'Generate report' },
            { icon: 'fas fa-print', label: 'Print', size: 'small', desc: 'Print report' },
            { icon: 'fas fa-share', label: 'Share', size: 'small', desc: 'Share findings' }
          ]
        }
      ]
    }
  ];

  const currentTab = tabs.find(tab => tab.id === activeTab);

  return (
    <div className="bg-white shadow-lg border-b border-gray-200">
      {/* Top Bar with macOS-style design */}
      <div className="flex items-center justify-between px-6 py-3 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="h-4 w-px bg-gray-300"></div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-sm">
              <i className="fas fa-cube text-white text-sm"></i>
            </div>
            <h1 className="text-lg font-semibold text-gray-900 tracking-tight">Admin Console</h1>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Tell me what you want to do..." 
              className="w-96 pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:bg-white transition-all duration-200 placeholder-gray-500"
            />
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-white/60 rounded-lg transition-all duration-200 backdrop-blur-sm">
              <i className="fas fa-cog text-sm"></i>
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-white/60 rounded-lg transition-all duration-200 backdrop-blur-sm">
              <i className="fas fa-user-circle text-sm"></i>
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-white/60 rounded-lg transition-all duration-200 backdrop-blur-sm">
              <i className="fas fa-question-circle text-sm"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Tab Navigation */}
      <div className="flex items-center justify-center px-6 bg-white relative">
        <div className="flex items-center space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`group relative px-6 py-3 text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeTab === tab.id
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <i className={`${tab.icon} text-sm`}></i>
              <span>{tab.label}</span>
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
              )}
              <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                activeTab === tab.id 
                  ? 'bg-blue-50/50' 
                  : 'group-hover:bg-gray-50/50'
              }`}></div>
            </button>
          ))}
        </div>
        <button
          onClick={() => setIsRibbonExpanded(!isRibbonExpanded)}
          className="ml-auto p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200"
        >
          <i className={`fas ${isRibbonExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
        </button>
      </div>

      {/* Modern Ribbon Content */}
      {isRibbonExpanded && currentTab && (
        <div className="px-6 py-6 bg-gradient-to-b from-gray-50/30 to-gray-50/60 border-t border-gray-100 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center space-x-12">
              {currentTab.groups.map((group, groupIndex) => (
                <div key={groupIndex} className="flex flex-col items-center">
                  <div className="flex items-end space-x-3 mb-4">
                    {group.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="group relative"
                      >
                        <button
                          className={`modern-ribbon-button ${item.size} relative overflow-hidden`}
                          title={item.desc}
                        >
                          <div className="relative z-10 flex flex-col items-center justify-center h-full">
                            <i className={`${item.icon} ${
                              item.size === 'large' ? 'text-2xl mb-2' : 
                              item.size === 'medium' ? 'text-lg mb-1.5' : 'text-base mb-1'
                            } text-gray-700 group-hover:text-blue-600 transition-colors duration-200`}></i>
                            <span className={`${
                              item.size === 'large' ? 'text-xs font-medium' : 
                              item.size === 'medium' ? 'text-xs' : 'text-xs'
                            } text-gray-700 group-hover:text-blue-600 transition-colors duration-200 text-center leading-tight`}>
                              {item.label}
                            </span>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-white/20 group-hover:from-blue-50/50 group-hover:to-blue-100/50 transition-all duration-200"></div>
                          <div className="absolute inset-0 border border-gray-200/60 rounded-lg group-hover:border-blue-300/60 group-hover:shadow-md transition-all duration-200"></div>
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-gray-600 font-medium text-center border-t border-gray-200/60 pt-2 px-4">
                    {group.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
