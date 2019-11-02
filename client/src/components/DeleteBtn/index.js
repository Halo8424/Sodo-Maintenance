import React from "react";
import "./style.css";


//--The ...props means, spread all of the passed props onto this element
//--That way we don't have to define them all individually

//--DeleteBtn Component
    function DeleteBtn(props){
        return(
            <spand className="delte-btn" {...props} role="button" tabIndex="0"> 
            X
            </spand>
        );
        
    }

    //--Export the Component
        export default DeleteBtn;