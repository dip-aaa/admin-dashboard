'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';

interface CompletedProject {
  id: string;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  categoryIcon: string;
  completedDate: string;
  startDate: string;
  actualBudget: string;
  plannedBudget: string;
  actualDuration: string;
  plannedDuration: string;
  department: string;
  teamMembers: string[];
  location: string;
  beneficiaries: number;
  satisfactionScore: number;
  objectives: string[];
  challenges: string[];
  outcomes: string[];
  recommendations: string[];
  photos: string[];
  financialBreakdown: {
    materials: string;
    labor: string;
    equipment: string;
    miscellaneous: string;
  };
  kpis: {
    onTime: boolean;
    onBudget: boolean;
    qualityScore: number;
    stakeholderSatisfaction: number;
  };
}

export default function Reports() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('reports');
  const [selectedProject, setSelectedProject] = useState<CompletedProject | null>(null);
  const [filterPeriod, setFilterPeriod] = useState('all');
  const [filterDepartment, setFilterDepartment] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogout = () => {
    router.push('/login');
  };

  const completedProjects: CompletedProject[] = [
    {
      id: 'cp1',
      title: 'Main Street Pothole Repair Project',
      description: 'Comprehensive repair and resurfacing of Main Street addressing critical pothole issues that were causing vehicle damage and safety hazards for residents.',
      category: 'Infrastructure',
      categoryColor: 'bg-blue-100 text-blue-700',
      categoryIcon: '🛣️',
      completedDate: 'November 25, 2024',
      startDate: 'September 15, 2024',
      actualBudget: '₹ 18,50,000',
      plannedBudget: '₹ 20,00,000',
      actualDuration: '2.5 months',
      plannedDuration: '3 months',
      department: 'Public Works',
      teamMembers: ['Raj Kumar (Project Manager)', 'Sita Devi (Engineer)', 'Ram Bahadur (Supervisor)', 'Maya Gurung (Safety Officer)'],
      location: 'Main Street, Downtown Area',
      beneficiaries: 15000,
      satisfactionScore: 92,
      objectives: [
        'Repair all major potholes on Main Street (2.5 km stretch)',
        'Improve road surface quality and safety',
        'Reduce vehicle maintenance costs for residents',
        'Enhance traffic flow and reduce congestion'
      ],
      challenges: [
        'Weather delays during monsoon season',
        'Traffic management during peak hours',
        'Coordinating with local businesses',
        'Material delivery scheduling conflicts'
      ],
      outcomes: [
        'Successfully repaired 450+ potholes across 2.5 km stretch',
        'Reduced vehicle damage complaints by 95%',
        'Improved average traffic speed by 25%',
        'Enhanced road safety with zero accidents post-completion',
        'Positive community feedback with 92% satisfaction rate'
      ],
      recommendations: [
        'Implement quarterly road condition assessments',
        'Establish preventive maintenance schedule',
        'Create dedicated funds for emergency road repairs',
        'Develop better communication channels with residents during projects'
      ],
      photos: [
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=400&h=300&fit=crop'
      ],
      financialBreakdown: {
        materials: '₹ 12,00,000',
        labor: '₹ 4,50,000',
        equipment: '₹ 1,50,000',
        miscellaneous: '₹ 50,000'
      },
      kpis: {
        onTime: true,
        onBudget: true,
        qualityScore: 88,
        stakeholderSatisfaction: 92
      }
    },
    {
      id: 'cp2',
      title: 'Community Park Waste Management System',
      description: 'Installation of modern waste collection and recycling infrastructure in Central Park to address overflowing garbage issues and promote environmental sustainability.',
      category: 'Environment',
      categoryColor: 'bg-green-100 text-green-700',
      categoryIcon: '♻️',
      completedDate: 'October 15, 2024',
      startDate: 'August 1, 2024',
      actualBudget: '₹ 8,75,000',
      plannedBudget: '₹ 9,00,000',
      actualDuration: '2.5 months',
      plannedDuration: '2.5 months',
      department: 'Environmental Services',
      teamMembers: ['Kiran Thapa (Project Lead)', 'Deepa Sharma (Environmental Engineer)', 'Arjun Magar (Installation Team)'],
      location: 'Central Park, Recreation Area',
      beneficiaries: 8500,
      satisfactionScore: 89,
      objectives: [
        'Install 25 new waste collection bins throughout the park',
        'Establish 5 recycling stations with proper segregation',
        'Reduce littering and improve park cleanliness',
        'Educate community about proper waste disposal'
      ],
      challenges: [
        'Selecting optimal locations for maximum coverage',
        'Community education and behavior change',
        'Coordinating with park maintenance staff',
        'Weather-related installation delays'
      ],
      outcomes: [
        'Successfully installed 25 waste bins and 5 recycling stations',
        'Reduced park litter by 78%',
        'Increased recycling participation by 65%',
        'Improved overall park aesthetics and cleanliness',
        'Positive environmental impact with proper waste segregation'
      ],
      recommendations: [
        'Expand similar systems to other parks in the city',
        'Implement regular maintenance and cleaning schedules',
        'Continue community education programs',
        'Monitor usage patterns for optimization'
      ],
      photos: [
        'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?w=400&h=300&fit=crop'
      ],
      financialBreakdown: {
        materials: '₹ 6,00,000',
        labor: '₹ 2,00,000',
        equipment: '₹ 50,000',
        miscellaneous: '₹ 25,000'
      },
      kpis: {
        onTime: true,
        onBudget: true,
        qualityScore: 91,
        stakeholderSatisfaction: 89
      }
    },
    {
      id: 'cp3',
      title: 'School Zone Traffic Safety Enhancement',
      description: 'Implementation of comprehensive traffic safety measures around local schools including speed bumps, crosswalks, signage, and pedestrian barriers to ensure student safety.',
      category: 'Traffic Safety',
      categoryColor: 'bg-orange-100 text-orange-700',
      categoryIcon: '🚸',
      completedDate: 'September 30, 2024',
      startDate: 'July 15, 2024',
      actualBudget: '₹ 12,25,000',
      plannedBudget: '₹ 12,00,000',
      actualDuration: '2.5 months',
      plannedDuration: '2 months',
      department: 'Traffic Management',
      teamMembers: ['Bikash Rai (Traffic Engineer)', 'Sunita Tamang (Safety Coordinator)', 'Pramod Ghale (Installation Supervisor)'],
      location: 'School zones across 3 locations',
      beneficiaries: 2200,
      satisfactionScore: 95,
      objectives: [
        'Install speed reduction measures in all school zones',
        'Create clearly marked pedestrian crossings',
        'Implement proper safety signage and barriers',
        'Reduce traffic accidents near schools by 80%'
      ],
      challenges: [
        'Coordinating work around school schedules',
        'Managing traffic during construction',
        'Ensuring minimal disruption to students',
        'Weather delays affecting paint application'
      ],
      outcomes: [
        'Installed 12 speed bumps across 3 school zones',
        'Created 8 marked pedestrian crossings with proper signals',
        'Deployed 25 safety signs and warning boards',
        'Reduced traffic speed by average 40% in school zones',
        'Zero traffic accidents reported post-implementation'
      ],
      recommendations: [
        'Extend safety measures to additional school zones',
        'Regular maintenance of speed bumps and signage',
        'Community awareness programs on school zone safety',
        'Consider additional measures like traffic lights if needed'
      ],
      photos: [
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1461709444300-a6217cec3dff?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1581905764498-f1b60bae941a?w=400&h=300&fit=crop'
      ],
      financialBreakdown: {
        materials: '₹ 8,00,000',
        labor: '₹ 3,00,000',
        equipment: '₹ 1,00,000',
        miscellaneous: '₹ 25,000'
      },
      kpis: {
        onTime: false,
        onBudget: false,
        qualityScore: 94,
        stakeholderSatisfaction: 95
      }
    }
  ];

  const filteredProjects = completedProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = filterDepartment === 'all' || project.department.toLowerCase() === filterDepartment.toLowerCase();
    
    const matchesPeriod = (() => {
      if (filterPeriod === 'all') return true;
      const completedDate = new Date(project.completedDate);
      const now = new Date();
      
      switch (filterPeriod) {
        case '30days':
          return (now.getTime() - completedDate.getTime()) <= (30 * 24 * 60 * 60 * 1000);
        case '6months':
          return (now.getTime() - completedDate.getTime()) <= (6 * 30 * 24 * 60 * 60 * 1000);
        case '1year':
          return (now.getTime() - completedDate.getTime()) <= (365 * 24 * 60 * 60 * 1000);
        default:
          return true;
      }
    })();
    
    return matchesSearch && matchesDepartment && matchesPeriod;
  });

  const handleProjectClick = (project: CompletedProject) => {
    setSelectedProject(project);
  };

  const handleBackToReports = () => {
    setSelectedProject(null);
  };

  const handleGeneratePDF = () => {
    // Implement PDF generation logic
    console.log('Generating PDF report for:', selectedProject?.title);
    alert('PDF report generation would be implemented here');
  };

  const handleExportData = () => {
    // Implement data export logic
    console.log('Exporting data for:', selectedProject?.title);
    alert('Data export would be implemented here');
  };

  // Project Detail Report View
  if (selectedProject) {
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
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={handleBackToReports}
                    className="p-2 hover:bg-slate-200 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <div>
                    <h1 className="text-2xl font-bold text-slate-900">Project Report</h1>
                    <p className="text-slate-500">Detailed completion report and analysis</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={handleExportData}
                    className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Export Data
                  </button>
                  <button 
                    onClick={handleGeneratePDF}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    Generate PDF
                  </button>
                </div>
              </div>

              {/* Project Overview */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${selectedProject.categoryColor}`}>
                        {selectedProject.categoryIcon} {selectedProject.category}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        Completed
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-3">{selectedProject.title}</h2>
                    <p className="text-slate-600 text-lg leading-relaxed">{selectedProject.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-600 mb-1">{selectedProject.satisfactionScore}%</div>
                    <div className="text-sm text-slate-500">Satisfaction Score</div>
                  </div>
                </div>

                {/* Project Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-xl font-bold text-slate-900">{selectedProject.completedDate}</div>
                    <div className="text-sm text-slate-500">Completion Date</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-xl font-bold text-slate-900">{selectedProject.actualBudget}</div>
                    <div className="text-sm text-slate-500">Final Budget</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-xl font-bold text-slate-900">{selectedProject.actualDuration}</div>
                    <div className="text-sm text-slate-500">Duration</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-xl font-bold text-slate-900">{selectedProject.beneficiaries.toLocaleString()}</div>
                    <div className="text-sm text-slate-500">Beneficiaries</div>
                  </div>
                </div>
              </div>

              {/* Key Performance Indicators */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Key Performance Indicators</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center ${
                      selectedProject.kpis.onTime ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      {selectedProject.kpis.onTime ? (
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </div>
                    <div className="font-semibold text-slate-900">On Time Delivery</div>
                    <div className={`text-sm ${selectedProject.kpis.onTime ? 'text-green-600' : 'text-red-600'}`}>
                      {selectedProject.kpis.onTime ? 'Achieved' : 'Delayed'}
                    </div>
                  </div>

                  <div className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center ${
                      selectedProject.kpis.onBudget ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      {selectedProject.kpis.onBudget ? (
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </div>
                    <div className="font-semibold text-slate-900">Budget Adherence</div>
                    <div className={`text-sm ${selectedProject.kpis.onBudget ? 'text-green-600' : 'text-red-600'}`}>
                      {selectedProject.kpis.onBudget ? 'Under Budget' : 'Over Budget'}
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-blue-100 flex items-center justify-center">
                      <div className="text-xl font-bold text-blue-600">{selectedProject.kpis.qualityScore}</div>
                    </div>
                    <div className="font-semibold text-slate-900">Quality Score</div>
                    <div className="text-sm text-blue-600">Out of 100</div>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-purple-100 flex items-center justify-center">
                      <div className="text-xl font-bold text-purple-600">{selectedProject.kpis.stakeholderSatisfaction}%</div>
                    </div>
                    <div className="font-semibold text-slate-900">Stakeholder Satisfaction</div>
                    <div className="text-sm text-purple-600">Survey Result</div>
                  </div>
                </div>
              </div>

              {/* Financial Breakdown */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Financial Breakdown</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Materials</span>
                      <span className="font-semibold text-slate-900">{selectedProject.financialBreakdown.materials}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Labor</span>
                      <span className="font-semibold text-slate-900">{selectedProject.financialBreakdown.labor}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Equipment</span>
                      <span className="font-semibold text-slate-900">{selectedProject.financialBreakdown.equipment}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Miscellaneous</span>
                      <span className="font-semibold text-slate-900">{selectedProject.financialBreakdown.miscellaneous}</span>
                    </div>
                    <div className="border-t border-slate-200 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-slate-900">Total Actual Cost</span>
                        <span className="font-bold text-lg text-slate-900">{selectedProject.actualBudget}</span>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-slate-600">Planned Budget</span>
                        <span className="text-slate-600">{selectedProject.plannedBudget}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Project Team</h3>
                  <div className="space-y-3">
                    {selectedProject.teamMembers.map((member, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-semibold text-sm">
                            {member.split(' ')[0].charAt(0)}
                          </span>
                        </div>
                        <span className="text-slate-700">{member}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{selectedProject.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Objectives */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Project Objectives</h3>
                  <ul className="space-y-3">
                    {selectedProject.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-slate-700">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcomes */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Achieved Outcomes</h3>
                  <ul className="space-y-3">
                    {selectedProject.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-700">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenges */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Challenges Faced</h3>
                  <ul className="space-y-3">
                    {selectedProject.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        <span className="text-slate-700">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recommendations */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Future Recommendations</h3>
                  <ul className="space-y-3">
                    {selectedProject.recommendations.map((recommendation, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <span className="text-slate-700">{recommendation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Project Photos */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Project Photos</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {selectedProject.photos.map((photo, index) => (
                    <div key={index} className="relative">
                      <img 
                        src={photo} 
                        alt={`Project photo ${index + 1}`} 
                        className="w-full h-48 object-cover rounded-lg border border-slate-200"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-200 rounded-lg cursor-pointer" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Reports List View
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
                    placeholder="Search completed projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-black placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <select 
                  value={filterPeriod}
                  onChange={(e) => setFilterPeriod(e.target.value)}
                  className="px-3 py-2 border border-slate-300 rounded-lg text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Time</option>
                  <option value="30days">Last 30 Days</option>
                  <option value="6months">Last 6 Months</option>
                  <option value="1year">Last Year</option>
                </select>

                <select 
                  value={filterDepartment}
                  onChange={(e) => setFilterDepartment(e.target.value)}
                  className="px-3 py-2 border border-slate-300 rounded-lg text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Departments</option>
                  <option value="public works">Public Works</option>
                  <option value="environmental services">Environmental Services</option>
                  <option value="traffic management">Traffic Management</option>
                </select>
              </div>
            </div>

            {/* Reports Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">{completedProjects.length}</div>
                    <div className="text-sm text-slate-500">Completed Projects</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-blue-600">₹</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">
                      {Math.round(completedProjects.reduce((acc, p) => acc + parseFloat(p.actualBudget.replace(/[₹,]/g, '')), 0) / 100000)}L
                    </div>
                    <div className="text-sm text-slate-500">Total Investment</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">
                      {completedProjects.reduce((acc, p) => acc + p.beneficiaries, 0).toLocaleString()}
                    </div>
                    <div className="text-sm text-slate-500">Citizens Benefited</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">
                      {Math.round(completedProjects.reduce((acc, p) => acc + p.satisfactionScore, 0) / completedProjects.length)}%
                    </div>
                    <div className="text-sm text-slate-500">Avg Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results count */}
            <div className="mb-6">
              <p className="text-slate-600">Showing {filteredProjects.length} of {completedProjects.length} completed projects</p>
            </div>

            {/* Reports List */}
            <div className="space-y-6">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id} 
                  onClick={() => handleProjectClick(project)}
                  className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${project.categoryColor}`}>
                          {project.categoryIcon} {project.category}
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                          Completed
                        </span>
                        <span className="text-sm text-slate-500">
                          Completed on {project.completedDate}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                      <p className="text-slate-600 leading-relaxed mb-4">{project.description}</p>
                      
                      {/* Project Summary Stats */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-slate-500">Budget:</span>
                          <span className="ml-2 font-medium text-slate-900">{project.actualBudget}</span>
                        </div>
                        <div>
                          <span className="text-slate-500">Duration:</span>
                          <span className="ml-2 font-medium text-slate-900">{project.actualDuration}</span>
                        </div>
                        <div>
                          <span className="text-slate-500">Beneficiaries:</span>
                          <span className="ml-2 font-medium text-slate-900">{project.beneficiaries.toLocaleString()}</span>
                        </div>
                        <div>
                          <span className="text-slate-500">Department:</span>
                          <span className="ml-2 font-medium text-slate-900">{project.department}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right ml-6">
                      <div className="text-2xl font-bold text-green-600 mb-1">{project.satisfactionScore}%</div>
                      <div className="text-sm text-slate-500">Satisfaction</div>
                      <svg className="w-5 h-5 text-slate-400 mt-2 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}