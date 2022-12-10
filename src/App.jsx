import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Component/Auth/Signup";
import "./asset/css/style.css";
import Login from "./Component/Auth/Login";
import AdminDashboard from "./Component/Admin/AdminDashboard";
import AdminAddPoll from "./Component/Admin/AdminAddPoll";
import AdminEditPoll from "./Component/Admin/AdminEditPoll";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/admin-add-poll" element={<AdminAddPoll />} />
        <Route path="/admin-edit-poll/:id" element={<AdminEditPoll />} />
      </Routes>
    </BrowserRouter>
  );
}
