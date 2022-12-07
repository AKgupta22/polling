import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Component/Auth/Signup";
import "./asset/css/style.css";
import Login from "./Component/Auth/Login";
import UserDashboard from "./Component/User/UserDashboard";
import AdminDashboard from "./Component/Admin/AdminDashboard";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
