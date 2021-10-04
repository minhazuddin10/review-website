import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, FormControl, InputGroup, Row } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <h2>EDUCATION ABOUT</h2>
      <p>
      Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research. Education frequently takes place under the guidance of educators; however, learners can also educate themselves. Education can take place in formal or informal settings, and any experience that has a formative effect on the way one thinks, feels, or acts may be considered educational. The methodology of teaching is called pedagogy.
      </p>
      <p>
      Formal education is commonly divided formally into stages such as preschool or kindergarten, primary school, secondary school and then college, university, or apprenticeship. In most regions, education is compulsory up to a certain age.
      </p>
      <Row>
        <Col>
          <img
            className="w-100"
            src="https://media.istockphoto.com/photos/back-view-of-elementary-students-raising-their-hands-on-a-class-picture-id1223141903?b=1&k=20&m=1223141903&s=170667a&w=0&h=J4pKZivfi9cxeOd9upRIJo0qOVUJsnGVyc1ud96Q5LQ="
            alt=""
          />
        </Col>
        <Col>
          <h2 className="pt-5">
            WELCOME TO
            <span className="text-uppercase text-primary"> EDUCATION Website</span>
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
              Subscribe
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </div>
  );
};

export default About;
