import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registrationRequest } from "../../Redux/Actions";

export default function Signup() {
  const dispatch = useDispatch();
  let [register, setRegister] = useState({
    username: "",
    role: "Guest",
    password: "",
    cpassword: "",
  });

  const getData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setRegister((olddata) => {
      return {
        ...olddata,
        [name]: value,
      };
    });
  };

  const postData = (e) => {
    e.preventDefault();
    if (register.password === register.cpassword) {
      dispatch(registrationRequest(register));
    } else alert("Confirm password and Password mismatch");
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={2} xs={12}></Grid>
        <Grid item md={8} xs={12}>
          <h5 className="background text-light text-center p-2 m-auto mt-2 heading">
            SignUp
          </h5>

          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "98%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              onChange={getData}
              id="outlined-username-input"
              label="UserName*"
              type="text"
              autoComplete="current-Username"
              placeholder="Enter Username"
              name="username"
            />

            <InputLabel id="demo-select-small">Role</InputLabel>
            <Select
              labelId="Role"
              id="Role"
              onChange={getData}
              name="role"
              value={register.role}
            >
              <MenuItem value="Guest">Guest</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </Select>

            <TextField
              onChange={getData}
              id="outlined-password-input"
              label="Password*"
              type="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              name="password"
            />
            <TextField
              onChange={getData}
              id="outlined-cpassword-input"
              label="Confirm Password *"
              type="password"
              autoComplete="current-cpassword"
              placeholder="Confirm Password"
              name="cpassword"
            />
            <Button
              type="sumbit"
              variant="contained"
              className="background"
              onClick={postData}
            >
              Sign-up
            </Button>
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              Existing User? Login now
            </Link>
          </Box>
        </Grid>
        <Grid item md={2} xs={12}></Grid>
      </Grid>
    </>
  );
}
