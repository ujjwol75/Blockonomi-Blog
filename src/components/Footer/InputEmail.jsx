import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import style from "./footer.module.css";
import Form from 'react-bootstrap/Form';

const InputEmail = (props) => {
  const [formValue, setFormValue] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    props.handleNewsLetterClick(formValue, setFormValue);
  };

  const emailChangeHandler = (e) => {
    setFormValue(e.target.value);
    props?.setError(false);
  };

  return (
    <Container>
      <Form onSubmit={handleClick} className={style.forminput}>
        <Form.Group>
          <Form.Control
            ref={props?.isFocus ? (input) => input && input.focus() : null}
            rows='3'
            type='email'
            placeholder='name@example.com'
            value={formValue}
            onChange={emailChangeHandler}
          />
        </Form.Group>
        <Button
          type='submit'
          style={{
            backgroundColor: '#245557',
            display: 'flex',
            alignItems: 'center',
            marginLeft: '10px',
          }}
          className={style.buttondiv}
        >
          SignUp
        </Button>
      </Form>
      {props?.error && <p className='text-white'>Enter valid email address</p>}
    </Container>
  );
};

export default InputEmail;


