import React from "react";
import { bool, string, arrayOf, shape } from "prop-types";
import Paragraph from "../../atoms/paragraph/paragraph";
import "./aboutMe.css";

const AboutMe = ({ ...props }) => (
  <section className="aboutMe_wrapper">
    <h3>About Me</h3>
    <Paragraph innerText={props.innerText} />
  </section>
);

AboutMe.propTypes = {
  innerText: string,
};

AboutMe.defaultProps = {
  innerText: " ",
};

export default AboutMe;
