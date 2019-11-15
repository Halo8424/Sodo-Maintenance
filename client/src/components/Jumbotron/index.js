import React from "react";
 //--Jumbotron Compondent.   
    function Jumbotron({ children }) {
      return (
        <div
          style={{ height: 200, clear: "both", paddingTop: 30, textAlign: "center", border: "1px solid black" }}
          className="jumbotron"
        >
          {children}
        </div>
      );
    }

export default Jumbotron;