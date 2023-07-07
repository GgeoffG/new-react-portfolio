import React from "react";
import { func, string, arrayOf, shape, number } from "prop-types";
import NavBar from "../../molecules/navBar/navBar";
import "./header.css";
import logoGL from "../../../Assets/logo.svg";
const logo = logoGL;

const Header = ({ display, ...props }) => (
  <section className="header_wrapper">
    <header>
      <img src={logoGL} style={{ height: 75, width: 100 }} alt="My Logo" />
      <h1>Geoffrey Langeberg</h1>
      {props.menus.map(({ items, index }) => (
        <NavBar
          key={index}
          location={props.location}
          items={items}
          display={display}
        />
      ))}
    </header>
  </section>
);

Header.propTypes = {
  menus: arrayOf({
    items: arrayOf(
      shape({
        title: string.isRequired,
        url: string.isRequired,
      })
    ),
  }),
  logo: string,
  title: string,
  key: number,
};

Header.defaultProps = {
  menus: [],
  logo: logo,
};

export default Header;
