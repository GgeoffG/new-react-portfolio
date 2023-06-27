import React from "react";
import { bool, string, arrayOf, shape } from "prop-types";
import Input from "../../atoms/input/input";
import "bootstrap/dist/css/bootstrap.css";
import "./inputForm.css";

const InputForm = ({ ...props }) => {
  return (
    <div className="form-wrapper">
      <h2>{props.inputTitle}</h2>
      {props.fields.map((data, index) => (
        <Input
          key={index}
          type={data.type}
          name={data.name}
          label={data.label}
          message={data.message}
        />
      ))}
      <button className="button-primary">Submit</button>
    </div>
  );
};

InputForm.propTypes = {
  fields: arrayOf({
    data: arrayOf(
      shape({
        name: string,
        label: string,
        message: bool,
        type: string.isRequired,
      })
    ),
  }),
};

InputForm.defaultProps = {
  fields: [],
};

export default InputForm;
