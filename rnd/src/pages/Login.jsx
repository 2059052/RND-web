import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/token",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      localStorage.setItem("accessToken", response.data.access_token);
      alert("Login successful!");
    } catch (error) {
      alert(error.response.data.detail);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-orange-200">
      <h1 className="text-3xl font-bold mb-6">Login Page</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            onChange={handleChange}
            name="username"
            type="text"
            placeholder="Enter your username"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            onChange={handleChange}
            name="password"
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
