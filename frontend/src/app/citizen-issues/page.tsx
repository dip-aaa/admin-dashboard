'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';

export default function CitizenIssues() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('citizen-issues');
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [showReports, setShowReports] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('All Priorities');
  const [statusFilter, setStatusFilter] = useState('All Statuses');

  const handleLogout = () => {
    router.push('/login');
  };

  const issuesData = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=80&h=80&fit=crop',
      title: 'Water pipe leak causing flooding',
      location: '201 Commerce Street',
      category: 'Water Supply',
      categoryColor: 'bg-blue-100 text-blue-700',
      categoryIcon: '💧',
      priority: 95,
      status: 'In Review',
      statusColor: 'bg-blue-100 text-blue-700',
      submitted: 'about 1 year ago',
      description: 'Multiple reports of severe water pipe leak causing flooding in residential area',
      reportsCount: 45,
      engagement: 'High Engagement',
      timeAgo: '2 hours ago',
      recentReports: [
        {
          name: 'Pradip Khadka',
          report: 'Water flooding in street, urgent repair needed.',
          timeAgo: '2h ago',
          avatar: 'P',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop'
        },
        {
          name: 'Sajan Shrestha',
          report: 'No water supply since yesterday due to pipe damage.',
          timeAgo: '4h ago',
          avatar: 'S',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop'
        }
      ]
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=80&h=80&fit=crop',
      title: 'Large pothole on Main Street',
      location: '123 Main Street, Downtown',
      category: 'Road Damage',
      categoryColor: 'bg-orange-100 text-orange-700',
      categoryIcon: '🛣️',
      priority: 92,
      status: 'Pending',
      statusColor: 'bg-yellow-100 text-yellow-700',
      submitted: 'about 1 year ago',
      description: 'Multiple reports of severe potholes causing vehicle damage on Main Street',
      reportsCount: 45,
      engagement: 'High Engagement',
      timeAgo: '3 hours ago',
      recentReports: [
        {
          name: 'Pradip Khadka',
          report: 'Huge pothole on Main Street area, nearly popped my tire.',
          timeAgo: '2h ago',
          avatar: 'P',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop'
        },
        {
          name: 'Sajan Shrestha',
          report: 'Road condition is terrible near the downtown area.',
          timeAgo: '4h ago',
          avatar: 'S',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop'
        }
      ]
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=80&h=80&fit=crop',
      title: 'Missing stop sign at intersection',
      location: 'Pine Street & 3rd Avenue',
      category: 'Other',
      categoryColor: 'bg-gray-100 text-gray-700',
      categoryIcon: '🚏',
      priority: 90,
      status: 'Resolved',
      statusColor: 'bg-green-100 text-green-700',
      submitted: 'about 1 year ago',
      description: 'Traffic safety issue due to missing stop sign at busy intersection',
      reportsCount: 28,
      engagement: 'Medium Engagement',
      timeAgo: '5 hours ago',
      recentReports: [
        {
          name: 'Maya Gurung',
          report: 'Dangerous intersection without stop sign.',
          timeAgo: '1h ago',
          avatar: 'M',
          image: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=300&h=200&fit=crop'
        }
      ]
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=80&h=80&fit=crop',
      title: 'Overflowing garbage bins at Central Park',
      location: 'Central Park, Playground Area',
      category: 'Waste Management',
      categoryColor: 'bg-green-100 text-green-700',
      categoryIcon: '🗑️',
      priority: 88,
      status: 'In Review',
      statusColor: 'bg-blue-100 text-blue-700',
      submitted: 'about 1 year ago',
      description: 'Waste bins overflowing causing hygiene and environmental issues',
      reportsCount: 35,
      engagement: 'High Engagement',
      timeAgo: '8 hours ago',
      recentReports: [
        {
          name: 'Kiran Thapa',
          report: 'Garbage scattered all around playground area.',
          timeAgo: '3h ago',
          avatar: 'K',
          image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop'
        }
      ]
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=80&h=80&fit=crop',
      title: 'Power outage in residential block',
      location: 'Riverside Drive, Block 12-18',
      category: 'Electricity',
      categoryColor: 'bg-yellow-100 text-yellow-700',
      categoryIcon: '⚡',
      priority: 85,
      status: 'Resolved',
      statusColor: 'bg-green-100 text-green-700',
      submitted: 'about 1 year ago',
      description: 'Extended power outage affecting multiple residential buildings',
      reportsCount: 42,
      engagement: 'High Engagement',
      timeAgo: '12 hours ago',
      recentReports: [
        {
          name: 'Raj Magar',
          report: 'No electricity since morning in our block.',
          timeAgo: '6h ago',
          avatar: 'R',
          image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=300&h=200&fit=crop'
        }
      ]
    }
  ];

  const filteredIssues = issuesData.filter(issue => {
    const matchesSearch = issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         issue.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         issue.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPriority = priorityFilter === 'All Priorities' || 
                           (priorityFilter === 'High' && issue.priority >= 90) ||
                           (priorityFilter === 'Medium' && issue.priority >= 70 && issue.priority < 90) ||
                           (priorityFilter === 'Low' && issue.priority < 70);
    
    const matchesStatus = statusFilter === 'All Statuses' || issue.status === statusFilter;
    
    return matchesSearch && matchesPriority && matchesStatus;
  });

  const handleIssueClick = (issue) => {
    setSelectedIssue(issue);
  };

  const handleBackToList = () => {
    setSelectedIssue(null);
  };

  // If an issue is selected, show the detailed view
  if (selectedIssue) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="ml-64 flex flex-col min-h-screen">
          <div className="sticky top-0 z-20">
            <Topbar activeTab={activeTab} onLogout={handleLogout} />
          </div>
          
          <div className="flex-1 p-8">
            <div className="max-w-5xl mx-auto">
              {/* Back Button */}
              <button 
                onClick={handleBackToList}
                className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Issues List
              </button>

              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h1 className="text-2xl font-bold text-slate-800">Priority Issues</h1>
                    <p className="text-slate-500 mt-1">AI-grouped citizen reports ranked by community impact.</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Time Range: Last 7 Days</span>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Refresh AI Analysis
                    </button>
                  </div>
                </div>
              </div>

              {/* Issue Detail Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-8">
                  <div className="flex gap-8">
                    {/* Left Content */}
                    <div className="flex-1">
                      {/* Header Tags */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${selectedIssue.categoryColor}`}>
                          {selectedIssue.categoryIcon} {selectedIssue.category}
                        </span>
                        <div className="flex items-center gap-1 text-sm text-slate-500">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>{selectedIssue.location}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-slate-500">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{selectedIssue.timeAgo}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl font-bold text-slate-900 mb-4">{selectedIssue.title}</h2>

                      {/* AI Summary */}
                      <div className="flex items-start gap-3 mb-6">
                        <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-800 mb-2">AI Summary</p>
                          <p className="text-slate-600 leading-relaxed">{selectedIssue.description}</p>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-6 mb-8">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <span className="font-semibold text-slate-900">{selectedIssue.reportsCount} Reports</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l3-3 3 3m-3-3v8" />
                          </svg>
                          <span className="text-green-600 font-semibold">{selectedIssue.engagement}</span>
                        </div>
                      </div>

                      {/* Hide/Show Reports Toggle */}
                      <div className="mb-6">
                        <button 
                          onClick={() => setShowReports(!showReports)}
                          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                        >
                          <span>{showReports ? 'Hide Reports' : 'Show Reports'}</span>
                          <svg className={`w-4 h-4 transition-transform ${showReports ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>

                      {/* Recent Citizen Reports */}
                      {showReports && (
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-4">Recent Citizen Reports</h3>
                          <div className="space-y-4">
                            {selectedIssue.recentReports.map((report, index) => (
                              <div key={index} className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                                <div className="w-10 h-10 bg-slate-400 rounded-full flex items-center justify-center flex-shrink-0">
                                  <span className="text-white font-semibold">{report.avatar}</span>
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-3 mb-2">
                                    <span className="font-semibold text-slate-900">{report.name}</span>
                                    <span className="text-sm text-slate-500">{report.timeAgo}</span>
                                  </div>
                                  <p className="text-slate-700 mb-3 leading-relaxed">{report.report}</p>
                                  {report.image && (
                                    <div className="mt-3">
                                      <img 
                                        src={report.image} 
                                        alt="Issue reported by citizen" 
                                        className="w-48 h-32 object-cover rounded-lg border border-slate-200"
                                      />
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right Side - Priority Score & Action */}
                    <div className="flex flex-col items-center gap-6">
                      <div className="text-center">
                        <div className="text-6xl font-bold text-blue-600 mb-2">{selectedIssue.priority}</div>
                        <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">PRIORITY SCORE</div>
                      </div>
                      
                      <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-sm">
                        Draft Proposal
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default view - Issues table/list
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="ml-64 flex flex-col min-h-screen">
        <div className="sticky top-0 z-20">
          <Topbar activeTab={activeTab} onLogout={handleLogout} />
        </div>
        
        <div className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Search and Filters */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-6">
              <div className="flex items-center gap-4">
                <div className="flex-1 relative">
                  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search issues..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-black placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                </div>

                <select 
                  value={priorityFilter}
                  onChange={(e) => setPriorityFilter(e.target.value)}
                  className="px-3 py-2 border border-slate-300 rounded-lg text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>All Priorities</option>
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>

                <select 
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 border border-slate-300 rounded-lg text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>All Statuses</option>
                  <option>Pending</option>
                  <option>In Review</option>
                  <option>Resolved</option>
                </select>
              </div>
            </div>

            {/* Results count */}
            <div className="mb-4">
              <p className="text-slate-600">Showing {filteredIssues.length} of {issuesData.length} issues</p>
            </div>

            {/* Issues Table */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="text-left p-4 font-semibold text-slate-700">Image</th>
                      <th className="text-left p-4 font-semibold text-slate-700">Issue</th>
                      <th className="text-left p-4 font-semibold text-slate-700">Category</th>
                      <th className="text-left p-4 font-semibold text-slate-700">Priority</th>
                      <th className="text-left p-4 font-semibold text-slate-700">Status</th>
                      <th className="text-left p-4 font-semibold text-slate-700">Submitted</th>
                      <th className="w-12"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {filteredIssues.map((issue) => (
                      <tr 
                        key={issue.id} 
                        className="hover:bg-slate-50 cursor-pointer transition-colors"
                        onClick={() => handleIssueClick(issue)}
                      >
                        <td className="p-4">
                          <img 
                            src={issue.image} 
                            alt="Issue" 
                            className="w-12 h-12 rounded-lg object-cover border border-slate-200"
                          />
                        </td>
                        <td className="p-4">
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-1">{issue.title}</h4>
                            <p className="text-sm text-slate-500 flex items-center gap-1">
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {issue.location}
                            </p>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${issue.categoryColor}`}>
                            <span>{issue.categoryIcon}</span>
                            {issue.category}
                          </span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                              issue.priority >= 95 ? 'bg-red-100 text-red-700' :
                              issue.priority >= 90 ? 'bg-orange-100 text-orange-700' :
                              'bg-slate-100 text-slate-700'
                            }`}>
                              {issue.priority}
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${issue.statusColor}`}>
                            {issue.status}
                          </span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm text-slate-600">{issue.submitted}</span>
                        </td>
                        <td className="p-4">
                          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}