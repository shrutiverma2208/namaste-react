// <div id="parent">
// <div id="child">
// <h1>Im h1 tag<h1>
// </div>
// </div>
import React from "react";
import ReactDOM from "react-dom/client"

const parent=React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        'div',
        {id:"child"},
       [React.createElement("h1",{},"I'm h1 tag"),
       React.createElement("h2",{},"I'm h2 jhghjgjo tag"),

    ] 

    )
)
console.log(parent)

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);