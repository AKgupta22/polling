import React from "react";

export default function Button(props) {
  return (
    <button className="btn background text-light text-center mx-1" onClick={props.handler}>
      {props.children}
    </button>
  );
}
