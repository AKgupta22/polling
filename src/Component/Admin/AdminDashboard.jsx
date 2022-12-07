import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { pollRequest } from "../../Redux/Actions";
import GetLocalStorage from "../../services/GetLocalStorage";
import PollCard from "../Generic/PollCard";
import DialogForm from "../Generic/DialogForm";
import Loader from "../Generic/Loader";

export default function AdminDashboard() {
  const state = useSelector((state) => state.PollFetchReducer);
  const PollAddstate = useSelector((state) => state.PollAddReducer);
  const dispatch = useDispatch();
  const [role, setRole] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(pollRequest({ token: GetLocalStorage("token") }));
    setRole(GetLocalStorage("role"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [PollAddstate.isSuccess]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="container-fluid" style={{ minHeight: "100vh" }}>
      <h2 className="text-light mb-2 p-4 text-center">
        {role === "admin" ? "Admin" : "User"} Dashboard{" "}
        <span
          className="btn btn-sm btn-primary"
          onClick={() => handleClickOpen()}
        >
          <AddIcon />
        </span>
      </h2>
      <DialogForm open={open} handleClose={handleClose} />
      {state.isLoading ? <h4 className="text-center"><Loader /> </h4>: ""}
      <div className="row">
        {state.data?.map((item, i) => (
          <div key={i} className="col-8 m-auto mt-2 mb-2 my-card">
            <PollCard item={item} role={role} />
          </div>
        ))}
      </div>
    </div>
  );
}
