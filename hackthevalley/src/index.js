import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./components/home";
import Teacher from "./components/teacher";

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={App} />
    <Route path="/home" component={Home} />
    <Route path="/teacher" component={Teacher} />
  </BrowserRouter>,
  document.getElementById("root")
);
