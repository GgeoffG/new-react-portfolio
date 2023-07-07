import React from "react";
import { func, string, arrayOf, shape } from "prop-types";
import NavBar from "../../molecules/navBar/navBar";
import "./footer.css";
import github from "../../../Assets/github-mark.png";
import linkedIn from "../../../Assets/LI-In-Bug.png";
const Footer = ({ display, ...props }) => (
  <section className="footer_wrapper">
    <footer>
      <nav className="copyright">
        <p>Copyright &copy; Geoffrey Langeberg {new Date().getFullYear()} </p>
        <a href="https://github.com/GgeoffG/">
          <img
            src={github}
            alt="github mark"
            style={{ height: 25, width: 25 }}
            className="gitMark"
          ></img>
        </a>
        <a href="https://www.linkedin.com/in/geoffrey-langenberg-707456277/">
          <img
            src={linkedIn}
            alt="linked in mark"
            style={{ height: 25, width: 25 }}
            className="linkMark"
          ></img>
        </a>
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
