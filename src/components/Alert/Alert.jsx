import React from "react";
import { FaTimes } from "react-icons/fa";
import "./Alert.scss";

function Alert({ message, type = "success", handleClose }) {
  return (
    <div className={`alert ${type}`}>
      {message}
      <button className="close-button" onClick={handleClose}>
        <FaTimes />
      </button>
    </div>
  );
}

export default Alert;
