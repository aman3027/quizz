// https://github.com/aman3027/quizz
import React, { useState, useEffect } from "react";
import { Card, Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

import toast from "react-hot-toast";

const ExamScreen = () => {
  const userInfo = JSON.parse(localStorage.getItem("user"));
  if (userInfo) console.log("user Email", userInfo.email);

  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [examCode, setExamCode] = useState("");
  const [instructions, setInstructions] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");
  // const dispatch = useDispatch()
  // const examList = useSelector((state) => state.examList)
  // const { loading, error, exams } = examList
  // localStorage.removeItem("ResponseInfo");
  // localStorage.removeItem("ResultInfo");

  function handleShow() {
    if (userInfo) {
      setShow(true);
    } else {
      toast.error("Sign In to your account");
      window.location.href = "/login";
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const creator = userInfo.email;
    console.log(title, examCode, time, duration, instructions, creator);
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/question",
        {
          title,
          examCode,
          time,
          duration,
          instructions,
          creator,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Successfully created");
      setShow(false);
    } catch (error) {
      console.log("cannot post");
    }
  }

  return (
    <>
      <div
        className="ml-auto"
        style={{ display: "block", position: "initial" }}
      >
        <Button variant="primary" onClick={handleShow}>
          Create Quiz
        </Button>

        <Modal
          show={show}
          onHide={() => setShow(false)}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Exam</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit} autoComplete="Off">
              <Form.Group controlId="title">
                <Form.Label>Exam Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Exam Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="examCode">
                <Form.Label>Exam Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Exam Code"
                  value={examCode}
                  onChange={(e) => setExamCode(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="examDate">
                <Form.Label>Exam Date</Form.Label>
                <Form.Control
                  type="datetime-local"
                  placeholder="dd-mm-yyyy --:--"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="examDuration">
                <Form.Label>Exam Duration</Form.Label>
                <Form.Control
                  type="Number"
                  placeholder="120 (in minutes)"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="instructions">
                <Form.Label>Instructions</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Instructions"
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
      <div className="container">
        <br></br>
        <br></br>
        <br></br>
        <Row>
          <Col>
            <h3>Active Exam Papers</h3>
            <hr />
            <br></br>
          </Col>
          {!userInfo.isAdmin ? (
            <div className="ml-auto">
              <Link to="/edits/exam">
                <Button outline className="ml-auto" onClick={handleShow}>
                  <span className="fa fa-pencil fa-lg"></span>Edit Exam papers
                </Button>
              </Link>
            </div>
          ) : (
            <div className="ml-auto">
              <Button
                outline
                className="ml-auto"
                onClick={() => {
                  alert("You are not an admin");
                }}
              >
                <span className="fa fa-pencil fa-lg"></span>Edit Exam papers
              </Button>
            </div>
          )}
        </Row>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </>
  );
};

export default ExamScreen;
