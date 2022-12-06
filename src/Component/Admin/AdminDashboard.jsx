import React from "react";
import AdminNav from "./AdminNav";

export default function AdminDashboard() {
  return (
    <div className="container-fluid mt-3">
      <h4 className="background text-light text-center p-3 heading m-auto mb-3">
        Admin Dashboard
      </h4>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-md-3 col-10">
          <AdminNav />
        </div>
        <div className="col-md-7 col-12">
          <table className="table mt-4">
            <tbody>
              <tr>
                <th>Username</th>
                <td>admin</td>
              </tr>
              <tr>
                <th>Password</th>
                <td>admin</td>
              </tr>
              <tr>
                <th>Total Polls</th>
                <td>10</td>
              </tr>
              <tr>
                <th>Total Results</th>
                <td>8</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}
