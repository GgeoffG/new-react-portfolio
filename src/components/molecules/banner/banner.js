import React from "react";
import { func, string, arrayOf, shape, bool } from "prop-types";
import "./banner.css";
import cooksCompanionImage from "../../../Assets/cooks_companion.png";
const Banner = ({ image, main, link, name }) => (
  <div
    className={["banner", `main--${main}`].join(" ")}
    style={{
      backgroundImage: `url(${image})`,
      backgroundPosition: "center",
      // height: 300,
      // width: 450,
    }}
  >
    <a href={link}>
      <h4>{name}</h4>
    </a>
  </div>
);

Banner.propTypes = {
  image: string,
  main: bool,
  link: string,
  name: string,
};

Banner.defaultProps = {
  main: false,
  image: cooksCompanionImage,
  name: "Cooks Companion",
};

export default Banner;
