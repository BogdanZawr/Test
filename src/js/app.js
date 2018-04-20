import React from "react";
import ReactDOM from "react-dom";

import App from './components/App';
import store from "./store/index";
import { addArticle } from "./actions/index";
import { render } from "react-dom";
import { Provider } from "react-redux";

import '../stylesheets/base/_base.scss'

require("babel-core/register");
require("babel-polyfill");

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("reactHere")
);