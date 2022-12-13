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
import SnackbarAuto from "./SnackbarAuto";

export default function PollCard({ item, role }) {
  const dispatch = useDispatch();
  const optionDelstate = useSelector((state) => state.optionDelReducer);
  const pollDelState = useSelector((state) => state.PollDelReducer);
  const [delid, setDelid] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (optionDelstate.isLoading) setOpen(true);
    if (optionDelstate.isSuccess) dispatch(optionDelReset());
  }, [optionDelstate.isSuccess]);

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

  const deleteOption = (id, text) => {
    setOpen(true);
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
        <h2 className="text-success text-center p-2 w-50 m-auto">
          Poll Title : {item.title}
        </h2>
        {role === "admin" && (
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
        )}
        {item.options?.map((option, i) => (
          <div key={i} className="d-flex justify-content-evenly mt-2 mb-2">
            <h5 className="p-1 w-25">
              Option {i + 1} : {option.option}
            </h5>
            {role === "admin" && <h5 className="p-1">Vote : {option.vote}</h5>}
            {role === "admin" && item.options.length > 1 && (
              <Button handler={() => deleteOption(item._id, option.option)}>
                <DeleteIcon />
              </Button>
            )}
            {role === "Guest" && !getLocalStorage(item._id) && (
              <UserDashBoard item={item} name={option.option} index={i} />
            )}
            {role === "Guest" && getLocalStorage(item._id) && (
              <h5 className="p-1">Vote : {option.vote}</h5>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
React.memo(PollCard);
