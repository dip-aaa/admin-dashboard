'use client';
import { useState } from 'react';

interface TopbarProps {
  activeTab: string;
  onLogout: () => void;
}

export default function Topbar({ activeTab, onLogout }: TopbarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const notifications = [
    { id: 1, type: 'issue', message: 'New citizen issue reported in Ward 5', time: '2 min ago' },
    { id: 2, type: 'proposal', message: 'Proposal "Community Garden" needs review', time: '15 min ago' },
    { id: 3, type: 'project', message: 'Road construction project 80% complete', time: '1 hour ago' },
  ];

  const getTabTitle = (tab: string) => {
    switch(tab) {
      case 'dashboard': return 'Dashboard';
      case 'citizen-issues': return 'Citizen Issues';
      case 'citizen-proposals': return 'Proposals';
      case 'active-projects': return 'Active Projects';
      case 'reports': return 'Reports';
      case 'skills': return 'Skills & Technologies';
      case 'settings': return 'Settings';
      default: return 'Dashboard';
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-100/80 via-blue-50/50 via-blue-25/30 to-transparent backdrop-blur-md px-6 py-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800 mb-1">{getTabTitle(activeTab)}</h1>
          <p className="text-sm text-slate-600">Monitor and manage your municipal services</p>
        </div>

        <div className="flex items-center gap-3">
          {/* Search Bar */}
          <div className="relative">
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search issues, projects..."
              className="pl-10 pr-4 py-2.5 w-80 border border-blue-500/60 rounded-xl bg-white/60 backdrop-blur-md text-sm text-black placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/60 focus:bg-white/80 transition-all duration-300 shadow-sm"
            />
          </div>

          {/* Chat Button */}
          <button className="relative p-2.5 text-slate-500 hover:text-blue-700 hover:bg-white/50 rounded-xl transition-all duration-300 backdrop-blur-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full shadow-sm border border-white/60"></span>
          </button>

          {/* Notifications */}
          <div className="relative">
            <button 
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              className="relative p-2.5 text-slate-500 hover:text-blue-700 hover:bg-white/50 rounded-xl transition-all duration-300 backdrop-blur-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM15 17H9a6 6 0 01-6-6V7a6 6 0 016-6h6a6 6 0 016 6v4.5" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.73 21a2 2 0 01-3.46 0" />
              </svg>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-400 to-red-500 text-white text-xs rounded-full flex items-center justify-center shadow-sm border border-white/60">3</span>
            </button>

            {isNotificationOpen && (
              <div className="absolute right-0 mt-3 w-80 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border-0 py-3 z-20 ring-1 ring-blue-200/50">
                <div className="px-4 py-3 border-b border-blue-100/60">
                  <h3 className="text-sm font-semibold text-slate-800">Notifications</h3>
                </div>
                
                <div className="max-h-80 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="px-4 py-3 hover:bg-blue-50/50 border-b border-blue-50/60 last:border-b-0 transition-all duration-200">
                      <div className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          notification.type === 'issue' ? 'bg-gradient-to-r from-red-400 to-red-500' :
                          notification.type === 'proposal' ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' : 'bg-gradient-to-r from-green-400 to-green-500'
                        }`}></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-slate-800 leading-5">{notification.message}</p>
                          <p className="text-xs text-slate-500 mt-1">{notification.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="px-4 py-3 border-t border-blue-100/60">
                  <button className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">View all notifications</button>
                </div>
              </div>
            )}
          </div>

          {/* Subtle Divider */}
          <div className="h-6 w-px bg-blue-300/60"></div>

          {/* User Account Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg ring-2 ring-white/40">
                <span className="text-white font-semibold text-sm">AU</span>
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-slate-700">Admin User</p>
                <p className="text-xs text-slate-500">Super Admin</p>
              </div>
              <svg className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border-0 py-3 z-10 ring-1 ring-blue-200/50">
                <div className="px-4 py-3 border-b border-blue-100/60">
                  <p className="text-sm font-medium text-slate-700">Admin User</p>
                  <p className="text-xs text-slate-500">admin@hamrochautari.com</p>
                </div>
                
                <div className="py-2">
                  <button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-blue-50/50 flex items-center gap-3 transition-all duration-200">
                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    My Profile
                  </button>
                  
                  <button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-blue-50/50 flex items-center gap-3 transition-all duration-200">
                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Account Settings
                  </button>

                  <button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-blue-50/50 flex items-center gap-3 transition-all duration-200">
                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Help Center
                  </button>
                </div>

                <div className="border-t border-blue-100/60 pt-2">
                  <button 
                    onClick={onLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50/50 flex items-center gap-3 transition-all duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}