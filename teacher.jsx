import React, { Component } from "react";
import ReactDOM from "react-dom";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Teacher extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1 style={{ textAlign: "center" }}>Welcome Mr. Teacher</h1>
        <br />

        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                className="button"
                as={Button}
                variant="primary"
                eventKey="0"
              >
                CS 246
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <div>
                <Card.Body>Lecture 1</Card.Body>
                <Card.Body>Lecture 2</Card.Body>
              </div>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                className="button"
                as={Button}
                variant="primary"
                eventKey="1"
              >
                CS 136
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <div>
                <Card.Body>Lecture 1</Card.Body>
                <Card.Body>Lecture 2</Card.Body>
                <Card.Body>Lecture 3</Card.Body>
              </div>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

export default Teacher;
