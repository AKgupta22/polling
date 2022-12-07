import React from "react";

export default function Button({component,text}) {
  return (
    <button className="btn background text-light text-center mt-2">
      {component} {text}
    </button>
  );
}
