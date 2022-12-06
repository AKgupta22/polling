import React from "react";

export default function ButtonCommon({ text, handler }) {
  return (
    <button
      className="btn btn-sm background w-25 m-auto text-light text-center"
      onClick={handler}
    >
      {text}
    </button>
  );
}
