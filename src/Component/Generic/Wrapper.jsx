import React from "react";
import { Grid } from "@mui/material";
export default function Wrapper(props) {
  return (
    <Grid container spacing={2} className="flex-form">
      <Grid item lg={4} md={3} sm={2} xs={1}></Grid>
      {props.children}
      <Grid item lg={4} md={3} sm={2} xs={1}></Grid>
    </Grid>
  );
}
