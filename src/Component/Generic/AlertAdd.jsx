import React from "react";

export default function AlertAdd({ text ,handler }) {
  return (
    <div
      className="alert alert-danger alert-dismissible fade show mt-2"
      role="alert"
    >
      {text}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={handler}
      ></button>
    </div>
  )
}
React.memo(AlertAdd)
