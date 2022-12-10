import { Navigate } from "react-router-dom";
import getlocalStorage from "../services/getLocalStorage";

export default function AdminRoute(props) {
  const token = getlocalStorage("token");
  const role = getlocalStorage("role");
  if (token && role === "admin") return { ...props.children };
  else return Navigate({ to: "/dashboard" });
}
