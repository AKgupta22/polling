import React, { useEffect, useState } from "react";
import VoteBox from "../Generic/VoteBox";

export default function Polls() {
  const dependency = localStorage.getItem("login");
  const [name, setName] = useState();
  useEffect(() => {
    setName(localStorage.getItem("username"));
  }, [dependency]);
  return (
    <div className="container-fluid mt-2">
      <h6 className="text-light text-center background p-2 ">
        Hello {name} ! Current Running poll
      </h6>
      <div className="row">
        <div className="col-md-3 col-12 mt-2 mx-1">
          <VoteBox />
        </div>
      </div>
    </div>
  );
}
