import React from "react";
import { Link } from "react-router-dom";

export default function AdminNav() {
  return (
    <div className="container-fluid">
      <h4 className="background text-light text-center p-2 heading m-auto mb-3">
        Admin Menu
      </h4>
      <ul className="list-group">
        <Link to="/admin-dashboard" className="list-group-item text-center p-3">
          Home
        </Link>
        <Link to="/admin-users" className="list-group-item text-center p-3">
          Users
        </Link>
        <Link to="/admin-polls" className="list-group-item text-center p-3">
          Polls
        </Link>
        <Link to="/admin-result" className="list-group-item text-center p-3">
          Result
        </Link>
      </ul>
    </div>
  );
}
