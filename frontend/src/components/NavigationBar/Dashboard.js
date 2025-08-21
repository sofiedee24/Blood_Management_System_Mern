import { useState } from "react";
import {
  HomeIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  InboxIcon,
  ShoppingBagIcon,
  ChartBarIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  EyeDropperIcon,
  
} from "@heroicons/react/24/outline";


function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: HomeIcon },
    { name: "Donors", icon: UserGroupIcon },
    { name: "Blood Donations", icon: EyeDropperIcon },
    { name: "Requests", icon: ShoppingBagIcon },
    { name: "Handed Over", icon: ChartBarIcon },
    { name: "Users", icon: UserGroupIcon},
    { name: "Settings", icon: Cog6ToothIcon },
    { name: "Logout", icon: ArrowRightOnRectangleIcon },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Top Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-[#800000] text-white shadow-md">
        <div className="px-4 py-3 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-3">
            {/* Sidebar toggle (always visible) */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-[#660000] transition"
            >
              <Bars3Icon className="w-6 h-6 text-white" />
            </button>
            <span className="text-xl font-bold tracking-wide">
              BloodTrack
            </span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <img
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="User"
              className="w-9 h-9 rounded-full border-2 border-white shadow"
            />
          </div>
        </div>
      </nav>

      {/* Sidebar (overlay style) */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transform bg-[#800000] text-white shadow-lg transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full px-3 pb-4 overflow-y-auto">
          <ul className="space-y-1 font-medium">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.name;
              return (
                <li key={item.name}>
                  <button
                    onClick={() => setActive(item.name)}
                    className={`flex items-center w-full p-2 rounded-lg transition ${
                      isActive
                        ? "bg-white text-[#800000] font-semibold shadow"
                        : "hover:bg-[#660000]"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        isActive ? "text-[#800000]" : "text-white"
                      }`}
                    />
                    <span className="ms-3">{item.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`p-6 mt-16 transition-all duration-300 ${
          sidebarOpen ? "sm:ml-64" : "sm:ml-0"
        }`}
      >
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center justify-center h-28 rounded-xl bg-[#800000] text-white shadow-md hover:shadow-lg transition">
              Card 1
            </div>
            <div className="flex items-center justify-center h-28 rounded-xl bg-[#800000] text-white shadow-md hover:shadow-lg transition">
              Card 2
            </div>
            <div className="flex items-center justify-center h-28 rounded-xl bg-[#800000] text-white shadow-md hover:shadow-lg transition">
              Card 3
            </div>
            <div className="flex items-center justify-center h-28 rounded-xl bg-[#800000] text-white shadow-md hover:shadow-lg transition">
              Card 4
            </div>
          </div>

          {/* Content area */}
          <div className="h-56 flex items-center justify-center rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300">
            Content Area
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
