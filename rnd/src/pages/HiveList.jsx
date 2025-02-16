import React from "react";
import Sidebar from "../components/sideBar";
import HiveCard from "../components/HiveCard";
import AddHiveModal from "../components/AddHiveModal";
import { Plus } from "lucide-react";
import { useState } from "react";

// import AddHiveModal from "../components/AddHiveModal";

const HiveList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="p-6 bg-white ">
      {/* Title and Button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-700">Hives List</h1>
        <button
          className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center shadow-md transition"
          onClick={() => setIsModalOpen(true)}
        >
          <Plus size={18} className="mr-2" />
          Add new hive
        </button>
        <AddHiveModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>

      {/* Hive Cards */}
      <div className="flex">
        <HiveCard />
      </div>
    </div>
  );
};

export default HiveList;
