import React from "react";
 //--Jumbotron Compondent.   
    function Jumbotron({ children }) {
      return (
        <div
          style={{ height: 100, clear: "both", paddingTop: 30, textAlign: "center" }}
          className="jumbotron"
        >
          {children}
        </div>
      );
    }

export default Jumbotron;