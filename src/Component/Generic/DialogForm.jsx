import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { pollAddRequest, pollAddFalse } from "../../Redux/Actions";
import GetLocalStorage from "../../services/GetLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";

export default function DialogForm({ open, handleClose }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.PollAddReducer);
  const [data, setData] = useState({
    title: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  });

  useEffect(() => {
    if (state.isSuccess) {
      handleClose();
      setData({
        title: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
      });
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
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Poll</DialogTitle>
        <form onSubmit={handleForm}>
          <DialogContent>
            <TextField
              onChange={handleChange}
              autoFocus
              margin="dense"
              id="title"
              label="Poll Title"
              type="text"
              value={data.title}
              name="title"
              fullWidth
              variant="standard"
              required
            />
            <TextField
              onChange={handleChange}
              autoFocus
              margin="dense"
              id="option1"
              label="Option 1"
              type="text"
              value={data.option1}
              name="option1"
              fullWidth
              variant="standard"
              required
            />
            <TextField
              onChange={handleChange}
              autoFocus
              margin="dense"
              id="option2"
              label="Option 2"
              type="text"
              value={data.option2}
              name="option2"
              fullWidth
              variant="standard"
            />
            <TextField
              onChange={handleChange}
              autoFocus
              margin="dense"
              id="option3"
              label="Option 3"
              type="text"
              value={data.option3}
              name="option3"
              fullWidth
              variant="standard"
            />
            <TextField
              onChange={handleChange}
              autoFocus
              margin="dense"
              id="option4"
              label="Option 4"
              type="text"
              value={data.option4}
              name="option4"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">
              {state.isLoading ? <Loader /> : "Add"}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
