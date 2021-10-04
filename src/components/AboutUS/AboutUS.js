import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, FormControl, InputGroup, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUS = () => {
  return (
    <div className="aboutus pt-5">
      <h2 className="py-4 mb-4">
        <span className="text-success">About</span> Us
      </h2>
      <Row>
        <Col>
          <img
            className="w-100"
            src="https://cdn.builtin.com/sites/www.builtin.com/files/styles/blog_medium/public/edtech-companies.png"
            alt=""
          />
        </Col>
        <Col>
          <h2 className="pt-5">
            WELCOME TO
            <span className="text-uppercase text-success"> EDUCATION Website</span>
          </h2>
          <p className="text-start">
          Education professionals are needed at every level - from certificates to graduate degrees.
          </p>
          <p className="text-start">
          Not everyone who studies education wants to be a teacher, which is why SUNY helps online students get started. Explore education opportunities that don't require being in a classroom
          </p>
          <InputGroup className="mb-3  mx-auto mt-3">
            <FormControl
              placeholder="enter your email"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              className="py-3"
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              className="btn btn-success text-white"
            >
              Submit
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUS;
