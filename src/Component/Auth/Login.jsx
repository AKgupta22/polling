import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest ,loginFalse} from "../../Redux/Actions";
import Loader from "../Generic/Loader";
import Snackbar from "../Generic/Snackbar";
import setlocalStorage from "../../services/SetLocalStorage";

export default function Login() {
  const dispatch = useDispatch();
  const stateSignup = useSelector((state) => state.UserReducer);
  const stateLogin = useSelector((state) => state.LoginReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (stateLogin.isSuccess) {
      setlocalStorage(
        stateLogin.data.token,
        stateLogin.data.decoded.username,
        stateLogin.data.decoded.role,
        stateLogin.data.decoded._id
      );
      if (stateLogin.data.decoded.role === "admin")
        navigate("/admin-dashboard");
      else navigate("/user-dashboard");
    }

  }, [stateLogin.isSuccess]);

  useEffect(() => {
    if (stateSignup.isSuccess) {
      dispatch(
        loginRequest({
          username: stateSignup.data.data.username,
          password: stateSignup.data.data.password,
        })
      );
    }
    return()=>{
      dispatch(loginFalse())
    }
  }, [stateSignup.isSuccess]);

  const validationSchema = yup.object({
    username: yup
      .string("Enter your username")
      .required("username is required"),
    password: yup
      .string("Enter your password")
      .min(6, "Password should be of minimum 6 characters length")
      .required("Password is required"),
  });

  const formHandler = useFormik({
    initialValues: {
      username: stateSignup.isSuccess ? stateSignup.data.data.username : "",
      password: stateSignup.isSuccess ? stateSignup.data.data.password : "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(loginRequest(values));
    },
  });

  return (
    <>
      <Grid container spacing={2} className="flex-form">
        <Grid item md={3} xs={2}></Grid>
        <Grid
          item
          md={6}
          xs={8}
          style={{ background: "white", padding: 0, borderRadius: "12px" }}
        >
          <h3 className="text-dark text-center mt-2">Login</h3>
          {stateLogin.isSuccess ? (
            <Snackbar
              type="success"
              message="Login succesful! Redirecting....."
            />
          ) : (
            ""
          )}
          {stateLogin.isError ? (
            <Snackbar type="error" message={`${stateLogin.data?.data}`} />
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
            onSubmit={formHandler.handleSubmit}
            className="w-75 m-auto p-4"
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
            <Button type="sumbit" variant="contained" className="custom-btn">
              {stateLogin.isLoading ? <Loader /> : "Login"}
            </Button>
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              New User? Register Now
            </Link>
          </Box>
        </Grid>
        <Grid item md={3} xs={2}></Grid>
      </Grid>
    </>
  );
}
