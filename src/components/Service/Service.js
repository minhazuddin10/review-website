import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Service = (props) => {
  const { id, name, img, price } = props.service;
  return (
    <div className="homeService">
      <Card style={{ width: "18rem", margin: "10px" }}>
        <Card.Img variant="top" className="cardImg" src={img} />
        <Card.Body>
          <Card.Title className="pt-2">{name}</Card.Title>
          <Card.Text>Price: $ {price}</Card.Text>
          <Card.Text>id {id}</Card.Text>
          <Button className="btn btn-success text-light text-start ">
            Buy Now
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
