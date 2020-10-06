import React from "react";
import ReactDOM from "react-dom";

function Yolo({name}) {
    return <div className="Greet"><h1>Hello {name}</h1></div>;
}

ReactDOM.render(<Yolo name="Aena" />, document.querySelector("#root"));

export default Yolo