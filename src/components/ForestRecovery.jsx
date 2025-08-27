
import React, { useState } from 'react';

const ForestRecovery = () => {
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [selectAll, setSelectAll] = useState(false);
  const [cleanupOptions, setCleanupOptions] = useState({
    selectAll: false,
    authRestoreSysvol: false,
    cleanDNS: false,
    currentUserPasswordReset: false,
    domainControllerPasswordReset: false,
    metadataCleanup: false,
    removeCertificates: false,
    removeExternalTrusts: false,
    removeSecrets: false,
    resetAllComputerAccounts: false,
    resetAllUserPasswords: false,
    resetDSRMPassword: false,
    resetKrbtgtPassword: false,
    resetRID500Password: false,
    resetRODCRevealed: false,
    resetTierZeroPasswords: false,
    resetTrusts: false,
    seizeFSMORoles: false
  });

  const domainControllers = [
    {
      id: 1,
      type: 'Forest Root',
      domain: 'praevia.local',
      domainSid: 'S-1-5-21-237783...',
      site: 'London',
      samAccountName: 'AU09$',
      netBIOS: 'AU09',
      fqdn: 'au09.praevia.local',
      isGC: true,
      isRO: false,
      ipv4Address: '10.0.0.10'
    }
  ];

  const handleRowSelect = (rowId) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(rowId)) {
      newSelected.delete(rowId);
    } else {
      newSelected.add(rowId);
    }
    setSelectedRows(newSelected);
    setSelectAll(newSelected.size === domainControllers.length);
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows(new Set());
      setSelectAll(false);
    } else {
      setSelectedRows(new Set(domainControllers.map(dc => dc.id)));
      setSelectAll(true);
    }
  };

  const handleCleanupOption = (option) => {
    if (option === 'selectAll') {
      const newValue = !cleanupOptions.selectAll;
      const newOptions = Object.keys(cleanupOptions).reduce((acc, key) => {
        acc[key] = newValue;
        return acc;
      }, {});
      setCleanupOptions(newOptions);
    } else {
      const newOptions = {
        ...cleanupOptions,
        [option]: !cleanupOptions[option]
      };
      // Update selectAll based on whether all other options are selected
      const otherOptions = Object.keys(newOptions).filter(key => key !== 'selectAll');
      const allSelected = otherOptions.every(key => newOptions[key]);
      newOptions.selectAll = allSelected;
      setCleanupOptions(newOptions);
    }
  };

  const cleanupItems = [
    { key: 'authRestoreSysvol', label: 'Auth Restore Sysvol' },
    { key: 'cleanDNS', label: 'Clean DNS' },
    { key: 'currentUserPasswordReset', label: 'Current User Password Reset' },
    { key: 'domainControllerPasswordReset', label: 'Domain Controller Password Reset' },
    { key: 'metadataCleanup', label: 'Metadata Cleanup' },
    { key: 'removeCertificates', label: 'Remove Certificates' },
    { key: 'removeExternalTrusts', label: 'Remove External Trusts' },
    { key: 'removeSecrets', label: 'Remove Secrets' },
    { key: 'resetAllComputerAccounts', label: 'Reset All Computer Accounts' },
    { key: 'resetAllUserPasswords', label: 'Reset All User Passwords' },
    { key: 'resetDSRMPassword', label: 'Reset DSRM Password' },
    { key: 'resetKrbtgtPassword', label: 'Reset Krbtgt Password' },
    { key: 'resetRID500Password', label: 'Reset RID 500 Password' },
    { key: 'resetRODCRevealed', label: 'Reset RODC Revealed' },
    { key: 'resetTierZeroPasswords', label: 'Reset Tier Zero Passwords' },
    { key: 'resetTrusts', label: 'Reset Trusts' },
    { key: 'seizeFSMORoles', label: 'Seize FSMO Roles' }
  ];

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl shadow-lg">
              <i className="fas fa-tree text-white text-2xl"></i>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Forest Recovery</h1>
              <p className="text-gray-600 mt-1">Recover and restore your Active Directory forest</p>
            </div>
          </div>
          
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center space-x-2">
            <i className="fas fa-sync-alt"></i>
            <span>Refresh Forest Discovery</span>
          </button>
        </div>

        {/* Domain Controllers Table */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Select Domain Controller(s) for Forest Recovery:</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-gray-100 to-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectAll}
                        onChange={handleSelectAll}
                        className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <span className="ml-3 text-sm font-semibold text-gray-700">Select All</span>
                    </label>
                  </th>
                  {['Type', 'Domain', 'DomainSid', 'Site', 'SamAccountN...', 'NetBIOS', 'FQDN', 'IsGC', 'IsRO', 'IPv4Address'].map((header) => (
                    <th key={header} className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-l border-gray-200">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {domainControllers.map((dc) => (
                  <tr 
                    key={dc.id} 
                    className={`hover:bg-blue-50 transition-colors duration-150 ${selectedRows.has(dc.id) ? 'bg-blue-50 ring-2 ring-blue-200' : ''}`}
                  >
                    <td className="px-6 py-4">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedRows.has(dc.id)}
                          onChange={() => handleRowSelect(dc.id)}
                          className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </label>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium border-l border-gray-100">{dc.type}</td>
                    <td className="px-6 py-4 text-sm text-gray-700 border-l border-gray-100">{dc.domain}</td>
                    <td className="px-6 py-4 text-sm text-gray-700 border-l border-gray-100 font-mono">{dc.domainSid}</td>
                    <td className="px-6 py-4 text-sm text-gray-700 border-l border-gray-100">{dc.site}</td>
                    <td className="px-6 py-4 text-sm text-gray-700 border-l border-gray-100 font-mono">{dc.samAccountName}</td>
                    <td className="px-6 py-4 text-sm text-gray-700 border-l border-gray-100 font-mono">{dc.netBIOS}</td>
                    <td className="px-6 py-4 text-sm text-gray-700 border-l border-gray-100 font-mono">{dc.fqdn}</td>
                    <td className="px-6 py-4 text-sm border-l border-gray-100">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${dc.isGC ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {dc.isGC ? 'True' : 'False'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm border-l border-gray-100">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${!dc.isRO ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {dc.isRO ? 'True' : 'False'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 border-l border-gray-100 font-mono">{dc.ipv4Address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Clean-up Options */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg">
              <i className="fas fa-broom text-white text-xl"></i>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Clean-up</h2>
          </div>

          {/* Select All Checkbox */}
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={cleanupOptions.selectAll}
                onChange={() => handleCleanupOption('selectAll')}
                className="w-6 h-6 text-blue-600 border-2 border-blue-300 rounded focus:ring-3 focus:ring-blue-500 focus:border-blue-500"
              />
              <span className="ml-4 text-lg font-semibold text-blue-900">Select All</span>
            </label>
          </div>

          {/* Cleanup Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cleanupItems.map((item) => (
              <label key={item.key} className="flex items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-xl cursor-pointer transition-colors duration-150 border border-gray-200 hover:border-gray-300">
                <input
                  type="checkbox"
                  checked={cleanupOptions[item.key]}
                  onChange={() => handleCleanupOption(item.key)}
                  className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <span className="ml-3 text-sm font-medium text-gray-700">{item.label}</span>
              </label>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mt-8 pt-6 border-t border-gray-200">
            <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center space-x-2">
              <i className="fas fa-play"></i>
              <span>Start</span>
            </button>
            <button className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center space-x-2">
              <i className="fas fa-times"></i>
              <span>Exit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForestRecovery;
