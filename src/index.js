import React from "react";
import ReactDOM from "react-dom";

const fName = "Haroldo";
const lName = "Júnio";

ReactDOM.render(
  <div>
    <h1>Hello {`${fName} ${lName}`}!</h1>
    <p>Your lucky number is {Math.round(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
