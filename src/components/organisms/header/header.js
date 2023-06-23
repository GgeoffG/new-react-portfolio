import React from "react";
import { func, string, arrayOf, shape } from "prop-types";
import NavBar from "../../molecules/navBar/navBar";
import "./header.css";
import logoGL from "../../../Assets/logo.svg";
const logo = logoGL;
const items = [
  { title: "Home", url: "/home" },
  { title: "About", url: "/about" },
  { title: "Projects", url: "/projects" },
  { title: "Contacts", url: "/contacts" },
];
const Header = ({ menus }) => (
  <section className="header_wrapper">
    <header>
      <img src={logoGL} style={{ height: 75, width: 100 }} alt="My Logo" />
      {menus.map(({ items, title }) => (
        <NavBar location="header" items={items} />
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
