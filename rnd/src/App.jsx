import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";
import SideNav from "./components/sideNav";
import Movies from "./components/Movie";
function App() {
  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <SideNav />
        <div className="flex flex-col w-full">
          <Navbar />
          {/* <LineGraph className="w-10" /> */}
          <Movies />
        </div>
      </div>
    </>
  );
}
// function App() {
//   return (
//     <div className="flex h-screen">
//       <aside className="w-64 bg-orange-100 p-4">
//         <div className="flex items-center mb-8">
//           <img src="https://placehold.co/40x40" alt="Logo" className="mr-2" />
//           <span className="text-xl font-bold">IoB</span>
//         </div>
//         <nav>
//           <ul>
//             <li className="mb-4">
//               <a href="#" className="flex items-center text-orange-500">
//                 <i className="fas fa-tachometer-alt mr-2"></i>
//                 Dashboard
//               </a>
//             </li>
//             <li className="mb-4">
//               <a href="#" className="flex items-center text-gray-700">
//                 <i className="fas fa-list mr-2"></i>
//                 Hives List
//               </a>
//             </li>
//             <li className="mb-4">
//               <a href="#" className="flex items-center text-gray-700">
//                 <i className="fas fa-book mr-2"></i>
//                 Documentation
//               </a>
//             </li>
//             <li className="mb-4">
//               <a href="#" className="flex items-center text-gray-700">
//                 <i className="fas fa-life-ring mr-2"></i>
//                 Support
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </aside>
//       <main className="flex-1 p-6">
//         <header className="flex justify-between items-center mb-8">
//           <h1 className="text-2xl font-bold">Dashboard</h1>
//           <div className="flex items-center">
//             <input
//               type="text"
//               placeholder="Search"
//               className="border rounded p-2 mr-4"
//             />
//             <img
//               src="https://placehold.co/40x40"
//               alt="User Avatar"
//               className="rounded-full"
//             />
//           </div>
//         </header>
//         <section className="mb-8">
//           <h2 className="text-xl font-bold mb-2">Hello, Liniee</h2>
//           <p className="text-gray-600">Thursday, 17th October, 2024</p>
//         </section>
//         <section className="mb-8 p-6 bg-white rounded shadow">
//           <h2 className="text-xl font-bold mb-4">Today's Local Weather</h2>
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-2xl font-bold">Sunny Cloudy</p>
//               <p className="text-2xl">30°C</p>
//             </div>
//             <img src="https://placehold.co/50x50" alt="Weather Icon" />
//           </div>
//         </section>
//         <section className="mb-8">
//           <h2 className="text-xl font-bold mb-4">Overview</h2>
//           <div className="grid grid-cols-3 gap-4">
//             <div className="p-4 bg-orange-100 rounded shadow">
//               <p className="text-lg font-bold">Total of hives</p>
//               <p className="text-2xl">25</p>
//             </div>
//             <div className="p-4 bg-orange-100 rounded shadow">
//               <p className="text-lg font-bold">UV Index</p>
//               <p className="text-2xl">3/10</p>
//             </div>
//             <div className="p-4 bg-orange-100 rounded shadow">
//               <p className="text-lg font-bold">Humidity</p>
//               <p className="text-2xl">35%</p>
//             </div>
//           </div>
//         </section>
//         <section className="grid grid-cols-2 gap-4">
//           <div className="p-4 bg-white rounded shadow">
//             <h2 className="text-xl font-bold mb-4">Weight</h2>
//             <img src="https://placehold.co/300x200" alt="Graph" />
//           </div>
//           <div className="p-4 bg-white rounded shadow">
//             <h2 className="text-xl font-bold mb-4">Weight</h2>
//             <img src="https://placehold.co/300x200" alt="Graph" />
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

export default App;
