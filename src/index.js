import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import file app.js
import App from "./App";

// set up redux
import{createStore} from 'redux'
import{provider} from 'react-redux'
import allReducer from './redux/reducers'

let globalState = createStore(allReducer)

ReactDOM.render(
    <provider store={globalState}>
        <App />
    </provider>
    ,document.getElementById("root")
);
