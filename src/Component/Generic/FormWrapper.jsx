import React from "react";
import { Box } from "@mui/system";

export default function FormWrapper(props) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "100%" },
      }}
      autoComplete="off"
      onSubmit={props.handler}
      className="w-75 m-auto p-4"
    >
      {props.children}
    </Box>
  );
}

React.memo(FormWrapper)