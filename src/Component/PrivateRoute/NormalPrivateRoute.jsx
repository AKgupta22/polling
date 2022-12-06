import React from "react";
import { Navigate } from "react-router-dom";

export default function NormalPrivateRoute({ element }) {
  const login = localStorage.getItem("login");
  if (login === "true") return element;
  else return <Navigate to="/" />;
}
