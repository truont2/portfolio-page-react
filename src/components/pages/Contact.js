import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

export default function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email or username is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    // If successful, we want to clear out the input after registration.
    setUserName("");
    // TODO: Set the password back to an empty string after the user clicks submit
    setMessage("");
    setEmail("");
    alert(`Hello ${userName}`);
  };
  return (
    <Container className="contact-form content">
      <h3>Contact</h3>
      {/* <form className="form">
        <label>Name:</label>
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="username"
        />
        <label>Email Address: </label>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <label>Message: </label>
        <input className="message" type="textarea" 
          name="message"
          onChange={handleInputChange}
          placeholder="Type your message"
          value={message}
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form> */}
      <Form className="form">
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" placeholder="Name" value={userName}
          name="userName"
          onChange={handleInputChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address:</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email}
          name="email"
          onChange={handleInputChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Message:</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Leave a message here"
            style={{ height: "100px" }}
            name="message"
            onChange={handleInputChange}
            value={message}
          />
        </Form.Group>
        <Button variant="secondary" type="submit" onClick={handleFormSubmit} className="submitBtn">
          Submit
        </Button>
      </Form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </Container>
  );
}
