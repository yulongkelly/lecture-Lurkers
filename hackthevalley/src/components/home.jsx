import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Teacher from "./teacher";
import { Button } from "react-bootstrap";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      redirect1: false,
      redirect2: false
    };
    this.setRedirect1 = this.setRedirect1.bind(this);
    this.setRedirect2 = this.setRedirect2.bind(this);
  }
  setRedirect1 = () => {
    this.setState({
      redirect1: true
    });
  };

  renderRedirect1 = () => {
    if (this.state.redirect1) {
      return <Redirect to={"/teacherSignIn"} />;
    }
  };
  setRedirect2 = () => {
    this.setState({
      redirect2: true
    });
  };

  renderRedirect2 = () => {
    if (this.state.redirect2) {
      return <Redirect to={"/student"} />;
    }
  };

  render() {
    return (
      <div>
        <div>
          <h1 className="header">Welcome to Lecture Lucker</h1>
          <br />
          <h2 style={{ textAlign: "center" }} className="header2">
            Are you a student or teacher?
          </h2>
          <br />
        </div>
        <div>
          {this.renderRedirect1()}
          <Button
            className="button"
            variant="primary"
            name="teacher"
            onClick={this.setRedirect1}
          >
            Teacher
          </Button>
        </div>
        <br />
        <div>
          {this.renderRedirect2()}
          <Button
            className="button"
            variant="primary"
            name="teacher"
            onClick={this.setRedirect2}
          >
            Student
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;
