import React from 'react'

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 w-full bg-black z-50 text-white flex justify-between h-24 items-center px-4 shadow-md"
      aria-label="Main"
    >
      <div className="flex-1">
        <h1 className="text-3xl font-bold ml-5">Ago.</h1>
      </div>

      <ul className="flex items-center space-x-2">
        <li className="p-4 font-bold hover:text-gray-300 cursor-pointer transition-colors duration-200">Home</li>
        <li className="p-4 font-bold hover:text-gray-300 cursor-pointer transition-colors duration-200">Schedule</li>
        <li className="p-4 font-bold hover:text-gray-300 cursor-pointer transition-colors duration-200">Notes</li>

        <li>
          <button
            className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            Login
          </button>
        </li>

        <li>
          <button
            className="px-4 py-2 bg-[#00df9a] text-black rounded-lg hover:bg-[#00b87a] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00df9a]/60"
          >
            Register
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
