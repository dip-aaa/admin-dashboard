'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';

export default function CitizenProposals() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('citizen-proposals');
  const [projectTitle, setProjectTitle] = useState('');
  const [problemStatement, setProblemStatement] = useState('');
  const [proposedSolution, setProposedSolution] = useState('');
  const [estimatedBudget, setEstimatedBudget] = useState('4,50,000');
  const [estimatedDuration, setEstimatedDuration] = useState('2 weeks');
  const [department, setDepartment] = useState('Public Works');

  const handleLogout = () => {
    router.push('/login');
  };

  const handleSaveDraft = () => {
    // Handle save draft functionality
    console.log('Saving draft...');
  };

  const handleSubmitForReview = () => {
    // Handle submit for review functionality
    console.log('Submitting for review...');
  };

  const handleBackClick = () => {
    router.push('/dashboard');
  };

  const aiSuggestion = "Based on 45 citizen reports, the primary issue is vehicle damage and traffic congestion caused by severe road degradation on Prithivi Highway";

  const problemStatementText = `The current state of Prithive Highway (between Mangaltar and Khurkot) presents a significant safety hazard to motorists and Passengers. Multiple deep potholes have been reported, causing vehicle damage and forcing traffic to slow dangerously.`;

  const proposedSolutionText = `We propose a complete resurfacing of the affected road. This includes:
1. Milling the existing surface
2. Repairing the base layer where necessary
3. Laying new asphalt
4. Restriping all lane markers and crosswalks`;

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="ml-64 flex flex-col min-h-screen">
        <div className="sticky top-0 z-20">
          <Topbar activeTab={activeTab} onLogout={handleLogout} />
        </div>
        
        <div className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={handleBackClick}
                    className="p-2 hover:bg-slate-200 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <div>
                    <h1 className="text-2xl font-bold text-slate-900">New Budget Proposal</h1>
                    <p className="text-slate-500">Drafting proposal for FY 2025-Q3 Cycle</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={handleSaveDraft}
                    className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 0V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2m1 0h4" />
                    </svg>
                    Save Draft
                  </button>
                  <button 
                    onClick={handleSubmitForReview}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Submit for Review
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Project Title */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <label className="block text-sm font-semibold text-slate-900 mb-3">Project Title</label>
                  <input
                    type="text"
                    value={projectTitle}
                    onChange={(e) => setProjectTitle(e.target.value)}
                    placeholder="Enter a clear, descriptive title"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Problem Statement */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <label className="block text-sm font-semibold text-slate-900 mb-3">Problem Statement</label>
                  
                  {/* AI Suggestion */}
                  <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-blue-900 mb-1">AI Suggestion:</p>
                        <p className="text-sm text-blue-800">{aiSuggestion}</p>
                      </div>
                    </div>
                  </div>

                  <textarea
                    value={problemStatement}
                    onChange={(e) => setProblemStatement(e.target.value)}
                    placeholder={problemStatementText}
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  />
                </div>

                {/* Proposed Solution */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <label className="block text-sm font-semibold text-slate-900 mb-3">Proposed Solution</label>
                  <textarea
                    value={proposedSolution}
                    onChange={(e) => setProposedSolution(e.target.value)}
                    placeholder={proposedSolutionText}
                    rows={8}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  />
                </div>

                {/* Attachments */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <label className="block text-sm font-semibold text-slate-900 mb-3">Attachments</label>
                  <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-slate-400 transition-colors cursor-pointer">
                    <svg className="w-12 h-12 text-slate-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-slate-600 font-medium">Click to upload files</p>
                    <p className="text-sm text-slate-500">or drag and drop</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Budget & Timeline + Impact Analysis */}
              <div className="space-y-6">
                {/* Budget & Timeline */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Budget & Timeline</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Estimated Budget</label>
                      <div className="text-2xl font-bold text-slate-900">₹ {estimatedBudget}</div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Estimated Duration</label>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-slate-900 font-medium">{estimatedDuration}</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Department</label>
                      <select
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="Public Works">Public Works</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Infrastructure">Infrastructure</option>
                        <option value="Urban Planning">Urban Planning</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Impact Analysis */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Impact Analysis</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Beneficiaries</span>
                      <span className="font-semibold text-slate-900">~12,000 Residents</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Priority Score</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        High (92)
                      </span>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-slate-600">Alignment with City Goals</span>
                        <span className="text-sm font-medium text-slate-900">85%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
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