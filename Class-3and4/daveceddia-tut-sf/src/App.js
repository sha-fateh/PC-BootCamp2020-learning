import React from "react";
import ReactDOM from "react-dom";
import './App.css';

function Hi() {
  return <div className="Hi">
    <h1>Hello World!</h1><br/>
    <h1>Hello from <em>sha-fateh</em></h1><br/>
    <h3>This is an example of an unordered list within the div</h3>
    <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </ul>
    <br/>
    <h3>This is an example of expression in react</h3>
<p>The sum of 10+5 is: {10+5}</p>
  </div>;
}

export default Hi