import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { voteRequest, voteReset } from "../../Redux/Actions";
import getLoacalStorage from "../../services/getLocalStorage";
import setLoacalStorage from "../../services/setLocalStorage";
import Loader from "../Generic/Loader";

export default function UserDashBoard(props) {
  const dispatch = useDispatch();
  const voteState = useSelector((state) => state.voteReducer);
  const [optionId, setOptionId] = useState("");
  const [option, setOption] = useState("");

  useEffect(() => {
    if (voteState.isSuccess) {
      setLoacalStorage(optionId, true);
      setLoacalStorage(`${optionId}option`, option);
      return () => {
        dispatch(voteReset());
      };
    }
  }, [voteState.isSuccess]);

  const doVote = (id, text) => {
    setOption(text);
    setOptionId(id);
    dispatch(
      voteRequest({ id: id, text: text, token: getLoacalStorage("token") })
    );
  };

  return (
    <>
      <div>
        <div className="form-check">
          <input
            style={{
              border: "2px solid black",
              opacity: 1,
              background:"white"
            }}
            className="form-check-input"
            type="radio"
            name={`${props.name}`}
            id={`exampleRadios${props.index + 1}`}
            value={`${props.name}`}
            onClick={() => doVote(props.item._id, props.name)}
            disabled={getLoacalStorage(props.item._id) ? true : false}
          />
          {voteState.isLoading &&
          optionId === props.item._id &&
          option === props.name ? (
              <Loader />
            ) : (
              ""
            )}
        </div>
      </div>
    </>
  );
}
