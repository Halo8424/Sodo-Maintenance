import React from "react";
import "./UpdateBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function UpdateBtn(props) {
  return (
    <span className="update-btn" {...props} role="button" tabIndex="0" placeholder="Update">
                   <i className="material-icons">create</i>
    </span>
  );
}

export default UpdateBtn;
