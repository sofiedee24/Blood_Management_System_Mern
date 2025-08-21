// Sidenavbar.js (simplified)
import React, { useState } from 'react';

const Sidenavbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { id: 1, label: 'Dashboard', icon: '📊', path: '/dashboard' },
    { id: 2, label: 'Projects', icon: '📁', path: '/projects' },
    { id: 3, label: 'Team', icon: '👥', path: '/team' },
    { id: 4, label: 'Calendar', icon: '📅', path: '/calendar' },
    { id: 5, label: 'Documents', icon: '📄', path: '/documents' },
    { id: 6, label: 'Reports', icon: '📈', path: '/reports' },
    { id: 7, label: 'Settings', icon: '⚙️', path: '/settings' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full bg-gray-800 text-white 
        transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:inset-0
        w-64
      `}>
        {/* Header */}
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">My App</h1>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-700"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.path}
                  className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  <span className="text-xl mr-3">{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 w-full p-4 border-t border-gray-700">
          <div className="flex items-center p-3 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors duration-200">
            <span className="text-xl mr-3">👤</span>
            <span>Profile</span>
          </div>
        </div>
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 p-2 bg-gray-800 text-white rounded-md lg:hidden z-30"
      >
        ☰
      </button>
    </>
  );
};

export default Sidenavbar;