import React  from "react";
import Button from "./Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function PollCard({ item, role }) {
  return (
    <div className="row">
      <div className="col-8">
        <h2 className="text-success text-center p-2">
          Poll Title : {item.title}
        </h2>
        {item.options?.map((option, i) => (
          <div key={i} className="d-flex justify-content-evenly">
            <h5 className="text-center p-2">
              Option {i + 1} : {option.option}
            </h5>
            <h5 className="text-center p-2">Total Vote : {option.vote}</h5>
          </div>
        ))}
      </div>
      {role === "admin" ? (
        <div className="col-4">
          <div className="btn-container h-100 d-flex justify-content-evenly flex-column">
            <Button component={<AddIcon />} text="Options" />
            <Button component={<DeleteIcon />} />
            <Button component={<EditIcon />} text="Title" />
          </div>
        </div>
      ) : (
        <div className="col-4">user right</div>
      )}
    </div>
  );
}
