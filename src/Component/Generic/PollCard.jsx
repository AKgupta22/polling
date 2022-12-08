import React  from "react";
import Button from "./Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function PollCard({ item, role }) {
  return (
    <div className="row">
      <div className="col-md-6 col-12">
        <h2 className="text-success text-center p-2">
          Poll Title : {item.title}
        </h2>
        {item.options?.map((option, i) => (
            <h5 key={i} className="text-center p-2">
              Option {i + 1} : {option.option}
            </h5>
        ))}
      </div>
      {role === "admin" ? (
        <div className="col-md-6 col-12">
          <div className="btn-container d-flex justify-content-center p-2">
            <Button component={<AddIcon />}/>
            <Button component={<DeleteIcon />} />
            <Button component={<EditIcon />}/>
          </div>
          {item.options?.map((option, i) => (
            <h5 key={i} className="text-center p-2">Vote : {option.vote}</h5>
        ))}
        </div>
      ) : (
        <div className="col-md-6 col-12">user right</div>
      )}
    </div>
  );
}
