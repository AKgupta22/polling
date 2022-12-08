import React from "react";

export default function Button({component}) {
  return (
    <button className="btn background text-light text-center mx-1">
      {component}
    </button>
  );
}
