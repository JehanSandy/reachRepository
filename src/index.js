import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import file app.js
import App from "./App";

// set up redux
import { createStore, applyMiddleware } from "redux"; //untuk membuat globalstate => pakai createStor yg di import dari redux
// applyMiddleware => setup redux-thunk
import { Provider } from "react-redux"; //untuk menhubungkan antara react(componnen) dan redux => diambil dari react-reduk yg bertugas sebagai penghubung antara react dan reduct
import allReducer from "./redux/reducers"; //akan otomatis menjari index.js ini memanggil All reducer
import ReduxThunk from "redux-thunk";

//ini variable untuk menampung createStore ini nanti sebagai global store
let globalState = createStore(allReducer, applyMiddleware(ReduxThunk)); // isinya adalah allReducer

ReactDOM.render(
  //di dalam Provider diberi propertis globalStore
  <Provider store={globalState}>
    <App />
  </Provider>,
  document.getElementById("root")
);
