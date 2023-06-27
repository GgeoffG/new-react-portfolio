import React from "react";
import { string } from "prop-types";
import "bootstrap/dist/css/bootstrap.css";
import "./paragraph.css";

const Paragraph = ({ innerText }, ...props) => {
  return <p>{innerText}</p>;
};

Paragraph.propTypes = {
  innerText: string,
};

Paragraph.defaultProps = {
  innerText: " ",
};

export default Paragraph;
