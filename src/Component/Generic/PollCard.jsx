import React, { useEffect, useState } from "react";
import Button from "./Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import {
  pollDelRequest,
  optionDelRequest,
  optionDelReset,
} from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import getLocalStorage from "../../services/getLocalStorage";
import Loader from "./Loader";
import UserDashBoard from "../User/UserDashboard";
import LinkButton from "../Generic/LinkButton";

export default function PollCard({ item, role }) {
  const dispatch = useDispatch();
  const optionDelstate = useSelector((state) => state.optionDelReducer);
  const pollDelState = useSelector((state) => state.PollDelReducer);
  const [delid, setDelid] = useState("");

  useEffect(() => {
    if (optionDelstate.isSuccess)
      return () => {
        dispatch(optionDelReset());
      };
  }, [optionDelstate.isSuccess]);

  const deletePoll = (id) => {
    setDelid(id);
    dispatch(
      pollDelRequest({
        token: getLocalStorage("token"),
        id: id,
      })
    );
  };

  const deleteOption = (id, text) => {
    dispatch(
      optionDelRequest({
        token: getLocalStorage("token"),
        id: id,
        text: text,
      })
    );
  };

  return (
    <div className="row poll-card">
      <div className="col-md-6 col-12">
        <h2 className="text-success text-center p-2 w-50 m-auto">
          Poll Title : {item.title}
        </h2>
        {item.options?.map((option, i) => (
          <div
            key={i}
            className="btn-container d-flex justify-content-center p-2"
          >
            <h5 key={i} className="text-center p-2 w-50">
              Option {i + 1} : {option.option}
            </h5>
            {role === "admin" && (
              <Button handler={() => deleteOption(item._id, option.option)}>
                <DeleteIcon />
              </Button>
            )}
          </div>
        ))}
      </div>
      {role === "admin" ? (
        <div className="col-md-6 col-12">
          <div className="btn-container d-flex justify-content-center p-2">
            <Button handler={() => deletePoll(item._id)}>
              {pollDelState.isLoading && delid === item._id ? (
                <Loader />
              ) : (
                <DeleteIcon />
              )}
            </Button>
            <LinkButton to={`/admin-edit-poll/${item._id}`}>
              <EditIcon />
            </LinkButton>

            {item.options.length < 4 && (
              <LinkButton to={`/admin-add-option/${item._id}`}>
                <AddIcon />
              </LinkButton>
            )}
          </div>
          <div className="vote">
            {item.options?.map((option, i) => (
              <h5 key={i} className="text-center p-3">
                Vote : {option.vote}
              </h5>
            ))}
          </div>
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
