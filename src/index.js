import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router, Route } from "react-router-dom";
import login from "./container/login";
import register from "./container/register";

import { Provider } from "react-redux";
import reducers from "./reducer";
const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path={"/index"} component={App} />
      <Route path={"/login"} component={login} />
      <Route path={"/register"} component={register} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
