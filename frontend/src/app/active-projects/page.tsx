'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';

interface Milestone {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
  date: string;
  completedDate?: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  categoryIcon: string;
  status: 'planning' | 'in-progress' | 'review' | 'completed';
  statusColor: string;
  progress: number;
  budget: string;
  estimatedCompletion: string;
  startDate: string;
  department: string;
  priority: 'high' | 'medium' | 'low';
  priorityColor: string;
  milestones: Milestone[];
  teamMembers: number;
  location?: string;
}

export default function ActiveProjects() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('active-projects');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogout = () => {
    router.push('/login');
  };

  const projectsData: Project[] = [
    {
      id: '1',
      title: 'Prithivi Highway Road Reconstruction',
      description: 'Complete resurfacing and repair of Prithivi Highway between Mangaltar and Khurkot sections',
      category: 'Infrastructure',
      categoryColor: 'bg-blue-100 text-blue-700',
      categoryIcon: '🛣️',
      status: 'in-progress',
      statusColor: 'bg-green-100 text-green-700',
      progress: 65,
      budget: '₹ 45,00,000',
      estimatedCompletion: 'Dec 15, 2024',
      startDate: 'Oct 1, 2024',
      department: 'Public Works',
      priority: 'high',
      priorityColor: 'bg-red-100 text-red-700',
      teamMembers: 12,
      location: 'Prithivi Highway',
      milestones: [
        {
          id: 'm1',
          title: 'Project Planning & Approval',
          description: 'Initial planning, budget approval, and permits',
          status: 'completed',
          date: 'Oct 1, 2024',
          completedDate: 'Oct 5, 2024'
        },
        {
          id: 'm2',
          title: 'Traffic Management Setup',
          description: 'Implement traffic diversions and safety measures',
          status: 'completed',
          date: 'Oct 8, 2024',
          completedDate: 'Oct 10, 2024'
        },
        {
          id: 'm3',
          title: 'Road Surface Preparation',
          description: 'Milling existing surface and base layer repairs',
          status: 'current',
          date: 'Oct 15, 2024'
        },
        {
          id: 'm4',
          title: 'New Asphalt Installation',
          description: 'Laying new asphalt layers and compaction',
          status: 'upcoming',
          date: 'Nov 20, 2024'
        },
        {
          id: 'm5',
          title: 'Lane Marking & Completion',
          description: 'Final lane markings, signage, and project handover',
          status: 'upcoming',
          date: 'Dec 10, 2024'
        }
      ]
    },
    {
      id: '2',
      title: 'Central Park Waste Management System',
      description: 'Implementation of new waste collection bins and recycling stations throughout Central Park',
      category: 'Environment',
      categoryColor: 'bg-green-100 text-green-700',
      categoryIcon: '♻️',
      status: 'planning',
      statusColor: 'bg-yellow-100 text-yellow-700',
      progress: 25,
      budget: '₹ 8,50,000',
      estimatedCompletion: 'Jan 30, 2025',
      startDate: 'Nov 15, 2024',
      department: 'Environmental Services',
      priority: 'medium',
      priorityColor: 'bg-yellow-100 text-yellow-700',
      teamMembers: 6,
      location: 'Central Park Area',
      milestones: [
        {
          id: 'm1',
          title: 'Site Survey & Assessment',
          description: 'Detailed survey of current waste management needs',
          status: 'completed',
          date: 'Nov 1, 2024',
          completedDate: 'Nov 8, 2024'
        },
        {
          id: 'm2',
          title: 'Equipment Procurement',
          description: 'Purchase of new bins and recycling stations',
          status: 'current',
          date: 'Nov 15, 2024'
        },
        {
          id: 'm3',
          title: 'Installation Phase',
          description: 'Installation of new waste management infrastructure',
          status: 'upcoming',
          date: 'Dec 1, 2024'
        },
        {
          id: 'm4',
          title: 'System Testing & Launch',
          description: 'Testing and public launch of new system',
          status: 'upcoming',
          date: 'Jan 15, 2025'
        }
      ]
    },
    {
      id: '3',
      title: 'Riverside Drive Electrical Grid Upgrade',
      description: 'Modernization of electrical infrastructure for Riverside Drive residential blocks',
      category: 'Utilities',
      categoryColor: 'bg-purple-100 text-purple-700',
      categoryIcon: '⚡',
      status: 'review',
      statusColor: 'bg-blue-100 text-blue-700',
      progress: 90,
      budget: '₹ 22,00,000',
      estimatedCompletion: 'Dec 5, 2024',
      startDate: 'Sep 1, 2024',
      department: 'Electrical Services',
      priority: 'high',
      priorityColor: 'bg-red-100 text-red-700',
      teamMembers: 8,
      location: 'Riverside Drive',
      milestones: [
        {
          id: 'm1',
          title: 'Grid Assessment',
          description: 'Complete assessment of existing electrical infrastructure',
          status: 'completed',
          date: 'Sep 1, 2024',
          completedDate: 'Sep 10, 2024'
        },
        {
          id: 'm2',
          title: 'Equipment Installation',
          description: 'Installation of new transformers and distribution panels',
          status: 'completed',
          date: 'Sep 15, 2024',
          completedDate: 'Oct 20, 2024'
        },
        {
          id: 'm3',
          title: 'System Testing',
          description: 'Comprehensive testing of new electrical systems',
          status: 'completed',
          date: 'Oct 25, 2024',
          completedDate: 'Nov 15, 2024'
        },
        {
          id: 'm4',
          title: 'Final Inspection & Handover',
          description: 'Final safety inspection and project completion',
          status: 'current',
          date: 'Nov 20, 2024'
        }
      ]
    },
    {
      id: '4',
      title: 'Pine Street Traffic Signal Installation',
      description: 'Installation of new traffic signals at Pine Street & 3rd Avenue intersection',
      category: 'Traffic Management',
      categoryColor: 'bg-orange-100 text-orange-700',
      categoryIcon: '🚦',
      status: 'in-progress',
      statusColor: 'bg-green-100 text-green-700',
      progress: 45,
      budget: '₹ 12,00,000',
      estimatedCompletion: 'Jan 10, 2025',
      startDate: 'Nov 1, 2024',
      department: 'Traffic Management',
      priority: 'medium',
      priorityColor: 'bg-yellow-100 text-yellow-700',
      teamMembers: 5,
      location: 'Pine Street & 3rd Avenue',
      milestones: [
        {
          id: 'm1',
          title: 'Site Preparation',
          description: 'Excavation and foundation work for signal posts',
          status: 'completed',
          date: 'Nov 1, 2024',
          completedDate: 'Nov 10, 2024'
        },
        {
          id: 'm2',
          title: 'Signal Post Installation',
          description: 'Installation of traffic signal posts and mounting hardware',
          status: 'current',
          date: 'Nov 15, 2024'
        },
        {
          id: 'm3',
          title: 'Electrical Connections',
          description: 'Wiring and electrical connections for signal system',
          status: 'upcoming',
          date: 'Dec 1, 2024'
        },
        {
          id: 'm4',
          title: 'System Testing & Activation',
          description: 'Testing and activation of traffic signal system',
          status: 'upcoming',
          date: 'Dec 20, 2024'
        }
      ]
    }
  ];

  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || project.status === filterStatus;
    const matchesCategory = filterCategory === 'all' || project.category.toLowerCase() === filterCategory.toLowerCase();
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
  };

  // Project Detail View
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
              {/* Back Button */}
              <button 
                onClick={handleBackToProjects}
                className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Projects
              </button>

              {/* Project Header */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${selectedProject.categoryColor}`}>
                        {selectedProject.categoryIcon} {selectedProject.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${selectedProject.statusColor}`}>
                        {selectedProject.status.charAt(0).toUpperCase() + selectedProject.status.slice(1).replace('-', ' ')}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${selectedProject.priorityColor}`}>
                        {selectedProject.priority.charAt(0).toUpperCase() + selectedProject.priority.slice(1)} Priority
                      </span>
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-3">{selectedProject.title}</h1>
                    <p className="text-slate-600 text-lg leading-relaxed">{selectedProject.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-600 mb-1">{selectedProject.progress}%</div>
                    <div className="text-sm text-slate-500">Complete</div>
                  </div>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-xl font-bold text-slate-900">{selectedProject.budget}</div>
                    <div className="text-sm text-slate-500">Budget</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-xl font-bold text-slate-900">{selectedProject.estimatedCompletion}</div>
                    <div className="text-sm text-slate-500">Est. Completion</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-xl font-bold text-slate-900">{selectedProject.teamMembers}</div>
                    <div className="text-sm text-slate-500">Team Members</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-xl font-bold text-slate-900">{selectedProject.department}</div>
                    <div className="text-sm text-slate-500">Department</div>
                  </div>
                </div>
              </div>

              {/* Project Timeline */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Project Timeline</h2>
                
                <div className="relative">
                  {selectedProject.milestones.map((milestone, index) => (
                    <div key={milestone.id} className="flex items-start gap-6 pb-8 last:pb-0">
                      {/* Timeline Line */}
                      <div className="relative flex flex-col items-center">
                        <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
                          milestone.status === 'completed' ? 'bg-green-500 border-green-500' :
                          milestone.status === 'current' ? 'bg-blue-500 border-blue-500' :
                          'bg-white border-slate-300'
                        }`}>
                          {milestone.status === 'completed' && (
                            <svg className="w-3 h-3 text-white m-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        {index < selectedProject.milestones.length - 1 && (
                          <div className={`w-0.5 h-16 mt-2 ${
                            milestone.status === 'completed' ? 'bg-green-500' :
                            milestone.status === 'current' ? 'bg-gradient-to-b from-blue-500 to-slate-300' :
                            'bg-slate-300'
                          }`} />
                        )}
                      </div>

                      {/* Milestone Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className={`font-semibold text-lg ${
                              milestone.status === 'completed' ? 'text-green-900' :
                              milestone.status === 'current' ? 'text-blue-900' :
                              'text-slate-700'
                            }`}>
                              {milestone.title}
                            </h3>
                            <p className="text-slate-600 mt-1">{milestone.description}</p>
                            <div className="flex items-center gap-4 mt-3">
                              <div className="flex items-center gap-2 text-sm">
                                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span className="text-slate-600">
                                  {milestone.status === 'completed' && milestone.completedDate ? 
                                    `Completed: ${milestone.completedDate}` : 
                                    `Scheduled: ${milestone.date}`
                                  }
                                </span>
                              </div>
                              {milestone.status === 'completed' && (
                                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                                  Completed
                                </span>
                              )}
                              {milestone.status === 'current' && (
                                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                                  In Progress
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Overall Progress Bar */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700">Overall Progress</span>
                    <span className="text-sm font-medium text-slate-900">{selectedProject.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${selectedProject.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Projects List View
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
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-black placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <select 
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-3 py-2 border border-slate-300 rounded-lg text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Statuses</option>
                  <option value="planning">Planning</option>
                  <option value="in-progress">In Progress</option>
                  <option value="review">Review</option>
                  <option value="completed">Completed</option>
                </select>

                <select 
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="px-3 py-2 border border-slate-300 rounded-lg text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Categories</option>
                  <option value="infrastructure">Infrastructure</option>
                  <option value="environment">Environment</option>
                  <option value="utilities">Utilities</option>
                  <option value="traffic management">Traffic Management</option>
                </select>
              </div>
            </div>

            {/* Projects Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">{projectsData.length}</div>
                    <div className="text-sm text-slate-500">Total Projects</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">
                      {projectsData.filter(p => p.status === 'in-progress').length}
                    </div>
                    <div className="text-sm text-slate-500">In Progress</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">
                      {projectsData.filter(p => p.status === 'planning').length}
                    </div>
                    <div className="text-sm text-slate-500">Planning</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-purple-600">₹</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">
                      {Math.round(projectsData.reduce((acc, p) => acc + parseFloat(p.budget.replace(/[₹,]/g, '')), 0) / 100000)}L
                    </div>
                    <div className="text-sm text-slate-500">Total Budget</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results count */}
            <div className="mb-6">
              <p className="text-slate-600">Showing {filteredProjects.length} of {projectsData.length} projects</p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id} 
                  onClick={() => handleProjectClick(project)}
                  className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${project.categoryColor}`}>
                          {project.categoryIcon} {project.category}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${project.statusColor}`}>
                          {project.status.charAt(0).toUpperCase() + project.status.slice(1).replace('-', ' ')}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${project.priorityColor}`}>
                          {project.priority.charAt(0).toUpperCase() + project.priority.slice(1)}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">{project.title}</h3>
                      <p className="text-slate-600 text-sm line-clamp-2">{project.description}</p>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-lg font-bold text-blue-600">{project.progress}%</div>
                      <div className="text-xs text-slate-500">Complete</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-500">Budget:</span>
                      <span className="ml-2 font-medium text-slate-900">{project.budget}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Completion:</span>
                      <span className="ml-2 font-medium text-slate-900">{project.estimatedCompletion}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Department:</span>
                      <span className="ml-2 font-medium text-slate-900">{project.department}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Team:</span>
                      <span className="ml-2 font-medium text-slate-900">{project.teamMembers} members</span>
                    </div>
                  </div>

                  {/* Location */}
                  {project.location && (
                    <div className="mt-3 flex items-center gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{project.location}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}