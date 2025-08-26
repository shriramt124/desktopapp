
import React from 'react';

const MainContent = ({ activeTab }) => {
  const getTabContent = () => {
    switch (activeTab) {
      case 'dashboards':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Dashboard Overview</h2>
              <p className="text-gray-600">Create and manage your dashboards with powerful analytics tools.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Total Users', value: '2,847', change: '+12%', icon: 'fas fa-users', color: 'blue' },
                { title: 'Active Sessions', value: '1,234', change: '+5%', icon: 'fas fa-chart-line', color: 'green' },
                { title: 'Revenue', value: '$45,320', change: '+8%', icon: 'fas fa-dollar-sign', color: 'purple' },
                { title: 'Conversion Rate', value: '3.2%', change: '+0.5%', icon: 'fas fa-percentage', color: 'orange' }
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <div className={`p-3 bg-${stat.color}-100 rounded-lg`}>
                      <i className={`${stat.icon} text-${stat.color}-600`}></i>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm">
                    <span className="text-green-600 font-medium">{stat.change}</span>
                    <span className="text-gray-600 ml-2">from last month</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'directory':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Active Directory Management</h2>
              <p className="text-gray-600">Manage users, computers, and security policies across your domain.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent User Activities</h3>
                <div className="space-y-3">
                  {['User john.doe logged in', 'Password reset for jane.smith', 'New user alice.johnson created'].map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <i className="fas fa-user-clock text-blue-600"></i>
                      <span className="text-sm text-gray-700">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Domain Health</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Domain Controllers', status: 'Healthy', icon: 'fas fa-server', color: 'green' },
                    { label: 'Replication Status', status: 'Normal', icon: 'fas fa-sync', color: 'green' },
                    { label: 'Security Policies', status: 'Updated', icon: 'fas fa-shield-alt', color: 'blue' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <i className={`${item.icon} text-${item.color}-600`}></i>
                        <span className="text-sm font-medium text-gray-700">{item.label}</span>
                      </div>
                      <span className={`text-sm font-medium text-${item.color}-600`}>{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'aws':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">AWS Resource Management</h2>
              <p className="text-gray-600">Monitor and manage your AWS infrastructure and services.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                { title: 'EC2 Instances', count: '24', status: 'Running', icon: 'fas fa-server', color: 'blue' },
                { title: 'S3 Buckets', count: '8', status: 'Active', icon: 'fas fa-cube', color: 'green' },
                { title: 'RDS Databases', count: '3', status: 'Available', icon: 'fas fa-database', color: 'purple' }
              ].map((resource, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{resource.title}</h3>
                    <i className={`${resource.icon} text-${resource.color}-600 text-xl`}></i>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{resource.count}</div>
                  <div className={`text-sm font-medium text-${resource.color}-600`}>{resource.status}</div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'azure':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Azure Resource Management</h2>
              <p className="text-gray-600">Manage your Microsoft Azure cloud resources and services.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Resource Groups</h3>
              <div className="space-y-3">
                {[
                  { name: 'Production-RG', resources: '12 resources', location: 'East US', status: 'Active' },
                  { name: 'Development-RG', resources: '8 resources', location: 'West Europe', status: 'Active' },
                  { name: 'Testing-RG', resources: '5 resources', location: 'Southeast Asia', status: 'Active' }
                ].map((rg, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">{rg.name}</div>
                      <div className="text-sm text-gray-600">{rg.resources} • {rg.location}</div>
                    </div>
                    <span className="text-sm font-medium text-green-600">{rg.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'forensics':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Digital Forensics</h2>
              <p className="text-gray-600">Investigate and analyze digital evidence with advanced forensic tools.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Cases</h3>
                <div className="space-y-3">
                  {[
                    { id: 'CASE-001', title: 'Security Breach Investigation', priority: 'High', status: 'In Progress' },
                    { id: 'CASE-002', title: 'Data Recovery Analysis', priority: 'Medium', status: 'Pending' },
                    { id: 'CASE-003', title: 'Network Intrusion Study', priority: 'Low', status: 'Completed' }
                  ].map((case_item, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">{case_item.id}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          case_item.priority === 'High' ? 'bg-red-100 text-red-800' :
                          case_item.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {case_item.priority}
                        </span>
                      </div>
                      <div className="text-sm text-gray-700 mb-1">{case_item.title}</div>
                      <div className="text-xs text-gray-500">{case_item.status}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Evidence Storage</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Total Evidence Files</span>
                    <span className="text-lg font-bold text-gray-900">1,247</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Storage Used</span>
                    <span className="text-lg font-bold text-gray-900">2.8 TB</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Chain of Custody</span>
                    <span className="text-lg font-bold text-green-600">Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return <div>Select a tab to view content</div>;
    }
  };

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          {getTabContent()}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
