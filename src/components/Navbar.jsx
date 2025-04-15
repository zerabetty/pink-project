import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-raisin text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-3">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-auto max-h-[70px] w-auto object-contain select-none pointer-events-none"
            />
          </Link>
        </div>
      </div>
      <ul className="flex gap-8 text-base md:text-lg font-medium">
        <li>
          <Link
            to="/about"
            className="text-base md:text-lg hover:text-cyclamen hover:text-xl transition-all duration-200"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/support"
            className="text-base md:text-lg hover:text-cyclamen hover:text-xl transition-all duration-200"
          >
            Connect & Share
          </Link>
        </li>
        <li>
          <Link
            to="/education"
            className="text-base md:text-lg hover:text-cyclamen hover:text-xl transition-all duration-200"
          >
            Education Center
          </Link>
        </li>
        <li>
          <Link
            to="/chatbot"
            className="text-base md:text-lg hover:text-cyclamen hover:text-xl transition-all duration-200"
          >
            Hopebot
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
