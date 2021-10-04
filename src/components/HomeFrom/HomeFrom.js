import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@restart/ui/esm/Button";

const HomeFrom = () => {
  return (
    <div className="mt-5 mx-auto bg-light py-4">
      <h1 className="py-3">Contact Info</h1>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3 w-50 mx-auto"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingPassword"
        className="mb-3 w-50 mx-auto"
        label="Password"
      >
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingTextarea2"
        className="my-2 w-50 mx-auto"
        label="Comments"
      >
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "100px" }}
        />
      </FloatingLabel>
      <Button className="btn btn-success px-5 py-2  my-3 fs-5" type="submit">
        send
      </Button>
    </div>
  );
};

export default HomeFrom;
