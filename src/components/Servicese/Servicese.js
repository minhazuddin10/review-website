import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Service from "../Service/Service";

const Servicese = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const url = "/service.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="homeService">
      {services.map((service) => (
        <Service key={service.id} service={service}></Service>
      ))}
    </div>
  );
};

export default Servicese;
