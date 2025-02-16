import { useState } from "react";

export default function AddHiveModal({ isOpen, onClose }) {
  if (!isOpen) return null; // Don't render if modal is closed

  return (
    <div className="fixed inset-0 bg-gray-300 bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-xl w-96">
        <h2 className="text-lg font-semibold">Add new hive</h2>
        <p className="text-sm text-gray-500">Please fill the information</p>

        {/* Form Fields */}
        <div className="mt-4">
          <label className="block text-sm font-medium">Hive’s Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium">
            Queen Birth Date: <span className="text-red-500">*</span>
          </label>
          <input type="date" className="w-full mt-1 p-2 border rounded-md" />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium">Note</label>
          <textarea
            placeholder="Type something about hive..."
            className="w-full mt-1 p-2 border rounded-md"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
