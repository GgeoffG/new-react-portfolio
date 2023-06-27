import React from "react";
import { func, string, arrayOf, shape } from "prop-types";
import "./navBar.css";
const NavBar = ({ direction, ...props }) => (
  <nav
    className={[
      "navbar",
      `navbar--${props.location}`,
      `navbar--${direction}`,
    ].join(" ")}
  >
    {console.log(props.location)}
    {props.items.map((item) => (
      <a href={item.url}>{item.title}</a>
    ))}
  </nav>
);

NavBar.propTypes = {
  // direction will be a required input for the display of the navigation bar
  direction: string.isRequired,
  //items will be an array of links containing a title and url
  items: arrayOf(
    shape({
      title: string.isRequired,
      url: string.isRequired,
    })
  ),
  location: string,
};

NavBar.defaultProps = {
  direction: "horizontal",
  items: [],
  location: "nav-header",
};

export default NavBar;
