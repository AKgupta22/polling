import React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackbarAuto(props) {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={props.open}
        autoHideDuration={3000}
        onClose={props.handleClose}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <Alert
          onClose={props.handleClose}
          severity={`${props.type}`}
          sx={{ width: "100%" }}
        >
          {props.children}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

React.memo(SnackbarAuto);
