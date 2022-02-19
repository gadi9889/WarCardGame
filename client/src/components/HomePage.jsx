import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import anime from "animejs/lib/anime.es.js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";

export default function ({ messageShow, messageOn }) {
  let navigate = useNavigate();
  let title = "Oh snap! You got an error!";
  let body = "Check The Username or Password";
  let variant = "danger";

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() == false) {
      setValidated(true);
      messageShow(title, body);
      return;
    }
    axios
      .post(`/api/users/login`, {
        name: form["kName"].value,
        password: form["password"].value,
      })
      .then(() => {
        messageOn(false);
        navigate("/game");
      })
      .catch((res) => {
        messageShow(title, body, variant);
      });
  };

  useEffect(() => {
    anime({
      targets: ".box-top-left",
      opacity: [0, 1, 0.5],
      translateX: anime.stagger(76),
      translateY: anime.stagger(100),
      rotate: "2turn",
      easing: "easeInOutSine",
      duration: 1500,
      delay: anime.stagger(300),
      direction: "alternate",
      loop: true,
    });
    anime({
      targets: ".box-top-center-right",
      opacity: [0, 1, 0.5],
      translateX: anime.stagger(76),
      translateY: anime.stagger(100),
      rotate: "2turn",
      easing: "easeInOutSine",
      duration: 1500,
      delay: anime.stagger(300),
      direction: "alternate",
      loop: true,
    });
    anime({
      targets: ".box-top-center-left",
      opacity: [0, 1, 0.5],
      translateX: anime.stagger(-76),
      translateY: anime.stagger(100),
      rotate: "2turn",
      easing: "easeInOutSine",
      duration: 1500,
      delay: anime.stagger(300),
      direction: "alternate",
      loop: true,
    });
    anime({
      targets: ".box-top-right",
      opacity: [0, 1, 0.5],
      translateX: anime.stagger(-76),
      translateY: anime.stagger(100),
      rotate: "2turn",
      easing: "easeInOutSine",
      duration: 1500,
      delay: anime.stagger(300),
      direction: "alternate",
      loop: true,
    });
  }, []);

  const boxes = () => {
    let arr = [];
    for (let i = 0; i < 8; i++) {
      arr.push(
        <div className="box-top-left position-absolute top-0 start-0" />
      );
    }
    for (let i = 0; i < 8; i++) {
      arr.push(
        <div className="box-top-center-right position-absolute top-0 start-50" />
      );
    }
    for (let i = 0; i < 8; i++) {
      arr.push(
        <div className="box-top-center-left position-absolute top-0 start-50" />
      );
    }
    for (let i = 0; i < 8; i++) {
      arr.push(
        <div className="box-top-right position-absolute top-0 start-100" />
      );
    }
    return arr;
  };
  return (
    <div>
      {boxes().map((box) => {
        return box;
      })}
      <div className="rounded-2 bg-dark bg-gradient p-4">
        <h2 className="text-dark opacity-75">SignIn</h2>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="validationKingdomName">
            <Form.Label>Kingdom</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                name="kName"
                placeholder="Ex:Akkadian"
                aria-describedby="inputGroupPrepend"
                pattern=".{5,}"
                required
              />
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="validationPasswordName">
            <Form.Label>Password</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">*</InputGroup.Text>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password..."
                aria-describedby="inputGroupPrepend"
                pattern=".{5,}"
                required
              />
            </InputGroup>
          </Form.Group>

          <Button type="submit" className="bg-dark m-3">
            Enter
          </Button>
        </Form>
      </div>
      <Alert variant="info">
        don't have an account?
        <Alert.Link href="/signup">Sign up</Alert.Link>. Give it a click
      </Alert>
    </div>
  );
}
