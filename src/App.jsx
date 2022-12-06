import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Component/Auth/Signup";
import "./asset/css/style.css";
import Login from "./Component/Auth/Login";
import AdminDashboard from "./Component/Admin/AdminDashboard";
import AdminUsers from "./Component/Admin/AdminUsers";
import AdminPolls from "./Component/Admin/AdminPolls";
import AdminResult from "./Component/Admin/AdminResult";
import Polls from "./Component/User/Polls";
import PollsResult from "./Component/User/PollsResult";
import AdminAddPoll from "./Component/Admin/AdminAddPoll";
import AdminPrivateRoute from "./Component/PrivateRoute/AdminPrivateRoute";
import NormalPrivateRoute from "./Component/PrivateRoute/NormalPrivateRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin-dashboard"
          element={<AdminPrivateRoute element={<AdminDashboard />} />}
        />
        <Route
          path="/admin-users"
          element={<AdminPrivateRoute element={<AdminUsers />} />}
        />
        <Route
          path="/admin-polls"
          element={<AdminPrivateRoute element={<AdminPolls />} />}
        />
        <Route
          path="/admin-add-polls"
          element={<AdminPrivateRoute element={<AdminAddPoll />} />}
        />
        <Route
          path="/admin-result"
          element={<AdminPrivateRoute element={<AdminResult />} />}
        />
        <Route
          path="/user-dashboard"
          element={<NormalPrivateRoute element={<Polls />} />}
        />
        <Route
          path="/user-poll-results"
          element={<NormalPrivateRoute element={<PollsResult />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
