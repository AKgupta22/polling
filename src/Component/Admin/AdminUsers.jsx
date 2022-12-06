import React from "react";
import AdminNav from "./AdminNav";

export default function AdminUsers() {
  return (
    <div className="container-fluid mt-3">
      <h4 className="background text-light text-center p-2 heading m-auto mb-3">
        Users
      </h4>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-md-3 col-10">
          <AdminNav />
        </div>
        <div className="col-md-7 col-12">
          <div class="table-responsive">
            <table className="table mt-4">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Username</th>
                  <th scope="col">Password</th>
                  <th scope="col">Role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>admin</td>
                  <td>admin</td>
                  <td>admin</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}
