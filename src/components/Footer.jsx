import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-black py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Ago.</h2>
          <p className="text-gray-600">
            Plan your time. Keep your ideas. Stay productive with Ago.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-[#00df9a] transition-colors cursor-pointer">
              Home
            </li>
            <li className="hover:text-[#00df9a] transition-colors cursor-pointer">
              Schedule
            </li>
            <li className="hover:text-[#00df9a] transition-colors cursor-pointer">
              Notes
            </li>
            <li className="hover:text-[#00df9a] transition-colors cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-4">
            Subscribe to get the latest updates and features.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none w-full"
            />
            <button
              type="submit"
              className="bg-[#00df9a] text-black px-4 py-2 rounded-r-lg hover:bg-[#00b87a] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Ago. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
