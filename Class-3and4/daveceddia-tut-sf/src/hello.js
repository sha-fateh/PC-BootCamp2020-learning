import React from "react";
import ReactDOM from "react-dom";

function Yolo({name}) {
    return <div className="Greet"><h3>This is from another component!</h3><p>Hello {name}</p></div>;
}

export default Yolo