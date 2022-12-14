import React, { useEffect, useState } from "react";
import Button from "./Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import {
  pollDelRequest,
  optionDelRequest,
  optionDelReset,
  pollReset,
  pollDelReset,
} from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import getLocalStorage from "../../services/getLocalStorage";
import Loader from "./Loader";
import UserDashBoard from "../User/UserDashboard";
import LinkButton from "../Generic/LinkButton";
import SnackbarAuto from "./SnackbarAuto";

export default function PollCard({ item, role }) {
  const dispatch = useDispatch();
  const statePollList = useSelector((state) => state.pollFetchReducer);
  const optionDelstate = useSelector((state) => state.optionDelReducer);
  const pollDelState = useSelector((state) => state.PollDelReducer);
  const [delid, setDelid] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (optionDelstate.isLoading) setOpen(true);
    if (optionDelstate.isSuccess) {
      dispatch(optionDelReset());
      dispatch(pollReset());
    }
  }, [optionDelstate.isSuccess]);

  useEffect(() => {
    if (pollDelState.isSuccess) {
      dispatch(pollDelReset());
      dispatch(pollReset());
    }
  }, [pollDelState.isSuccess]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const deletePoll = (id) => {
    setDelid(id);
    dispatch(
      pollDelRequest({
        token: getLocalStorage("token"),
        id: id,
      })
    );
  };

  const deleteOption = (id, text, length) => {
    if (length <= 1) deletePoll(id);
    else {
      setOpen(true);
      dispatch(
        optionDelRequest({
          token: getLocalStorage("token"),
          id: id,
          text: text,
        })
      );
    }
  };

  return (
    <div className="row poll-card">
      {optionDelstate.isLoading && (
        <SnackbarAuto type="success" open={open} handleClose={handleClose}>
          Deleting....
        </SnackbarAuto>
      )}

      {optionDelstate.isError && (
        <SnackbarAuto type="error" open={open} handleClose={handleClose}>
          Techincal error
        </SnackbarAuto>
      )}

      <div className="col-12">
        <div className="d-flex justify-content-evenly">
          <h2 className="text-success p-2 w-75 m-auto">
            Poll{" "}
            {statePollList.data.findIndex(
              (element) => element._id === item._id
            ) + 1}{" "}
            : {item.title}
          </h2>
          {role === "admin" && (
            <div className="btn-container d-flex justify-content-center p-2" style={{width:"21%"}}>
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
          )}
        </div>
        {item.options?.map((option, i) => (
          <div key={i} className="d-flex justify-content-evenly mt-2 mb-2">
            <h5 className="p-1 w-75">
              Option {i + 1} : {option.option}
            </h5>
            {role === "admin" && <h5 className="p-1">Vote : {option.vote}</h5>}
            {role === "admin" && (
              <Button
                handler={() =>
                  deleteOption(item._id, option.option, item.options.length)
                }
              >
                <DeleteIcon />
              </Button>
            )}
            {role === "Guest" && (
              <UserDashBoard item={item} name={option.option} index={i} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
React.memo(PollCard);
