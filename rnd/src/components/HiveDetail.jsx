import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Edit, Trash, Check, X, Expand, Minimize } from "lucide-react";

// Function to generate random data for graphs
const generateRandomData = (min, max) => {
  return Array.from({ length: 12 }, (_, i) => ({
    time: `${i + 1}:00`,
    value: Math.floor(Math.random() * (max - min + 1)) + min,
  }));
};

const HiveDetail = () => {
  const { hiveId } = useParams();
  const [isFullWidth, setIsFullWidth] = useState(false);
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [editingNote, setEditingNote] = useState(null);
  const [editText, setEditText] = useState("");
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  // Sample data for graphs
  const temperatureData = generateRandomData(25, 35);
  const humidityData = generateRandomData(10, 50);
  const weightData = generateRandomData(50, 65);
  const uvIndexData = generateRandomData(0, 10);
  const batteryData = generateRandomData(80, 100);

  const addNote = () => {
    if (newNote.trim() !== "") {
      setNotes([...notes, { text: newNote, id: Date.now() }]);
      setNewNote("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addNote();
    }
  };

  const handleEditClick = (note) => {
    setEditingNote(note.id);
    setEditText(note.text);
  };

  const handleEditKeyDown = (e, id) => {
    if (e.key === "Enter") {
      saveEdit(id);
    }
  };

  const saveEdit = (id) => {
    setNotes(
      notes.map((note) => (note.id === id ? { ...note, text: editText } : note))
    );
    setEditingNote(null);
  };

  const handleDelete = (id) => {
    setDeleteConfirm(id);
  };

  const confirmDelete = () => {
    setNotes(notes.filter((note) => note.id !== deleteConfirm));
    setDeleteConfirm(null);
  };

  const cancelDelete = () => {
    setDeleteConfirm(null);
  };

  return (
    <div className="p-6 bg-white min-h-screen w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-gray-700">Hive: {hiveId}</h1>
        <div className="flex space-x-2">
          <button className="flex items-center px-3 py-1 bg-amber-300 text-gray-800 rounded-lg hover:bg-amber-400 transition">
            <Edit size={18} className="mr-1" />
            Edit
          </button>
          <button className="flex items-center px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
            <Trash size={18} className="mr-1" />
            Delete
          </button>
        </div>
      </div>
      <h2 className="text-xl text-gray-600 mt-1">Near House</h2>

      <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200 mt-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Notes</h2>
        <textarea
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new note..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div className="flex justify-end mt-2">
          <button
            className="px-4 py-2 bg-amber-300 text-gray-800 rounded-lg hover:bg-amber-400 transition"
            onClick={addNote}
          >
            Add Note
          </button>
        </div>
        <div className="mt-4 space-y-2">
          {notes.map((note) => (
            <div
              key={note.id}
              className="p-2 bg-gray-100 rounded-lg shadow-sm flex items-center justify-between"
            >
              {editingNote === note.id ? (
                <input
                  className="w-full p-1 border rounded-lg focus:outline-none"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) => handleEditKeyDown(e, note.id)}
                  autoFocus
                />
              ) : (
                <span>{note.text}</span>
              )}
              <div className="flex space-x-2">
                {editingNote === note.id ? (
                  <button
                    className="text-green-500"
                    onClick={() => saveEdit(note.id)}
                  >
                    <Check size={18} />
                  </button>
                ) : (
                  <button
                    className="text-blue-500"
                    onClick={() => handleEditClick(note)}
                  >
                    <Edit size={18} />
                  </button>
                )}
                {deleteConfirm === note.id ? (
                  <div className="flex space-x-2">
                    <button className="text-red-500" onClick={confirmDelete}>
                      <Check size={18} />
                    </button>
                    <button className="text-gray-500" onClick={cancelDelete}>
                      <X size={18} />
                    </button>
                  </div>
                ) : (
                  <button
                    className="text-red-500"
                    onClick={() => handleDelete(note.id)}
                  >
                    <Trash size={18} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button
          className="flex items-center px-4 py-2 bg-amber-300 text-black rounded-lg hover:bg-blue-600 transition"
          onClick={() => setIsFullWidth(!isFullWidth)}
        >
          {isFullWidth ? (
            <Minimize size={18} className="mr-2" />
          ) : (
            <Expand size={18} className="mr-2" />
          )}
          {isFullWidth ? "Compact View" : "Full-Width View"}
        </button>
      </div>

      <div
        className={`mt-6 grid ${
          isFullWidth ? "grid-cols-1" : "grid-cols-2 gap-6"
        }`}
      >
        {[
          { label: "Temperature", data: temperatureData, color: "#FF5733" },
          { label: "Humidity", data: humidityData, color: "#3498DB" },
          { label: "Weight", data: weightData, color: "#2ECC71" },
          { label: "UV Index", data: uvIndexData, color: "#F39C12" },
          { label: "Battery", data: batteryData, color: "#1ABC9C" },
        ].map(({ label, data, color }) => (
          <div
            key={label}
            className="bg-white p-4 rounded-xl shadow-md border border-gray-200 w-full"
          >
            <h3 className="text-lg font-semibold text-gray-700">
              {label} Over Time
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={color}
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HiveDetail;
