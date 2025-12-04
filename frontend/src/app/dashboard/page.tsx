'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';

export default function Dashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleLogout = () => {
    router.push('/login');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            {/* Welcome Hero Section */}
            <div className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rounded-2xl p-8 text-slate-800 overflow-hidden border border-blue-300">
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-300 opacity-20 rounded-full transform translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400 opacity-15 rounded-full transform -translate-x-24 translate-y-24"></div>
              
              <div className="relative z-10">
                <div className="text-left">
                  <h1 className="text-4xl font-bold mb-3 text-slate-800">Welcome Back, Commander.</h1>
                  <p className="text-slate-600 text-lg mb-6">System status is <span className="text-green-600 font-semibold">Green</span>. Review critical anomalies below.</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md">
                    VIEW SYSTEM REPORT
                  </button>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Total Issues</p>
                    <p className="text-3xl font-bold text-slate-900">128</p>
                    <p className="text-xs text-slate-500">All time submissions</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">High Priority</p>
                    <p className="text-3xl font-bold text-red-600">15</p>
                    <p className="text-xs text-slate-500">Requires immediate attention</p>
                  </div>
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">In Progress</p>
                    <p className="text-3xl font-bold text-yellow-600">42</p>
                    <p className="text-xs text-slate-500">Currently being resolved</p>
                  </div>
                  <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Resolved</p>
                    <p className="text-3xl font-bold text-green-600">71</p>
                    <p className="text-xs text-slate-500">Successfully completed</p>
                  </div>
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Issues by Category */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-slate-900">Issues by Category</h3>
                  <button className="text-sm text-blue-600 hover:text-blue-800">View all</button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">Road Damage</span>
                    <span className="text-sm text-slate-500">35</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '70%'}}></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">Waste Management</span>
                    <span className="text-sm text-slate-500">28</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '56%'}}></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">Water Supply</span>
                    <span className="text-sm text-slate-500">22</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{width: '44%'}}></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">Street Light</span>
                    <span className="text-sm text-slate-500">18</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{width: '36%'}}></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">Drainage</span>
                    <span className="text-sm text-slate-500">15</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '30%'}}></div>
                  </div>
                </div>
              </div>

              {/* Priority Distribution */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-slate-900">Issues by Priority</h3>
                  <button className="text-sm text-blue-600 hover:text-blue-800">Details</button>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#f1f5f9" strokeWidth="8"/>
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#dc2626" strokeWidth="8" 
                              strokeDasharray="75.4" strokeDashoffset="0" strokeLinecap="round"/>
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#f59e0b" strokeWidth="8" 
                              strokeDasharray="50.3" strokeDashoffset="75.4" strokeLinecap="round"/>
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#10b981" strokeWidth="8" 
                              strokeDasharray="125.7" strokeDashoffset="125.7" strokeLinecap="round"/>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-slate-900">128</p>
                        <p className="text-xs text-slate-500">Total</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-sm text-slate-700">High Priority</span>
                    </div>
                    <span className="text-sm font-medium text-slate-900">15</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm text-slate-700">Medium Priority</span>
                    </div>
                    <span className="text-sm font-medium text-slate-900">42</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-slate-700">Low Priority</span>
                    </div>
                    <span className="text-sm font-medium text-slate-900">71</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Issues */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200">
              <div className="p-6 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">Recent Issues</h3>
                  <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">View all</button>
                </div>
              </div>
              <div className="divide-y divide-slate-200">
                <div className="p-6 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-medium text-slate-900">Large pothole on Main Street</h4>
                        <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">Road Damage</span>
                        <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">Pending</span>
                      </div>
                      <p className="text-sm text-slate-600 mb-2">📍 123 Main Street, Downtown</p>
                      <p className="text-xs text-slate-500">about 1 year ago</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">#92</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-medium text-slate-900">Overflowing garbage bins at Central Park</h4>
                        <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">Waste Management</span>
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">In Review</span>
                      </div>
                      <p className="text-sm text-slate-600 mb-2">📍 Central Park, Playground Area</p>
                      <p className="text-xs text-slate-500">about 1 year ago</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 rounded-full text-sm font-semibold">#88</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-medium text-slate-900">Broken street light on Elm Avenue</h4>
                        <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">Street Light</span>
                        <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">Pending</span>
                      </div>
                      <p className="text-sm text-slate-600 mb-2">📍 45 Elm Avenue, Residential District</p>
                      <p className="text-xs text-slate-500">about 1 year ago</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-yellow-100 text-yellow-600 rounded-full text-sm font-semibold">#65</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'citizen-issues':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
            <h2 className="text-xl font-semibold mb-4">Citizen Issues</h2>
            <p className="text-gray-600">Manage and review citizen reported issues here.</p>
          </div>
        );
      case 'citizen-proposals':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
            <h2 className="text-xl font-semibold mb-4">Citizen Proposals</h2>
            <p className="text-gray-600">Review and manage citizen submitted proposals.</p>
          </div>
        );
      case 'active-projects':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
            <h2 className="text-xl font-semibold mb-4">Active Projects</h2>
            <p className="text-gray-600">Monitor ongoing community projects and initiatives.</p>
          </div>
        );
      case 'reports':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
            <h2 className="text-xl font-semibold mb-4">Reports</h2>
            <p className="text-gray-600">View analytics and reports here.</p>
          </div>
        );
      case 'settings':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
            <h2 className="text-xl font-semibold mb-4">Settings</h2>
            <p className="text-gray-600">Configure your preferences here.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="ml-64 flex flex-col min-h-screen">
        <div className="sticky top-0 z-20">
          <Topbar activeTab={activeTab} onLogout={handleLogout} />
        </div>
        
        <div className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}