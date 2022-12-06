import React from "react";

export default function PollsResult() {
  return (
    <div className="container-fluid">
      <h3 className="text-success text-center p-2 mt-2">Result of All Polls</h3>
      <div class="table-responsive">
        <table className="table mt-4">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Poll Titile</th>
              <th scope="col">Option 1 Vote</th>
              <th scope="col">Option 2 Vote</th>
              <th scope="col">Option 3 Vote</th>
              <th scope="col">Option 4 Vote</th>
              <th scope="col">Winner</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Market Risk</td>
              <td>70%</td>
              <td>10%</td>
              <td>10%</td>
              <td>10%</td>
              <td>Option 1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
