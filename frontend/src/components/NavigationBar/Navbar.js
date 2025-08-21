// Navbar.js
import { useState } from "react";
//import logo from "./assets/bloodtrack.png";
//import Sidebar from "./Sidenavbar";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Your existing navbar */}
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 border-b px-4 py-2.5">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
          
          {/* Brand */}
          <a href="https://yourwebsite.com" className="flex items-center">
            <img
              src="{bloodtrack}"
              className="h-6 mr-3 sm:h-9"
              alt="bloodtrack"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-[#800000] dark:text-white">
              BloodTrack
            </span>
          </a>

          {/* Right side */}
          <div className="flex items-center md:order-2">
            <button className="px-4 py-2 text-sm font-medium text-white bg-[#800000] rounded-lg hover:bg-[#990000] focus:outline-none">
              Get started
            </button>
            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center p-2 ml-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none"
              aria-controls="navbar-default"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Collapsible nav links */}
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isOpen ? "block" : "hidden"
            }`}
            id="navbar-default"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-[#800000] rounded md:bg-transparent md:text-[#800000] md:p-0"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#800000] md:p-0 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#800000] md:p-0 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#800000] md:p-0 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#800000] md:p-0 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar - Now properly rendered */}
      {/*"<Sidebar />"*/}
    </>
  );
}

export default Navbar;