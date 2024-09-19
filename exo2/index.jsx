import React from "react";

export default function components(){
    const jsx =  React.createElement(
        "div",
        { className: "card bg-neutral shadow-xl"},
       React.createElement(
        "div",
        { className: "card-body" },
        React.createElement(
            "h2",
            { className: "card-title" }, 
        )
       )
    )

    console.log(jsx);
    return jsx;
    
}