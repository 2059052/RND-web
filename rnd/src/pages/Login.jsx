import React from "react";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-orange-200">
      <h1 className="text-3xl font-bold mb-6">Login Page</h1>
      <form className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="flex flex-col gap-3">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>

          <button
            type="submit"
            className="w-full bg-blue-300 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
