import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import style from "./footer.module.css";
import Form from 'react-bootstrap/Form';

const InputEmail = (props) => {

  const [formValue, setFormValue] = useState("");
  const [validated, setValidated] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setValidated(true);
    props.handleNewsLetterClick(formValue, setFormValue)

  };


  return (
    <Container>
      <Form noValidate
        validated={validated}
        onSubmit={handleClick}
        className={style.forminput}

      >
        <Form.Group>
          <Form.Control
            rows="3"
            type='email'
            placeholder='name@example.com'
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />
          <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="warning" type="submit" style={{ height: "38px" }}>Sign Me Up</Button>
      </Form>
    </Container>
  );
};

export default InputEmail;


