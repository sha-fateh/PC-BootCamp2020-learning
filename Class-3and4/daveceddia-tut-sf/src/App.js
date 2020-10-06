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

ReactDOM.render(<Hi/>, document.querySelector("#root"));

export default Hi