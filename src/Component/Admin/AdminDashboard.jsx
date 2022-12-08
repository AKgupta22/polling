import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pollRequest } from "../../Redux/Actions";
import GetLocalStorage from "../../services/GetLocalStorage";
import PollCard from "../Generic/PollCard";
import Loader from "../Generic/Loader";
import { Link } from "react-router-dom";
import Pagination from "../Generic/Pagination";

export default function AdminDashboard() {
  const state = useSelector((state) => state.PollFetchReducer);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const [role, setRole] = useState("");

  useEffect(() => {
    dispatch(pollRequest({ token: GetLocalStorage("token") }));
    setRole(GetLocalStorage("role"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container-fluid" style={{ minHeight: "100vh" }}>
      <h2 className="text-light mb-2 p-4 text-center">
        {role === "admin" ? "Admin" : "User"} Dashboard{" "}
      </h2>
      <div className="w-100 text-center mb-2">
        <Link
          to="/admin-add-poll"
          className="btn btn-sm btn-primary text-light text-center"
        >
          Add Poll
        </Link>
      </div>
      {state.isLoading ? (
        <h4 className="text-center">
          <Loader />{" "}
        </h4>
      ) : (
        ""
      )}
      <div className="row">
        {data?.map((item, i) => (
          <div key={i} className="col-8 m-auto mt-2 mb-2 my-card">
            <PollCard item={item} role={role} />
          </div>
        ))}
      </div>
      <Pagination data={data} setData={setData} />
    </div>
  );
}
