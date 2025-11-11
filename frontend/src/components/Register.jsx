
import React, { useState } from "react";
import API from "../api";

const Register = ({ setPage }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Optional check
    // if (form.password !== form.confirmPassword) {
    //   alert("Passwords do not match");
    //   return;
    // }

    try {
      const res = await API.post("/auth/register", {
        name: form.name,
        email: form.email,
        password: form.password,
      });

      console.log("Register response:", res.data);
      alert(res.data.message || "✅ Registration successful!");
      setPage("login");
    } catch (err) {
      console.error("Register error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "❌ Registration failed!");
    }
  };

  return (
    <div>
      <div className="p-4 max-w-md mx-auto border rounded-lg shadow-lg mt-4">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            className="border p-2 rounded"
            type="text"
            placeholder="Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            className="border p-2 rounded"
            type="text"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            className="border p-2 rounded"
            type="password"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
