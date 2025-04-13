import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-raisin text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-3">
        <div className="text-cyclamen text-2xl">🎀</div>
        <h1 className="text-2xl font-bold text-cyclamen">Pink Project</h1>
      </div>
      <ul className="flex gap-6 text-sm font-medium">
        <li>
          <Link to="/about" className="hover:text-cyclamen transition">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/support" className="hover:text-cyclamen transition">
            Support Groups
          </Link>
        </li>
        <li>
          <Link to="/education" className="hover:text-cyclamen transition">
            Education Center
          </Link>
        </li>
        <li>
          <Link to="/chatbot" className="hover:text-cyclamen transition">
            Chatbot
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
