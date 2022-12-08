import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { pollAddRequest, pollAddFalse } from "../../Redux/Actions";
import GetLocalStorage from "../../services/GetLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Generic/Loader";
import Snackbar from "../Generic/Snackbar";
import InputField from "../Generic/InputField";
import { useNavigate } from "react-router-dom";

export default function AdminAddPoll() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.PollAddReducer);
  const [fields, setFields] = useState([]);
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    option1: "",
  });

  useEffect(() => {
    if (state.isSuccess) {
      setData({
        title: "",
        option1: "",
      });
      navigate("/admin-dashboard");
    }
    return () => {
      dispatch(pollAddFalse());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isSuccess]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    dispatch(pollAddRequest({ data: data, token: GetLocalStorage("token") }));
  };

  const AddOption = () => {
    if (fields.length < 3) {
      let tempData = { ...data, [`option${fields.length + 2}`]: "" };
      setData({ ...tempData });
      setFields([
        ...fields,
        <InputField
          key={fields.length + 2}
          handleChange={handleChange}
          number={fields.length + 2}
          data={tempData}
        />,
      ]);
    }
  };
  return (
    <>
      <Grid container spacing={2} className="flex-form">
        <Grid item lg={4} md={3} sm={2} xs={1}></Grid>
        <Grid
          item
          lg={4}
          md={6}
          sm={8}
          xs={10}
          style={{ background: "white", padding: 0, borderRadius: "12px" }}
        >
          <h3 className="text-dark text-center mt-2">Add Poll</h3>
          {state.isSuccess ? (
            <Snackbar type="success" message="succesful! Redirecting....." />
          ) : (
            ""
          )}
          {state.isError ? (
            <Snackbar type="error" message={"Some Error"} />
          ) : (
            ""
          )}
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
              onChange={handleChange}
              id="outlined-title-input"
              label="Poll Title"
              type="text"
              autoComplete="poll-title"
              placeholder="Enter Poll Title"
              name="title"
              value={data.title}
              required
            />
            <InputField handleChange={handleChange} number={1} data={data} />
            {fields.map((item) => item)}
            <Button
              variant="contained"
              className="custom-btn"
              onClick={AddOption}
            >
              ADD MORE OPTION
            </Button>
            <Button type="sumbit" variant="contained" className="custom-btn">
              {state.isLoading ? <Loader /> : "SUBMIT"}
            </Button>
          </Box>
        </Grid>
        <Grid item lg={4} md={3} sm={2} xs={1}></Grid>
      </Grid>
    </>
  );
}
