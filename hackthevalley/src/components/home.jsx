import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div>
          <h1 className="header">Welcome to Lecture Lucker</h1>
        </div>
        <button>Teacher</button>
        <button>Student</button>
      </Router>
    );
  }
}

export default Home;
