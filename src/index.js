import React from "react";
import ReactDOM from "react-dom";

const name = "Haroldo Júnio";
const year = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {name}.</p>
    <p>Copyright &copy; {year}.</p>
  </div>,
  document.getElementById("root")
);
