import React from "react";
import ReactDOM from "react-dom";

import "./style.css";

import {BrowserRouter} from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/index.js";

import App from "./App/";

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>
    , document.getElementById("root"));