
import React from 'react';

const MainContent = ({ activeTab }) => {
  const getTabContent = () => {
    switch (activeTab) {
      case 'dashboards':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Dashboard Overview</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Create and manage your dashboards with powerful analytics tools and real-time insights.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Total Users', value: '2,847', change: '+12%', icon: 'fas fa-users', color: 'blue', bg: 'from-blue-500 to-blue-600' },
                { title: 'Active Sessions', value: '1,234', change: '+5%', icon: 'fas fa-chart-line', color: 'emerald', bg: 'from-emerald-500 to-emerald-600' },
                { title: 'Revenue', value: '$45,320', change: '+8%', icon: 'fas fa-dollar-sign', color: 'purple', bg: 'from-purple-500 to-purple-600' },
                { title: 'Conversion Rate', value: '3.2%', change: '+0.5%', icon: 'fas fa-percentage', color: 'orange', bg: 'from-orange-500 to-orange-600' }
              ].map((stat, index) => (
                <div key={index} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 p-6 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                      <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <div className={`p-3 bg-gradient-to-br ${stat.bg} rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <i className={`${stat.icon} text-white text-xl`}></i>
                    </div>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-emerald-600 font-semibold bg-emerald-50 px-2 py-1 rounded-full">{stat.change}</span>
                    <span className="text-gray-500 ml-2">from last month</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Quick Actions</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: 'fas fa-plus-circle', label: 'Create Dashboard', color: 'blue' },
                  { icon: 'fas fa-chart-bar', label: 'View Analytics', color: 'emerald' },
                  { icon: 'fas fa-download', label: 'Export Data', color: 'purple' },
                  { icon: 'fas fa-cog', label: 'Settings', color: 'gray' }
                ].map((action, index) => (
                  <button key={index} className={`p-4 rounded-xl border-2 border-gray-100 hover:border-${action.color}-200 hover:bg-${action.color}-50 transition-all duration-200 text-center group`}>
                    <i className={`${action.icon} text-2xl text-${action.color}-600 mb-2 group-hover:scale-110 transition-transform duration-200`}></i>
                    <p className="text-sm font-medium text-gray-700">{action.label}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'directory':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Active Directory Management</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Manage users, computers, and security policies across your domain infrastructure.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
                    <i className="fas fa-user-clock text-white text-xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4">Recent User Activities</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { activity: 'User john.doe logged in', time: '5 minutes ago', icon: 'fas fa-sign-in-alt', color: 'emerald' },
                    { activity: 'Password reset for jane.smith', time: '15 minutes ago', icon: 'fas fa-key', color: 'orange' },
                    { activity: 'New user alice.johnson created', time: '1 hour ago', icon: 'fas fa-user-plus', color: 'blue' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                      <div className={`p-2 bg-${item.color}-100 rounded-lg`}>
                        <i className={`${item.icon} text-${item.color}-600`}></i>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{item.activity}</p>
                        <p className="text-xs text-gray-500">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl shadow-lg">
                    <i className="fas fa-server text-white text-xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4">Domain Health</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Domain Controllers', status: 'Healthy', icon: 'fas fa-server', color: 'emerald' },
                    { label: 'Replication Status', status: 'Normal', icon: 'fas fa-sync', color: 'emerald' },
                    { label: 'Security Policies', status: 'Updated', icon: 'fas fa-shield-alt', color: 'blue' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 bg-${item.color}-100 rounded-lg`}>
                          <i className={`${item.icon} text-${item.color}-600`}></i>
                        </div>
                        <span className="text-sm font-medium text-gray-700">{item.label}</span>
                      </div>
                      <span className={`text-sm font-semibold text-${item.color}-600 bg-${item.color}-50 px-3 py-1 rounded-full`}>{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'aws':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">AWS Resource Management</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Monitor and manage your AWS infrastructure and services with comprehensive tools.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'EC2 Instances', count: '24', status: 'Running', icon: 'fas fa-server', color: 'blue', bg: 'from-blue-500 to-blue-600' },
                { title: 'S3 Buckets', count: '8', status: 'Active', icon: 'fas fa-cube', color: 'emerald', bg: 'from-emerald-500 to-emerald-600' },
                { title: 'RDS Databases', count: '3', status: 'Available', icon: 'fas fa-database', color: 'purple', bg: 'from-purple-500 to-purple-600' }
              ].map((resource, index) => (
                <div key={index} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 p-6 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{resource.title}</h3>
                    <div className={`p-3 bg-gradient-to-br ${resource.bg} rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <i className={`${resource.icon} text-white text-xl`}></i>
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{resource.count}</div>
                  <div className={`text-sm font-semibold text-${resource.color}-600 bg-${resource.color}-50 px-3 py-1 rounded-full inline-block`}>{resource.status}</div>
                </div>
              ))}
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Service Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-gray-800">Compute Services</h4>
                  {['EC2 Instances', 'Lambda Functions', 'ECS Containers'].map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">{service}</span>
                      <span className="text-emerald-600 font-medium">Active</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-gray-800">Storage Services</h4>
                  {['S3 Storage', 'RDS Database', 'EBS Volumes'].map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">{service}</span>
                      <span className="text-emerald-600 font-medium">Healthy</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'azure':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Azure Resource Management</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Manage your Microsoft Azure cloud resources and services efficiently.</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
                  <i className="fas fa-layer-group text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Resource Groups</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: 'Production-RG', resources: '12 resources', location: 'East US', status: 'Active', color: 'emerald' },
                  { name: 'Development-RG', resources: '8 resources', location: 'West Europe', status: 'Active', color: 'blue' },
                  { name: 'Testing-RG', resources: '5 resources', location: 'Southeast Asia', status: 'Active', color: 'purple' }
                ].map((rg, index) => (
                  <div key={index} className="group p-6 bg-gray-50 hover:bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{rg.name}</h4>
                        <p className="text-sm text-gray-600">{rg.resources}</p>
                        <p className="text-xs text-gray-500">{rg.location}</p>
                      </div>
                      <span className={`text-xs font-semibold text-${rg.color}-600 bg-${rg.color}-50 px-2 py-1 rounded-full`}>{rg.status}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className={`bg-${rg.color}-500 h-2 rounded-full`} style={{width: `${75 + index * 10}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'forensics':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Digital Forensics</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Investigate and analyze digital evidence with advanced forensic tools and methodologies.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg">
                    <i className="fas fa-folder-open text-white text-xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4">Active Cases</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { id: 'CASE-001', title: 'Security Breach Investigation', priority: 'High', status: 'In Progress', color: 'red' },
                    { id: 'CASE-002', title: 'Data Recovery Analysis', priority: 'Medium', status: 'Pending', color: 'yellow' },
                    { id: 'CASE-003', title: 'Network Intrusion Study', priority: 'Low', status: 'Completed', color: 'emerald' }
                  ].map((case_item, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 border border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-semibold text-gray-900">{case_item.id}</span>
                        <div className="flex items-center space-x-2">
                          <span className={`text-xs px-2 py-1 rounded-full font-medium bg-${case_item.color}-100 text-${case_item.color}-800`}>
                            {case_item.priority}
                          </span>
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                            case_item.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' :
                            case_item.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {case_item.status}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 font-medium">{case_item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg">
                    <i className="fas fa-database text-white text-xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4">Evidence Storage</h3>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                      <div className="text-2xl font-bold text-blue-900">1,247</div>
                      <div className="text-sm font-medium text-blue-700">Evidence Files</div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                      <div className="text-2xl font-bold text-purple-900">2.8 TB</div>
                      <div className="text-sm font-medium text-purple-700">Storage Used</div>
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl border border-emerald-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-lg font-bold text-emerald-900">Chain of Custody</div>
                        <div className="text-sm text-emerald-700">All evidence verified</div>
                      </div>
                      <i className="fas fa-shield-alt text-2xl text-emerald-600"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="text-center py-16">
            <div className="text-6xl text-gray-300 mb-4">
              <i className="fas fa-mouse-pointer"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-600">Select a tab to view content</h3>
            <p className="text-gray-500 mt-2">Choose from the navigation above to explore different sections</p>
          </div>
        );
    }
  };

  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          {getTabContent()}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
