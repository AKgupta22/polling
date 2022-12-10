import React, { useState } from "react";
import Button from "./Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { pollDelRequest } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import getLocalStorage from "../../services/getLocalStorage";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import UserDashBoard from "../User/UserDashboard";

export default function PollCard({ item, role }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.PollDelReducer);
  const [delid, setDelid] = useState("");

  const deletePoll = (id) => {
    setDelid(id);
    dispatch(
      pollDelRequest({
        token: getLocalStorage("token"),
        id: id,
      })
    );
  };

  return (
    <div className="row poll-card">
      <div className="col-md-6 col-12">
        <h2 className="text-success text-center p-2">
          Poll Title : {item.title}
        </h2>
        {item.options?.map((option, i) => (
          <h5 key={i} className="text-center p-2">
            Option {i + 1} : {option.option}
          </h5>
        ))}
      </div>
      {role === "admin" ? (
        <div className="col-md-6 col-12">
          <div className="btn-container d-flex justify-content-center p-2">
            <Button handler={() => deletePoll(item._id)}>
              {state.isLoading && delid === item._id ? (
                <Loader />
              ) : (
                <DeleteIcon />
              )}
            </Button>
            <Link
              className="btn background text-light text-center mx-1"
              to={`/admin-edit-poll/${item._id}`}
            >
              <EditIcon />
            </Link>
          </div>
          {item.options?.map((option, i) => (
            <h5 key={i} className="text-center p-2">
              Vote : {option.vote}
            </h5>
          ))}
        </div>
      ) : (
        <div className="col-md-6 col-12">
          <UserDashBoard item={item} />
        </div>
      )}
    </div>
  );
}
React.memo(PollCard);
