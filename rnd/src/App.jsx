// function App() {
//   return (
//     <>
//       <div className="flex h-screen bg-gray-100">
//         {/* <SideNav /> */}

//         <Sidebar />

//         <div className="flex flex-col w-full">
//           <SearchHeader className="flex justify-end" />
//           {/* <Navbar /> */}
//           {/* <LineGraph className="w-10" /> */}
//           <Movies />
//         </div>
//       </div>
//     </>
//   );
// }
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HiveList from "./pages/HiveList";
import Sidebar from "./components/sideBar";
import DashBoard from "./pages/DashBoard";
import { SearchHeader } from "./components/searchHeader";
import Documentation from "./pages/Documentation";
import Support from "./pages/Support";
function App() {
  return (
    <Router>
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
      {/* <div className="flex max-md:flex-col">
        <Sidebar />
        <div className="flex flex-col w-[82%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <SearchHeader />
          </div>
        </div>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/hivelist" element={<HiveList />} />
        </Routes>
      </div> */}
    </Router>
  );
}
export default App;
