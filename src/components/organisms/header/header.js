import React from "react";
import { func, string, arrayOf, shape } from "prop-types";
import NavBar from "../../molecules/navBar/navBar";
import "./header.css";
import logoGL from "../../../Assets/logo.svg";
const logo = logoGL;
const items = [];
const Header = ({ ...props }) => (
  <section className="header_wrapper">
    <header>
      <img src={logoGL} style={{ height: 75, width: 100 }} alt="My Logo" />
      {console.log(props.menus)}
      {props.menus.map(({ items }) => (
        <NavBar location={props.location} items={items} />
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
};

Header.defaultProps = {
  menus: [],
  logo: logo,
};

export default Header;
