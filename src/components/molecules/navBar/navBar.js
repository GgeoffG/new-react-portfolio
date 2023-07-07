import React, { useState } from "react";
import { func, string, arrayOf, shape } from "prop-types";
import "./navBar.css";
const NavBar = ({ direction, handleDisplayChange, display, ...props }) => {
  const [currentActive, setActive] = useState("Home");
  const handleClick = (url, title) => {
    display(url);
    setActive(title);
    console.log(currentActive);
  };
  return (
    <nav
      className={[
        "navbar",
        `navbar--${props.location}`,
        `navbar--${direction}`,
      ].join(" ")}
    >
      {console.log(props.location)}
      {props.items.map((item) => (
        <a
          href={item.url}
          className={currentActive === item.title ? "active" : "notactive"}
          onClick={() => handleClick(item.url, item.title)}
        >
          {item.title}
        </a>
      ))}
    </nav>
  );
};

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
