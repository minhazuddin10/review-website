import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AboutUS from "../AboutUS/AboutUS";
import HomeFrom from "../HomeFrom/HomeFrom";
import HomeService from "../HomeService/HomeService";
import { Link } from "react-router-dom";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const url = "/homeServic.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="text-center mx-auto">
      <AboutUS></AboutUS>
      <div className="text-center text-info py-3 mt-5">
        <h1>
          <span className="text-dark">Our Courses</span>
        </h1>
      </div>
      <div className="homeService">
        {services.map((service) => (
          <HomeService key={service.id} service={service}></HomeService>
        ))}
      </div>

      <div className="seeMoreBtn text-center mt-3 ">
        <Link className="btn btn-success px-4 py-2 text-light fs-4" to="service">
          See More course...
        </Link>
      </div>

      <HomeFrom></HomeFrom>
    </div>
  );
};

export default Home;
