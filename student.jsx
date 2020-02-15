import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Alert";
import Text from "react-bootstrap/Alert";
import "./thumb.png";
import { Row, Col } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";


class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <button className="inc" onClick={e => this.increment(e)}>
          <Row>
            <Col>
              <img src={require("./thumb.png")} />
            </Col>

            <Col>
              <p className="thumbs"> {this.state.count}</p>
            </Col>
          </Row>
        </button>
      </div>
    );
  }
}
function Question(props) {
  return (
    <div className="cardw-75">
      <div class="card-body">
        <p class="card-text">{props.text}</p>
        {<Count />}
      </div>
    </div>
  );
}

class Student extends Component {
  constructor() {
    super();
    this.state = {
      studentType: "",
      questions: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }

  handleChange(event) {
    this.setState({
      studentType: event.target.value
    });
  }

  handleSend() {
    let currentQuestions = this.state.questions;
    currentQuestions.push(this.state.studentType);

    this.setState({
      questions: currentQuestions,
      studentType: ""
    });
  }

  render() {
    console.log(this.state.questions);
    // const questionsArr = this.state.questions.map(data => {
    //   return <p>data</p>;
    // });
    return (
      <div>
        <h1>Welcome to class, your Session ID is: BE23N </h1>
        <p>Todays lesson is on algorithm analysis</p>
        <p>Ask a question and you classmates and the instructor will see it</p>

        <div id="myForm">
          <h1>Questions</h1>

          <input
            type="text"
            onChange={this.handleChange}
            placeholder="Type message.."
            name="msg"
            required
          />
          <Button variant="primary" onClick={this.handleSend}>
            Send
          </Button>
          <Button variant="primary" className="btn cancel">
            Close
          </Button>
        </div>

        <div>
          {this.state.questions.map(question => {
            return <Question text={question} />;
          })}
        </div>
      </div>
    );
  }
}

export default Student;
