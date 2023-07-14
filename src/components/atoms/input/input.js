import React, { useState } from "react";
import { bool, string } from "prop-types";
import "bootstrap/dist/css/bootstrap.css";
import "./input.css";

const Input = ({
  label,
  type,
  name,
  message,
  emailValidation,
  emptyFieldCheck,
}) => {
  return (
    <>
      <label>{label}</label>:
      {!message ? (
        <input
          className={["form-input"].join(" ")}
          type={type}
          name={name}
          onBlur={name === "Email" ? emailValidation : emptyFieldCheck}
          placeholder={label}
        ></input>
      ) : (
        <textarea
          className={["form-input"].join(" ")}
          type={type}
          name={name}
          onBlur={emptyFieldCheck}
          placeholder={label}
        ></textarea>
      )}
    </>
  );
};

Input.propTypes = {
  lable: string,
  type: string.isRequired,
  name: string,
  message: bool,
};

Input.defaultProps = {
  lable: "Email",
  type: "text",
  name: "Email",
};

export default Input;
