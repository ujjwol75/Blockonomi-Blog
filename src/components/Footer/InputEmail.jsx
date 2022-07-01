import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import style from "./footer.module.css";

const InputEmail = (props) => {

  const [formValue, setFormValue] = useState("");
  const handleForm = () => {
    console.log("hello");
  };
  const handleClick = (e) => {
    e.preventDefault()
    props.handleNewsLetterClick(formValue)
  };
 
  
  return (
    <Container>
      <form action="" className={style.forminput} onSubmit={handleForm}>
        <input
          type="email"
          placeholder="Your email address"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <Button variant="warning" onClick={handleClick}>
          SIGN ME UP
        </Button>
      </form>
    </Container>
  );
};

export default InputEmail;
