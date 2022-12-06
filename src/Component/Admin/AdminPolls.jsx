import React from "react";
import AdminNav from "./AdminNav";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

export default function AdminPolls() {
  return (
    <div className="container-fluid mt-3">
      <h4 className="background text-light text-center p-2 heading m-auto mb-3">
        Polls
        <Link to='/admin-add-polls' className="text-light text-center mx-2">
          <AddIcon />
        </Link>
      </h4>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-md-3 col-10">
          <AdminNav />
        </div>
        <div className="col-md-7 col-12">
          <div className="table-responsive">
            <table className="table mt-4">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Poll Titile</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Market Risk</td>
                  <td>
                    <EditIcon />
                  </td>
                  <td>
                    <DeleteIcon />
                  </td>
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
