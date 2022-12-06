import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { registrationRequest } from "../../Redux/Actions";
import Loader from "../Generic/Loader";

export default function Signup() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.UserReducer);

  const validationSchema = yup.object({
    username: yup.string("Enter your email").required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(6, "Password should be of minimum 6 characters length")
      .required("Password is required"),
    cpassword: yup
      .string("Enter your password")
      .min(6, "Password should be of minimum 6 characters length")
      .required("Password is required"),
  });

  const formHandler = useFormik({
    initialValues: {
      username: "",
      role: "Guest",
      password: "",
      cpassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (values.password === values.cpassword) {
        dispatch(registrationRequest(values));
      } else alert("Confirm password and Password mismatch");
    },
  });

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
            onSubmit={formHandler.handleSubmit}
          >
            <TextField
              id="outlined-username-input"
              label="UserName*"
              type="text"
              autoComplete="current-Username"
              placeholder="Enter Username"
              name="username"
              value={formHandler.values.username}
              onChange={formHandler.handleChange}
              error={
                formHandler.touched.username &&
                Boolean(formHandler.errors.username)
              }
              helperText={
                formHandler.touched.username && formHandler.errors.username
              }
            />

            <InputLabel id="demo-select-small">Role</InputLabel>
            <Select
              labelId="Role"
              id="Role"
              name="role"
              value={formHandler.values.role}
              onChange={formHandler.handleChange}
            >
              <MenuItem value="Guest">Guest</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </Select>

            <TextField
              id="outlined-password-input"
              label="Password*"
              type="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              name="password"
              value={formHandler.values.password}
              onChange={formHandler.handleChange}
              error={
                formHandler.touched.password &&
                Boolean(formHandler.errors.password)
              }
              helperText={
                formHandler.touched.password && formHandler.errors.password
              }
            />
            <TextField
              id="outlined-cpassword-input"
              label="Confirm Password *"
              type="password"
              autoComplete="current-cpassword"
              placeholder="Confirm Password"
              name="cpassword"
              value={formHandler.values.cpassword}
              onChange={formHandler.handleChange}
              error={
                formHandler.touched.cpassword &&
                Boolean(formHandler.errors.cpassword)
              }
              helperText={
                formHandler.touched.cpassword && formHandler.errors.cpassword
              }
            />
            <Button type="sumbit" variant="contained" className="background">
              {state.isLoading ? <Loader /> : "Signup"}
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
