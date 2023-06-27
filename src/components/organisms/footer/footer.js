import React from "react";
import { func, string, arrayOf, shape } from "prop-types";
import NavBar from "../../molecules/navBar/navBar";
import "./footer.css";
import github from "../../../Assets/github-mark.png";

const Footer = ({ ...props }) => (
  <section className="footer_wrapper">
    <footer>
      {props.menus.map(({ items, title }) => (
        <>
          {title && <h3 className="footer_title">{title}</h3>}
          <NavBar location="footer" items={items} />
        </>
      ))}
      <nav className="copyright">
        <p>
          Copyright &copy; Geoffrey Langeberg {new Date().getFullYear()}{" "}
          <a href="https://github.com/GgeoffG/">
            <img
              src={github}
              alt="github mark"
              style={{ height: 25, width: 25 }}
            ></img>
          </a>
        </p>
      </nav>
    </footer>
  </section>
);

Footer.propTypes = {
  menus: arrayOf({
    items: arrayOf(
      shape({
        title: string.isRequired,
        url: string.isRequired,
      })
    ),
  }),

  title: string,
};

Footer.defaultProps = {
  menus: [],
};

export default Footer;
