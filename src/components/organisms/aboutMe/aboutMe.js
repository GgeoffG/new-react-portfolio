import React from "react";
import { bool, string, arrayOf, shape } from "prop-types";
import Paragraph from "../../atoms/paragraph/paragraph";
import "./aboutMe.css";
import pro from "../../../Assets/pro.jpg";

const AboutMe = ({ ...props }) => (
  <>
    <section className="aboutMe_wrapper">
      <h3>
        {" "}
        About Me
        <img
          src={pro}
          alt="profile picture"
          style={{ height: 150, width: 100 }}
        />
      </h3>
      <Paragraph innerText={props.innerText} />
    </section>
  </>
);

AboutMe.propTypes = {
  innerText: string,
};

AboutMe.defaultProps = {
  innerText: " ",
};

export default AboutMe;
