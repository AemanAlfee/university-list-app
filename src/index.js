import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import store from "./store";
import Universities from "./components/Universities";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Universities />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
