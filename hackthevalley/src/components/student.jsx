import React, { Component } from "react";

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
        <p>todays lesson is on algorithm analysis</p>
        <p>ask a question and you classmates and the instructor will see it</p>

        <div id="myForm">
          <h1>Chat</h1>

          <textarea
            onChange={this.handleChange}
            placeholder="Type message.."
            name="msg"
            required
          ></textarea>
          <button type="button" class="btn" onClick={this.handleSend}>
            Send
          </button>
          <button type="button" class="btn cancel" onclick="closeForm()">
            Close
          </button>
        </div>

        <div>
          {this.state.questions.map(question => {
            return <h1>{question}</h1>;
          })}
        </div>
      </div>
    );
  }
}

export default Student;
