import { Navigate } from "react-router-dom";
import getlocalStorage from "../services/getLocalStorage";

export default function DashbaordRoute(props) {
  const token = getlocalStorage("token");
  if (token) return { ...props.children };
  else return Navigate({ to: "/" });
}
