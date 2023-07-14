import React from "react";
import { bool, string, arrayOf, shape } from "prop-types";
import Input from "../../atoms/input/input";
import "bootstrap/dist/css/bootstrap.css";
import ListItem from "../../atoms/listItem/listItem";
import "./list.css";
import resume from "../../../Assets/Resume.pdf";
const List = ({ ordered, listItems }) => {
  return (
    <div className="list-wrapper">
      <h3>Relevant Skills</h3>
      <a href={resume} download>
        Download Resume
      </a>
      {!ordered ? (
        <ul>
          {listItems &&
            listItems.map((data, index) => (
              <ListItem key={index} innerText={data.innerText} />
            ))}
        </ul>
      ) : (
        <ol>
          {listItems &&
            listItems.map((data, index) => (
              <ListItem key={index} innerText={data.innerText} />
            ))}
        </ol>
      )}
    </div>
  );
};

List.propTypes = {
  ordered: bool,
  listItems: arrayOf(
    shape({
      innerText: string,
    })
  ),
};

List.defaultProps = {
  ordered: false,
  listItems: [],
};

export default List;
