import React from "react";
import { Link } from "react-router-dom";

const LinkButton = (props) => (
  <Link className="btn background text-light text-center mx-1" to={props.to} style={{height:"min-content"}}>
    {props.children}
  </Link>
);

export default LinkButton;
