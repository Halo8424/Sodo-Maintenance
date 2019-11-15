import React from "react";

//--Exports the Input, TextArea & FormBtn components

export function Input(props) {
    return(
        <div className="form-group">
            <input className="form-control" {...props} />
        </div>
    );
}

export function TextArea(props) {
    return(
        <div className="form-group">
            <textarea className="form-control" rows="10" {...props} />
        </div>
    );
}

export function FormBtn(props){
    return(
        <button {...props} style={{ float: "right", marginBottom: 10, width: "169px", color: "black", background: "white"}} className="btn waves-effect waves-light">
            <i class="material-icons right">send</i>
            {props.children}
        </button>
    );
}