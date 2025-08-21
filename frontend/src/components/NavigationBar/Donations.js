import { useState } from "react";
import {
  HomeIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  ShoppingBagIcon,
  ChartBarIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  EyeDropperIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export default function DonationsDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [active, setActive] = useState("Blood Donations");
  const [donations, setDonations] = useState([
    {
      id: 1,
      date: "2025-08-15",
      donor: "Juan Dela Cruz",
      bloodGroup: "A+",
      volume: 500,
    },
    {
      id: 2,
      date: "2025-08-18",
      donor: "Maria Santos",
      bloodGroup: "O-",
      volume: 450,
    },
    {
      id: 3,
      date: "2025-08-20",
      donor: "Carlos Reyes",
      bloodGroup: "B+",
      volume: 600,
    },
    {
      id: 4,
      date: "2025-08-21",
      donor: "Angela Cruz",
      bloodGroup: "AB-",
      volume: 400,
    },
    {
      id: 5,
      date: "2025-08-22",
      donor: "Jose Ramirez",
      bloodGroup: "O+",
      volume: 550,
    },
    {
      id: 6,
      date: "2025-08-23",
      donor: "Sofia Mendoza",
      bloodGroup: "A-",
      volume: 480,
    },
    {
      id: 7,
      date: "2025-08-24",
      donor: "Miguel Torres",
      bloodGroup: "B-",
      volume: 500,
    },
    {
      id: 8,
      date: "2025-08-25",
      donor: "Isabella Cruz",
      bloodGroup: "AB+",
      volume: 470,
    },
    {
      id: 9,
      date: "2025-08-26",
      donor: "Daniel Garcia",
      bloodGroup: "O-",
      volume: 520,
    },
    {
      id: 10,
      date: "2025-08-27",
      donor: "Camille Santos",
      bloodGroup: "A+",
      volume: 490,
    },
    {
      id: 11,
      date: "2025-08-28",
      donor: "Luis Fernandez",
      bloodGroup: "B+",
      volume: 510,
    },
    {
      id: 12,
      date: "2025-08-29",
      donor: "Andrea Ramos",
      bloodGroup: "O+",
      volume: 600,
    },
    {
      id: 13,
      date: "2025-08-30",
      donor: "Patrick Dizon",
      bloodGroup: "A-",
      volume: 450,
    },
    {
      id: 14,
      date: "2025-08-31",
      donor: "Katrina Lopez",
      bloodGroup: "AB-",
      volume: 400,
    },
    {
      id: 15,
      date: "2025-09-01",
      donor: "Marco Perez",
      bloodGroup: "O+",
      volume: 560,
    },
    {
      id: 16,
      date: "2025-09-02",
      donor: "Nicole Gutierrez",
      bloodGroup: "B+",
      volume: 500,
    },
    {
      id: 17,
      date: "2025-09-03",
      donor: "Rafael Cruz",
      bloodGroup: "O-",
      volume: 480,
    },
    {
      id: 18,
      date: "2025-09-04",
      donor: "Hannah Villanueva",
      bloodGroup: "A+",
      volume: 530,
    },
    {
      id: 19,
      date: "2025-09-05",
      donor: "Joshua Santos",
      bloodGroup: "B-",
      volume: 490,
    },
    {
      id: 20,
      date: "2025-09-06",
      donor: "Monica Delgado",
      bloodGroup: "AB+",
      volume: 550,
    },
  ]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isNewEntryModalOpen, setIsNewEntryModalOpen] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [newDonation, setNewDonation] = useState({
    date: "",
    donor: "",
    bloodGroup: "",
    volume: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const menuItems = [
    { name: "Dashboard", icon: HomeIcon },
    { name: "Donors", icon: UserGroupIcon },
    { name: "Blood Donations", icon: EyeDropperIcon },
    { name: "Requests", icon: ShoppingBagIcon },
    { name: "Handed Over", icon: ChartBarIcon },
    { name: "Users", icon: UserGroupIcon },
    { name: "Settings", icon: Cog6ToothIcon },
    { name: "Logout", icon: ArrowRightOnRectangleIcon },
  ];

  // Filter donations based on search term
  const filteredDonations = donations.filter(
    (donation) =>
      donation.donor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.bloodGroup.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.date.includes(searchTerm)
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredDonations.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedDonations = filteredDonations.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleEdit = (donation) => {
    setSelectedDonation(donation);
    setIsEditModalOpen(true);
  };

  const handleNewEntry = () => {
    setIsNewEntryModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDonation({
      ...newDonation,
      [name]: value,
    });
  };

  const handleSubmitNewEntry = (e) => {
    e.preventDefault();
    // Add the new donation to the list
    const newId =
      donations.length > 0 ? Math.max(...donations.map((d) => d.id)) + 1 : 1;
    setDonations([...donations, { id: newId, ...newDonation }]);

    // Reset form and close modal
    setNewDonation({
      date: "",
      donor: "",
      bloodGroup: "",
      volume: "",
    });
    setIsNewEntryModalOpen(false);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedDonation(null);
  };

  const closeNewEntryModal = () => {
    setIsNewEntryModalOpen(false);
    setNewDonation({
      date: "",
      donor: "",
      bloodGroup: "",
      volume: "",
    });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Top Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-[#800000] text-white shadow-md">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-[#660000] transition"
            >
              <Bars3Icon className="w-6 h-6 text-white" />
            </button>
            <span className="text-xl font-bold tracking-wide">BloodTrack</span>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="User"
              className="w-9 h-9 rounded-full border-2 border-white shadow"
            />
          </div>
        </div>
      </nav>

      {/* Sidebar */}
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
          {/* Donations Table */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4 border-b gap-4">
              <h2 className="text-lg font-semibold text-gray-700">
                List of Donations
              </h2>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search donations..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
                <button
                  onClick={handleNewEntry}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md shadow whitespace-nowrap"
                >
                  + New Entry
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-4 py-2 text-center text-sm font-medium text-gray-600">
                      #
                    </th>
                    <th className="border px-4 py-2 text-sm font-medium text-gray-600">
                      Date
                    </th>
                    <th className="border px-4 py-2 text-sm font-medium text-gray-600">
                      Donor
                    </th>
                    <th className="border px-4 py-2 text-sm font-medium text-gray-600">
                      Blood Group
                    </th>
                    <th className="border px-4 py-2 text-sm font-medium text-gray-600">
                      Volume (ml)
                    </th>
                    <th className="border px-4 py-2 text-center text-sm font-medium text-gray-600">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedDonations.length > 0 ? (
                    paginatedDonations.map((donation, index) => (
                      <tr key={donation.id} className="hover:bg-gray-50">
                        <td className="border px-4 py-2 text-center text-sm">
                          {startIndex + index + 1}
                        </td>
                        <td className="border px-4 py-2 text-sm">
                          {new Date(donation.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </td>
                        <td className="border px-4 py-2 text-sm font-semibold">
                          {donation.donor}
                        </td>
                        <td className="border px-4 py-2 text-sm font-semibold">
                          {donation.bloodGroup}
                        </td>
                        <td className="border px-4 py-2 text-sm font-semibold">
                          {donation.volume}
                        </td>
                        <td className="border px-4 py-2 text-center space-x-2">
                          <button
                            onClick={() => handleEdit(donation)}
                            className="px-3 py-1 text-sm border border-blue-500 text-blue-600 rounded hover:bg-blue-50"
                          >
                            Edit
                          </button>
                          <button className="px-3 py-1 text-sm border border-red-500 text-red-600 rounded hover:bg-red-50">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="6"
                        className="border px-4 py-8 text-center text-gray-500"
                      >
                        No donations found matching your search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {filteredDonations.length > 0 && (
              <div className="px-6 py-4 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm text-gray-700">
                  Showing{" "}
                  <span className="font-medium">{startIndex + 1}</span> to{" "}
                  <span className="font-medium">
                    {Math.min(startIndex + itemsPerPage, filteredDonations.length)}
                  </span>{" "}
                  of <span className="font-medium">{filteredDonations.length}</span>{" "}
                  results
                </div>
                <div className="flex gap-1">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1 text-sm border rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                  >
                    Previous
                  </button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-3 py-1 text-sm border rounded-md ${
                        currentPage === page
                          ? "bg-blue-600 text-white border-blue-600"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 text-sm border rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Edit Donation</h3>
              <button
                onClick={closeEditModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  defaultValue={selectedDonation?.date}
                  className="mt-1 block w-full border rounded-md px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Donor
                </label>
                <input
                  type="text"
                  defaultValue={selectedDonation?.donor}
                  className="mt-1 block w-full border rounded-md px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Blood Group
                </label>
                <input
                  type="text"
                  defaultValue={selectedDonation?.bloodGroup}
                  className="mt-1 block w-full border rounded-md px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Volume (ml)
                </label>
                <input
                  type="number"
                  defaultValue={selectedDonation?.volume}
                  className="mt-1 block w-full border rounded-md px-3 py-2 text-sm"
                />
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <button
                  type="button"
                  onClick={closeEditModal}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* New Entry Modal */}
      {isNewEntryModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Add New Donation</h3>
              <button
                onClick={closeNewEntryModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleSubmitNewEntry} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={newDonation.date}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border rounded-md px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Donor
                </label>
                <input
                  type="text"
                  name="donor"
                  value={newDonation.donor}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border rounded-md px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Blood Group
                </label>
                <input
                  type="text"
                  name="bloodGroup"
                  value={newDonation.bloodGroup}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border rounded-md px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Volume (ml)
                </label>
                <input
                  type="number"
                  name="volume"
                  value={newDonation.volume}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border rounded-md px-3 py-2 text-sm"
                />
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <button
                  type="button"
                  onClick={closeNewEntryModal}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Add Donation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}