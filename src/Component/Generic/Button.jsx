import React from "react";

export default function Button({ component, isDisabled, handler }) {
  return (
    <button
      onClick={handler}
      className="btn background text-light text-center mx-1"
      disabled={isDisabled}
    >
      {component}
    </button>
  );
}
