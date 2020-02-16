import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./components/home";
import Teacher from "./components/teacher";
import Student from "./components/student";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./components/signIn";

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={App} />
    <Route path="/home" component={Home} />
    <Route exact path="/teacherSignIn" component={SignIn} />
    <Route exact path="/teacher" component={Teacher} />
    <Route path="/student" component={Student} />
    <Route path="/teacher-question" component={Teacher} />
  </BrowserRouter>,
  document.getElementById("root")
);
