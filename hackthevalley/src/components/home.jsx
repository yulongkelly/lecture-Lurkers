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
    this.setRedirect = this.setRedirect.bind(this);
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/teacher" />;
    }
  };

  render() {
    return (
      <div>
        <div>
          <h1 className="header">Welcome to Lecture Lucker</h1>
        </div>
        {this.renderRedirect()}
        <button onClick={this.setRedirect}>Teacher</button>
        <br />
        <button>Student</button>
      </div>
    );
  }
}

export default Home;
