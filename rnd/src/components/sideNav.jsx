import React from "react";
import bee from "../assets/bee.png";

const SideNav = () => {
  return (
    <div className="w-64 bg-orange-100 p-4">
      <div className="flex items-center mb-8">
        <img src={bee} alt="Logo" className="mr-4 w-20" />
      </div>
      <nav>
        <ul>
          <li className="mb-4">
            <a href="#" className="flex items-center text-orange-500">
              <i className="fas fa-tachometer-alt mr-2"></i>
              Dashboard
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center text-gray-700">
              <i className="fas fa-list mr-2"></i>
              Hives List
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center text-gray-700">
              <i className="fas fa-book mr-2"></i>
              Documentation
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center text-gray-700">
              <i className="fas fa-life-ring mr-2"></i>
              Support
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
