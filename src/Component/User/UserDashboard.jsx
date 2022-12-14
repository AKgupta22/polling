import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pollReset, voteRequest, voteReset } from "../../Redux/Actions";
import getLoacalStorage from "../../services/getLocalStorage";
import setLoacalStorage from "../../services/setLocalStorage";
import Loader from "../Generic/Loader";
import SnackbarAuto from "../Generic/SnackbarAuto";

export default function UserDashBoard(props) {
  const dispatch = useDispatch();
  const voteState = useSelector((state) => state.voteReducer);
  const [optionId, setOptionId] = useState("");
  const [option, setOption] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (voteState.isSuccess) {
      setLoacalStorage(optionId, true);
      setLoacalStorage(`${optionId}option`, option);
      setOpen(true);
      setOption("");
      setOptionId("");
      dispatch(voteReset());
      dispatch(pollReset());
    }
  }, [voteState.isSuccess]);

  const doVote = (id, text) => {
    setOption(text);
    setOptionId(id);
    dispatch(
      voteRequest({ id: id, text: text, token: getLoacalStorage("token") })
    );
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div style={{ margin: "inherit" }}>
        <SnackbarAuto open={open} handleClose={handleClose} type="success">
          Vote recorded successfully
        </SnackbarAuto>
        <div className="form-check text-center">
          <input
            className="form-check-input"
            type="radio"
            name={`${props.name}`}
            id={`exampleRadios${props.index + 1}`}
            value={`${props.name}`}
            onClick={() => doVote(props.item._id, props.name)}
            disabled={getLoacalStorage(props.item._id) ? true : false}
          />
        </div>
        {voteState.isLoading &&
        optionId === props.item._id &&
        option === props.name ? (
            <Loader />
          ) : (
            ""
          )}
      </div>
    </>
  );
}
