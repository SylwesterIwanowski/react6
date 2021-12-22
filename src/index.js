import React from "react";
import ReactDOM from "react-dom";

const name = "Sylwek";
const num = 8;
const num1 = 2;

ReactDOM.render(
  <div>
    <h1>Hello {name}</h1>
    <p>Your lucki number is: {Math.floor(Math.random() * 10)} </p>
  </div>,
  document.getElementById("root")
);
