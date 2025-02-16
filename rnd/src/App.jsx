import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HiveList from "./pages/HiveList";
import HiveDetail from "./components/HiveDetail";
import Sidebar from "./components/sideBar";
import DashBoard from "./pages/DashBoard";
import { SearchHeader } from "./components/searchHeader";
import Documentation from "./pages/Documentation";
import Support from "./pages/Support";
import Login from "./pages/Login";

function MainLayout() {
  const location = useLocation();

  // If the user is on the login page, show only the Login component
  if (location.pathname === "/login") {
    return <Login />;
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar - Fixed Left */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 h-screen">
        {/* Search Header - Fixed Top */}
        <SearchHeader />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4">
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/hivelist" element={<HiveList />} />
            <Route path="/hives/:hiveId" element={<HiveDetail />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Route - Separate from Main Layout */}
        <Route path="/login" element={<Login />} />

        {/* All Other Routes Use the Main Layout */}
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
