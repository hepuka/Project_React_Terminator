import React from "react";
import ReactDOM from "react-dom/client";
import "tachyons"; //css import

//TOOLS
import "./index.css"; //saját css

//COMPONENTS
import App from "./App";

//MAIN
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />,
  </React.StrictMode>
);
