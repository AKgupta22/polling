import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pollRequest, pollReset ,pollDelReset} from "../../Redux/Actions";
import getLocalStorage from "../../services/getLocalStorage";
import PollCard from "../Generic/PollCard";
import Loader from "../Generic/Loader";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "../Generic/Pagination";
import Button from "../Generic/Button";

export default function AdminDashboard() {
  const state = useSelector((state) => state.pollFetchReducer);
  const statePollDel = useSelector((state) => state.PollDelReducer);
  const stateOptionDel = useSelector((state) => state.optionDelReducer);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(pollRequest({ token: getLocalStorage("token") }));
    setRole(getLocalStorage("role"));
    return () => {
      dispatch(pollReset());
      dispatch(pollDelReset());

    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statePollDel.isSuccess, stateOptionDel.isSuccess]);

  const Logout = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div className="container-fluid" style={{ minHeight: "100vh" }}>
      <h2 className="text-light mb-2 p-4 text-center">
        {role === "admin" ? "Admin" : "User"} Dashboard{" "}
      </h2>
      {role === "admin" && (
        <div className="w-100 text-center mb-2">
          <Link
            to="/admin-add-poll"
            className="btn btn-sm btn-success text-light text-center p-3"
            style={{ borderRadius: "1rem" }}
          >
            Add Poll
          </Link>
        </div>
      )}
      <div className="w-100 text-center mb-2">
        <Button handler={Logout}>Logout</Button>
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
