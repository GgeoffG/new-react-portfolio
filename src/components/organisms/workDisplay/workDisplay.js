import React from "react";
import { bool, string, arrayOf, shape } from "prop-types";
import Banner from "../../molecules/banner/banner";
import "./workDisplay.css";

const WorkDisplay = ({ ...props }) => (
  <section className="workDisplay_wrapper">
    <div className="works_div">
      {console.log("works:" + props.works)}
      {props.works.map(({ items }) =>
        items.map(({ image, main, link, name }) => (
          <Banner
            key={name}
            image={image}
            main={main}
            link={link}
            name={name}
          />
        ))
      )}
    </div>
  </section>
);

WorkDisplay.propTypes = {
  works: arrayOf(
    shape({
      items: arrayOf(
        shape({
          image: string.isRequired,
          main: bool.isRequired,
          link: string.isRequired,
          name: string.isRequired,
        })
      ),
    })
  ),
};

WorkDisplay.defaultProps = {
  works: [],
};

export default WorkDisplay;
