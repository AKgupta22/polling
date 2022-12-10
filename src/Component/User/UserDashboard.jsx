import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Generic/Loader";
import { voteRequest, voteReset } from "../../Redux/Actions";
import getLoacalStorage from "../../services/getLocalStorage";
import setLoacalStorage from "../../services/setLocalStorage";

export default function UserDashBoard({ item }) {
  const voteState = useSelector((state) => state.voteReducer);
  const [voteId, setVoteId] = useState("");
  const dispatch = useDispatch();
  const depedency = localStorage;

  useEffect(() => {
    return () => {
      dispatch(voteReset());
    };
  }, [depedency]);

  const doVote = (id, text) => {
    setVoteId(id);
    dispatch(
      voteRequest({ id: id, text: text, token: getLoacalStorage("token") })
    );
    setLoacalStorage(id, true);
    setLoacalStorage(`${id}option`, text);
  };
  return (
    <>
      <h2 className="text-success text-center p-2">
        {getLoacalStorage(`${item._id}option`)
          ? `You voted for ${getLoacalStorage(`${item._id}option`)} `
          : "Vote Here"}
      </h2>
      <div className="radio-option">
        <h4 className="text-center">
          {voteState.isLoading && voteId === item._id ? <Loader /> : ""}
        </h4>
        {item.options?.map((poll, i) => (
          <div key={i} className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name={`${poll.option}`}
              id={`exampleRadios${i + 1}`}
              value={`${poll.option}`}
              onChange={() => doVote(item._id, poll.option)}
              disabled={getLoacalStorage(item._id) ? true : false}
            />
            <label
              className="form-check-label"
              htmlFor={`exampleRadios${i + 1}`}
            >
              {poll.option}
            </label>
          </div>
        ))}
      </div>
    </>
  );
}
