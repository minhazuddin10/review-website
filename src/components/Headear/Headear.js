import React from "react";
import { NavLink } from "react-router-dom";
import "./Headear.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Headear = () => {
  return (
    <div className="header">
      <div className="logo">
        <h3 className="text-uppercase text-success"> WELCOME tO Educational Website!! </h3>
      </div>
      <nav>
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            color: "black",
          }}
          className="link"
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            color: "black",
          }}
          className="link"
          to="/service"
        >
          Service
        </NavLink>
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            color: "black",
          }}
          className="link"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            color: "black",
          }}
          className="link"
          to="/contact"
        >
          Contact
        </NavLink>

        
      </nav>
    </div>
  );
};

export default Headear;
