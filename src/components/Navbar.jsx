// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom"; // <-- import Link

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur text-white"
      aria-label="Main"
    >
      <div className="w-full px-4">
        {/* Bar */}
        <div className="h-16 md:h-20 w-full flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold">Ago.</h1>
          </div>


          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-2 ml-auto">
            <li className="p-3 font-semibold hover:text-gray-300 cursor-pointer transition-colors">Home</li>
            <li className="p-3 font-semibold hover:text-gray-300 cursor-pointer transition-colors">Schedule</li>
            <li className="p-3 font-semibold hover:text-gray-300 cursor-pointer transition-colors">Notes</li>

            <li>
              <Link
                to="/login"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-sm md:text-base"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#00df9a] text-black hover:bg-[#00b87a] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00df9a]/60 text-sm md:text-base"
              >
                Register
              </Link>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            aria-label="Open main menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {/* Hamburger / X (no extra deps) */}
            <svg
              className={`h-6 w-6 transition-transform ${open ? "rotate-90" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile panel */}
        <div
          className={`md:hidden origin-top overflow-hidden transition-[max-height,opacity] duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <ul className="flex flex-col gap-1 pb-4">
            <li className="px-2">
              <button className="w-full text-left p-3 rounded-lg hover:bg-white/10">Home</button>
            </li>
            <li className="px-2">
              <button className="w-full text-left p-3 rounded-lg hover:bg-white/10">Schedule</button>
            </li>
            <li className="px-2">
              <button className="w-full text-left p-3 rounded-lg hover:bg-white/10">Notes</button>
            </li>

            <div className="flex gap-2 px-2 pt-2">
              <div className="flex-1">
                <Link
                  to="/login"
                  className="block w-full text-center px-4 py-3 rounded-lg border border-white hover:bg-white hover:text-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  Login
                </Link>
              </div>
              <div className="flex-1">
                <Link
                  to="/register"
                  className="block w-full text-center px-4 py-3 rounded-lg bg-[#00df9a] text-black hover:bg-[#00b87a] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00df9a]/60"
                >
                  Register
                </Link>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
