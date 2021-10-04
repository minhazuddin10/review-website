import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, FormControl, InputGroup, Row } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <h2>Education About</h2>
      <p>
        Education is a process of learning through which we acquire knowledge.
        It enlightens, empowers, and creates a positive development. Education
        gives an individual the knowledge and skills to work with virtue. It
        aids the all-round mental, physical, and intellectual growth and
        development of an individual.
      </p>
      <p>
        There are three distinct types of Education- Formal Education,
        Non-Formal Education, and Informal Education. Education aims to change
        the way of one’s thinking. Academic knowledge provides one leaning on a
        global scale, while Practical knowledge is acquired for life on the
        whole.
      </p>
      <Row>
        <Col>
          <img
            className="w-100"
            src="https://www.webfulcreations.com/themes/education/wp-content/uploads/sites/2/2016/11/education_bg.jpg"
            alt=""
          />
        </Col>
        <Col>
          <h2 className="pt-5">
            WELCOME TO
            <span className="text-uppercase text-info">EDUCATION Website</span>
          </h2>
          <p className="text-start">
            Study any topic, anytime. Explore thousands of courses for the
            lowest price ever!
          </p>
          <p className="text-start">
            We Welcome you to our Education WordPress theme by Webful Creations.
            Webful Creations have created an amazing WordPress theme which is
            great for educational institutes and courses. Aliquam erat volutpat.
            Donec laoreet iaculis elementum. Aliquam ligula nisi, molestie
            faucibus tortor quis, vulputate imperdiet turpis. In iaculis arcu et
            aliquam dapibus. Nulla facilisi.
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
              className="btn btn-info text-light"
            >
              subscribe
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </div>
  );
};

export default About;
