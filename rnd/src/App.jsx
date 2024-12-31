import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HiveList from "./pages/HiveList";
import Sidebar from "./components/sideBar";
import DashBoard from "./pages/DashBoard";
import { SearchHeader } from "./components/searchHeader";
import Documentation from "./pages/Documentation";
import Support from "./pages/Support";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Page - No Sidebar or Header */}
        <Route path="/login" element={<Login />} />

        {/* Main App Layout */}
        <Route
          path="/*"
          element={
            <div className="flex flex-row w-full max-md:max-w-full">
              <Sidebar />
              <div className="flex flex-col w-full max-md:max-w-full">
                <SearchHeader />
                <Routes>
                  <Route path="/" element={<DashBoard />} />
                  <Route path="/hivelist" element={<HiveList />} />
                  <Route path="/documentation" element={<Documentation />} />
                  <Route path="/support" element={<Support />} />
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
