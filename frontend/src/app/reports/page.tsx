'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import ReportCard from '@/components/ReportCard';

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
  const [periodOpen, setPeriodOpen] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);

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
    ,
    {
      id: 'cp4',
      title: 'Neighborhood Lighting Upgrade',
      description: 'Upgrade of street lighting in several residential neighborhoods to LED fixtures to improve safety and reduce energy use.',
      category: 'Lighting',
      categoryColor: 'bg-yellow-100 text-yellow-700',
      categoryIcon: '💡',
      completedDate: 'December 5, 2024',
      startDate: 'October 1, 2024',
      actualBudget: '₹ 6,20,000',
      plannedBudget: '₹ 6,50,000',
      actualDuration: '1.5 months',
      plannedDuration: '2 months',
      department: 'Public Works',
      teamMembers: ['Nina Joshi (Lead)', 'Suresh Patel (Electrician)'],
      location: 'Northside, Sector 4',
      beneficiaries: 4200,
      satisfactionScore: 90,
      objectives: ['Replace old sodium lamps with LEDs', 'Improve night-time visibility', 'Reduce energy consumption'],
      challenges: ['Supply delays', 'Access to some poles'],
      outcomes: ['Reduced energy usage by 60%', 'Improved visibility and fewer safety complaints'],
      recommendations: ['Roll out to additional neighborhoods', 'Schedule yearly maintenance checks'],
      photos: [],
      financialBreakdown: { materials: '₹ 4,00,000', labor: '₹ 1,50,000', equipment: '₹ 50,000', miscellaneous: '₹ 20,000' },
      kpis: { onTime: true, onBudget: true, qualityScore: 87, stakeholderSatisfaction: 90 }
    },
    {
      id: 'cp5',
      title: 'Community Clinic Renovation',
      description: 'Renovation of the local community clinic to expand capacity and improve patient experience.',
      category: 'Health',
      categoryColor: 'bg-red-100 text-red-700',
      categoryIcon: '🏥',
      completedDate: 'November 10, 2024',
      startDate: 'August 20, 2024',
      actualBudget: '₹ 14,00,000',
      plannedBudget: '₹ 13,50,000',
      actualDuration: '2.8 months',
      plannedDuration: '3 months',
      department: 'Health Services',
      teamMembers: ['Dr. Anil Mehta (Coordinator)', 'Rita Karki (Nurse Supervisor)'],
      location: 'Eastside Clinic',
      beneficiaries: 3200,
      satisfactionScore: 94,
      objectives: ['Expand waiting area', 'Upgrade examination rooms', 'Improve hygiene facilities'],
      challenges: ['Coordination with clinic staff', 'Temporary relocation during works'],
      outcomes: ['Increased patient throughput', 'Higher patient satisfaction scores'],
      recommendations: ['Consider satellite clinics in other sectors'],
      photos: [],
      financialBreakdown: { materials: '₹ 8,00,000', labor: '₹ 4,00,000', equipment: '₹ 1,00,000', miscellaneous: '₹ 1,00,000' },
      kpis: { onTime: true, onBudget: false, qualityScore: 92, stakeholderSatisfaction: 94 }
    },
    {
      id: 'cp6',
      title: 'Riverbank Erosion Control',
      description: 'Stabilization work and planting along the riverbank to prevent erosion and protect nearby properties.',
      category: 'Environment',
      categoryColor: 'bg-green-100 text-green-700',
      categoryIcon: '🌿',
      completedDate: 'October 2, 2024',
      startDate: 'July 1, 2024',
      actualBudget: '₹ 10,50,000',
      plannedBudget: '₹ 11,00,000',
      actualDuration: '3 months',
      plannedDuration: '3 months',
      department: 'Environmental Services',
      teamMembers: ['Hari Singh (Ecologist)', 'Mina Rai (Field Lead)'],
      location: 'Riverbend District',
      beneficiaries: 6000,
      satisfactionScore: 88,
      objectives: ['Install gabion walls', 'Plant native vegetation', 'Monitor erosion rates'],
      challenges: ['Heavy rains during work window', 'Sourcing native plants'],
      outcomes: ['Reduced visible erosion by 80%', 'Improved habitat for local species'],
      recommendations: ['Ongoing monitoring and maintenance'],
      photos: [],
      financialBreakdown: { materials: '₹ 6,00,000', labor: '₹ 3,00,000', equipment: '₹ 1,00,000', miscellaneous: '₹ 50,000' },
      kpis: { onTime: false, onBudget: true, qualityScore: 85, stakeholderSatisfaction: 88 }
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
            {/* Sticky search/filter region (matches Active Projects) */}
            <div className="sticky top-20 z-30 bg-slate-50 py-4 mb-6">
              <div className="max-w-3xl mx-auto">
                <div className="relative">
                  <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>

                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search completed projects..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-12 py-4 border border-slate-200 rounded-full text-black placeholder-slate-500 focus:outline-none relative z-10"
                    />

                    {/* decorative bluish gradient flow behind input */}
                    <div aria-hidden className="pointer-events-none absolute inset-0 rounded-full overflow-hidden z-0">
                      <div className="absolute h-full w-[45%] opacity-30 gradient-flow"></div>
                    </div>

                    {/* small right action icon */}
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-500 z-20">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v4m0 8v4m8-8h-4M4 12H8" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Styled dropdowns placed below the search */}
                <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  {/* Period dropdown */}
                  <div className="w-full sm:w-64 relative">
                    <button
                      type="button"
                      onClick={() => { setPeriodOpen(!periodOpen); setDeptOpen(false); }}
                      className={`w-full flex items-center justify-between px-4 py-2 border border-blue-100 rounded-lg bg-white shadow-sm hover:shadow-md focus:outline-none transition-colors duration-150 ${periodOpen ? 'ring-2 ring-[#19295C]/15' : ''}`}
                      aria-haspopup="true"
                      aria-expanded={periodOpen}
                    >
                      <span className={`${periodOpen ? 'text-[#19295C] font-semibold' : 'text-[#2D3F7B]'} text-sm`}>
                        {filterPeriod === 'all' ? 'All Time' : filterPeriod === '30days' ? 'Last 30 Days' : filterPeriod === '6months' ? 'Last 6 Months' : 'Last Year'}
                      </span>
                      <svg className={`w-4 h-4 transform transition-transform duration-200 ${periodOpen ? 'rotate-180 text-[#19295C]' : 'text-[#2D3F7B]'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {periodOpen && (
                      <ul className="absolute z-50 mt-2 w-full bg-white border border-blue-100 rounded-lg shadow-lg max-h-56 overflow-auto py-1">
                        {[
                          { key: 'all', label: 'All Time' },
                          { key: '30days', label: 'Last 30 Days' },
                          { key: '6months', label: 'Last 6 Months' },
                          { key: '1year', label: 'Last Year' }
                        ].map(opt => (
                          <li
                            key={opt.key}
                            onClick={() => { setFilterPeriod(opt.key); setPeriodOpen(false); }}
                            role="option"
                            aria-selected={opt.key === filterPeriod}
                            className={`px-4 py-2 cursor-pointer text-sm transition-colors ${opt.key === filterPeriod ? 'bg-[#19295C] text-white font-semibold' : 'text-slate-900 hover:bg-[#e6f3ff] hover:text-[#19295C]'}`}
                          >
                            {opt.label}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Department dropdown */}
                  <div className="w-full sm:w-64 relative">
                    <button
                      type="button"
                      onClick={() => { setDeptOpen(!deptOpen); setPeriodOpen(false); }}
                      className={`w-full flex items-center justify-between px-4 py-2 border border-blue-100 rounded-lg bg-white shadow-sm hover:shadow-md focus:outline-none transition-colors duration-150 ${deptOpen ? 'ring-2 ring-[#19295C]/15' : ''}`}
                      aria-haspopup="true"
                      aria-expanded={deptOpen}
                    >
                      <span className={`${deptOpen ? 'text-[#19295C] font-semibold' : 'text-[#2D3F7B]'} text-sm`}>{filterDepartment === 'all' ? 'All Departments' : filterDepartment}</span>
                      <svg className={`w-4 h-4 transform transition-transform duration-200 ${deptOpen ? 'rotate-180 text-[#19295C]' : 'text-[#2D3F7B]'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {deptOpen && (
                      <ul className="absolute z-50 mt-2 w-full bg-white border border-blue-100 rounded-lg shadow-lg max-h-56 overflow-auto py-1">
                        {[
                          { key: 'all', label: 'All Departments' },
                          { key: 'public works', label: 'Public Works' },
                          { key: 'environmental services', label: 'Environmental Services' },
                          { key: 'traffic management', label: 'Traffic Management' }
                        ].map(opt => (
                          <li
                            key={opt.key}
                            onClick={() => { setFilterDepartment(opt.key); setDeptOpen(false); }}
                            role="option"
                            aria-selected={opt.key === filterDepartment}
                            className={`px-4 py-2 cursor-pointer text-sm transition-colors ${opt.key === filterDepartment ? 'bg-[#19295C] text-white font-semibold' : 'text-slate-900 hover:bg-[#e6f3ff] hover:text-[#19295C]'}`}
                          >
                            {opt.label}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Reports Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-0 bg-transparent shadow-none border-0">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100/40 to-blue-200/20 backdrop-blur-sm border-[3px] border-blue-300/60 flex items-center justify-center bubble-float">
                    <div className="text-xl font-bold text-[#19295C]">{completedProjects.length}</div>
                  </div>
                  <div>
                    <div className="text-lg text-[#19295C] font-semibold slide-from-bubble" style={{ animationDelay: '0.12s' }}>Completed Projects</div>
                  </div>
                </div>
              </div>

              <div className="p-0 bg-transparent shadow-none border-0">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100/40 to-blue-200/20 backdrop-blur-sm border-[3px] border-blue-300/60 flex items-center justify-center bubble-float">
                    <div className="text-xl font-bold text-[#19295C]">{Math.round(completedProjects.reduce((acc, p) => acc + parseFloat(p.actualBudget.replace(/[₹,]/g, '')), 0) / 100000)}L</div>
                  </div>
                  <div>
                    <div className="text-lg text-[#19295C] font-semibold slide-from-bubble" style={{ animationDelay: '0.18s' }}>Total Investment</div>
                  </div>
                </div>
              </div>

              <div className="p-0 bg-transparent shadow-none border-0">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100/40 to-blue-200/20 backdrop-blur-sm border-[3px] border-blue-300/60 flex items-center justify-center bubble-float">
                    <div className="text-xl font-bold text-[#19295C]">{Math.round(completedProjects.reduce((acc, p) => acc + p.satisfactionScore, 0) / completedProjects.length)}%</div>
                  </div>
                  <div>
                    <div className="text-lg text-[#19295C] font-semibold slide-from-bubble" style={{ animationDelay: '0.24s' }}>Avg Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results count */}
            <div className="mb-6">
              <p className="text-slate-600">Showing {filteredProjects.length} of {completedProjects.length} completed projects</p>
            </div>

            {/* Reports List - use ReportCard component */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 auto-rows-fr items-stretch">
              {filteredProjects.map((project) => (
                <ReportCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  department={project.department}
                  completedDate={project.completedDate}
                  satisfactionScore={project.satisfactionScore}
                  category={project.category}
                  categoryColor={project.categoryColor}
                  categoryIcon={project.categoryIcon}
                  onClick={() => handleProjectClick(project)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}