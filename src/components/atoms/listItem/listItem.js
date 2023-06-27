import React from "react";
import { string } from "prop-types";
import "bootstrap/dist/css/bootstrap.css";
import "./listItem.css";

const ListItem = ({ innerText }, ...props) => {
  return <li>{innerText}</li>;
};

ListItem.propTypes = {
  innerText: string,
};

ListItem.defaultProps = {
  innerText: " ",
};

export default ListItem;
