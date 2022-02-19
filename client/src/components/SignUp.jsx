import React, { useState } from "react";
import axios from "axios";
import anime from "animejs/lib/anime.es.js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";

export default function SignUp({ messageShow, messageOn }) {
  let navigate = useNavigate();
  let title = "Oh snap! You got an error!";
  let body = "It seems like you forgot something..";
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
      .post(`/api/users/signup`, {
        name: form["kName"].value,
        password: form["password"].value,
        region: form["region"].value,
      })
      .then(() => {
        messageOn(false);
        navigate("/");
      })
      .catch(() => {
        title = "Unlucky";
        body = "Kingdom name is already taken...";
        messageShow(title, body, variant);
      });
  };
  return (
    <div>
      <div className="rounded-2 bg-dark bg-gradient p-4">
        <h2 className="text-dark opacity-75">SignUp</h2>
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
            <Form.Text muted>
              Kingdom Name Must Be At Least 5 Letters Long
            </Form.Text>
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
            <Form.Text muted>
              Password Name Must Be At Least 5 Letters Long
            </Form.Text>
          </Form.Group>

          <InputGroup hasValidation>
            <Form.Select
              aria-label="region-picker"
              className="w-100 bg-dark text-white text-center"
              name="region"
            >
              <option value="clubs">Clubs</option>
              <option value="spades">Spades</option>
              <option value="daimonds">Daimonds</option>
              <option value="hearts">Hearts</option>
            </Form.Select>
            <Form.Text muted className="w-100">
              Pick Who You Will Support
            </Form.Text>
          </InputGroup>

          <Button type="submit" className="bg-dark">
            Enter
          </Button>
        </Form>
      </div>
    </div>
  );
}
