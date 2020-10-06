import React from "react";
import ReactDOM from "react-dom";
import './App.css';

function Hi() {
  return <div className="Hi">
    <h1>Hello World!</h1><br/>
    <h1>Hello from <em>sha-fateh</em></h1><br/>
    <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </ul>
<p>The sum of 10+5 is: {10+5}</p>
  </div>;
}

function Greet({name}) {
  return <div className="Greet"><h1>Hello {name}</h1></div>;
}



ReactDOM.render(<Hi />, document.querySelector("#root"));
ReactDOM.render(<Greet name="Savannah" />, document.querySelector("#root"));
export {Hi, Greet}