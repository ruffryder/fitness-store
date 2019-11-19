import React from "react";
import "./FormInput.scss";

function FormInput({ handleChange, label, isTextarea, ...otherProps }) {
  return (
    <div className="group">
      {isTextarea ? (
        <textarea
          className="form-input"
          onChange={handleChange}
          {...otherProps}
        ></textarea>
      ) : (
        <input onChange={handleChange} {...otherProps} className="form-input" />
      )}
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default FormInput;
