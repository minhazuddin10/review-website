import React from "react";
import { Card } from "react-bootstrap";
import "./Blogs.css";

const Blog = (props) => {
  const { id, title, body } = props.blog;
  return (
    <div className="homeService">
      <Card style={{ width: "18rem", margin: "10px" }}>
        <Card.Body>
          <Card.Title>
            <h3 className="myId">{id}</h3>
          </Card.Title>
          <Card.Text>title {title}</Card.Text>
          <Card.Text>{body}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blog;
