import React from "react";
import ReactDOM from "react-dom";
import "./lib/scss/_index.scss";
import App from "./App";
import ContextMovies from "./Context/ContextMovies";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <ContextMovies>
      <App />
    </ContextMovies>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
