import React, { useState } from "react";
import { bool, string, arrayOf, shape } from "prop-types";
import Input from "../../atoms/input/input";
import "bootstrap/dist/css/bootstrap.css";
import "./inputForm.css";

const InputForm = ({ ...props }) => {
  const [notification, setNotification] = useState("");
  const emailValidation = (e) => {
    if (!e.target.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i)) {
      setNotification("*Please input a valid email");
    } else {
      setNotification("");
    }
  };
  const emptyFieldCheck = (e) => {
    if (!e.target.value) {
      setNotification(`*${e.target.name} field is required`);
    } else {
      setNotification("");
    }
    // setNotification("");
  };
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
          emailValidation={emailValidation}
          emptyFieldCheck={emptyFieldCheck}
        />
      ))}
      <p>{notification}</p>
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
