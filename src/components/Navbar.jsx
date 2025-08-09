// src/components/Navbar.jsx
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur text-white"
      aria-label="Main"
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Bar */}
        <div className="h-16 md:h-20 flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold">Ago.</h1>
          </div>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-2">
            <li className="p-3 font-semibold hover:text-gray-300 cursor-pointer transition-colors">Home</li>
            <li className="p-3 font-semibold hover:text-gray-300 cursor-pointer transition-colors">Schedule</li>
            <li className="p-3 font-semibold hover:text-gray-300 cursor-pointer transition-colors">Notes</li>

            <li>
              <button className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">
                Login
              </button>
            </li>
            <li>
              <button className="px-4 py-2 bg-[#00df9a] text-black rounded-lg hover:bg-[#00b87a] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00df9a]/60">
                Register
              </button>
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
              <button className="flex-1 px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition-colors">
                Login
              </button>
              <button className="flex-1 px-4 py-2 bg-[#00df9a] text-black rounded-lg hover:bg-[#00b87a] transition-colors">
                Register
              </button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
