import React from "react";
import "./style.css";


//--The ...props means, spread all of the passed props onto this element
//--That way we don't have to define them all individually

//--DeleteBtn Component
    function DeleteBtn(props){
        return(
            <span className="delte-btn" {...props} role="button" tabIndex="0"> 
             <i className="material-icons"> remove_circle</i>
            </span>
        );
        
    }

    //--Export the Component
        export default DeleteBtn;