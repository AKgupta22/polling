import React, { useState } from "react";

export default function AdminAddPoll() {
  const [formdata, setFormdata] = useState({
    title: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  });

  const getData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormdata((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  };

  const postData = (e) => {
    e.preventDefault();
    console.log(formdata);
    setFormdata({
      title: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
    });
  };

  return (
    <div className="container mt-3">
      <h5 className="text-success text-center mb-2">Add New Poll</h5>
      <form onSubmit={postData}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            Poll Title
          </span>
          <input
            value={formdata.title}
            type="text"
            className="form-control"
            id="title"
            aria-describedby="basic-addon3"
            name="title"
            required
            onChange={getData}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            Option 1
          </span>
          <input
            value={formdata.option1}
            type="text"
            className="form-control"
            id="option1"
            aria-describedby="basic-addon3"
            name="option1"
            required
            onChange={getData}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            Option 2
          </span>
          <input
            value={formdata.option2}
            type="text"
            className="form-control"
            id="option2"
            aria-describedby="basic-addon3"
            name="option2"
            required
            onChange={getData}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            option 3
          </span>
          <input
            value={formdata.option3}
            type="text"
            className="form-control"
            id="option3"
            aria-describedby="basic-addon3"
            name="option3"
            required
            onChange={getData}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            Option 4
          </span>
          <input
            value={formdata.option4}
            type="text"
            className="form-control"
            id="option4"
            aria-describedby="basic-addon3"
            name="option4"
            required
            onChange={getData}
          />
        </div>
        <button
          type="submit"
          className="text-light text-center btn btn-sm background mt-2 w-25"
        >
          Add
        </button>
      </form>
    </div>
  );
}
