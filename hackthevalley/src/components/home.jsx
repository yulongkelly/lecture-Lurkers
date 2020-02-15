import React, { Component } from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Teacher from "./teacher";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
    // this.setRedirect = this.setRedirect.bind(this);
  }

  //   setRedirect() {
  //     browserHistory.push("/teacher");
  //   }

  render() {
    const teacher = Teacher();
    return (
      <div>
        <div>
          <h1 className="header">Welcome to Lecture Lucker</h1>
        </div>
        <button
          onClick={() => {
            teacher.goBack();
          }}
        >
          Teacher
        </button>
        <br />
        <button>Student</button>
      </div>
    );
  }
}

export default Home;
