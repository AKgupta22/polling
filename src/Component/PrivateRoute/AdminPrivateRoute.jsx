import React from "react";
import { Navigate } from "react-router-dom";

export default function AdminPrivateRoute({ element }) {
  const login = localStorage.getItem("login");
  const role = localStorage.getItem("role");
  if (login && role === "admin") return element;
  else return <Navigate to="/" />;
}
