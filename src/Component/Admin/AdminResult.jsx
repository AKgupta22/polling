import React from "react";
import AdminNav from "./AdminNav";
import EditIcon from "@mui/icons-material/Edit";

export default function AdminResult() {
  return (
    <div className="container-fluid mt-3">
      <h4 className="background text-light text-center p-2 heading m-auto mb-3">
        Result
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
                  <th scope="col">Option 1</th>
                  <th scope="col">Option 2</th>
                  <th scope="col">Option 3</th>
                  <th scope="col">Option 4</th>
                  <th>Set Result</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Market Risk</td>
                  <td>70 Votes</td>
                  <td>10 Votes</td>
                  <td>10 Votes</td>
                  <td>12 Votes</td>
                  <td>
                    <EditIcon />
                  </td>
                  <td>Not Declared Yet</td>
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
