import React from "react";
import "./FormInput.scss";

function FormInput({
  handleChange,
  label,
  isTextarea,
  children,
  ...otherProps
}) {
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
          htmlFor={otherProps.id}
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
      {children}
    </div>
  );
}

export default FormInput;
