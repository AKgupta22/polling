import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  singlePollRequest,
  pollEditRequest,
  pollEditReset,
} from "../../Redux/Actions";
import getLocalStorage from "../../services/getLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Generic/Loader";
import Snackbar from "../Generic/Snackbar";
import { useNavigate, useParams } from "react-router-dom";
import Wrapper from "../Generic/Wrapper";

export default function AdminEditPoll() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.SinglePollReducer);
  const editState = useSelector((state) => state.PollEditReducer);
  const pollListState = useSelector((state) => state.pollFetchReducer);
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const { q } = useParams();

  useEffect(() => {
    if (pollListState.data.length > 0) {
      const poll = pollListState.data.filter((item) => item._id === q);
      setData(poll[0].title);
    } else
      dispatch(singlePollRequest({ id: q, token: getLocalStorage("token") }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q]);

  useEffect(() => {
    if (pollListState.data.length === 0) setData(state.data.title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.data]);

  useEffect(() => {
    if (editState.isSuccess) {
      navigate("/admin-dashboard");
    }
    return () => {
      dispatch(pollEditReset());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editState.isSuccess]);

  const handleForm = (e) => {
    e.preventDefault();
    dispatch(
      pollEditRequest({
        id: q,
        newTitle: data,
        token: getLocalStorage("token"),
      })
    );
  };

  return (
    <Wrapper>
      <Grid
        item
        lg={4}
        md={6}
        sm={8}
        xs={10}
        style={{ background: "white", padding: 0, borderRadius: "12px" }}
      >
        <h3 className="text-dark text-center mt-2">Edit Poll</h3>
        {state.isLoading && (
          <h4 className="text-center">
            <Loader />
          </h4>
        )}
        {editState.isSuccess ? (
          <Snackbar type="success" message="succesful! Redirecting....." />
        ) : (
          ""
        )}
        {state.isError ? <Snackbar type="error" message={"Some Error"} /> : ""}
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleForm}
          className="w-75 m-auto p-4"
        >
          <TextField
            onChange={(e) => setData(e.target.value)}
            id="outlined-title-input"
            label="Poll Title"
            type="text"
            autoComplete="poll-title"
            placeholder="Enter Poll Title"
            name="title"
            value={data === undefined ? "" : data}
            required
          />

          <Button type="sumbit" variant="contained" className="custom-btn">
            {editState.isLoading ? <Loader /> : "EDIT"}
          </Button>
          {editState.isError ? (
            <Snackbar type="error" message={state.data.data} />
          ) : (
            ""
          )}
        </Box>
      </Grid>
    </Wrapper>
  );
}
